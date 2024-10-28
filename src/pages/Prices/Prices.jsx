import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { mdiFilter, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

import codeToManu from "../../assets/manu_code_to_name.json";
import ship_pics_and_zh_name from "../../assets/ship_pics_and_zh_name.json";
import I18n from "../../components/I18n";
import I18nPure from "../../components/I18nPure";
import ShipSelectCard from "../../components/ShipSelector/ShipSelectCard/ShipSelectCard";
import dataShipIndex from "../../data/index-min.json";
import ship_name_to_series from "../../data/ship_name_to_series.json";
import "./Prices.css";

const specialFileName = {
  ANVL_Hornet_F7A_Mk1: "f7a-hornet",
  ANVL_Hornet_F7A_Mk2: "f7a-mkii",
  ANVL_Hornet_F7C: "f7c-hornet",
  ANVL_Hornet_F7C_Mk2: "f7c-mkii",
  AEGS_Retaliator: "retaliator-bomber",
  RSI_Zeus_CL: "zeus-mkii-cl",
  RSI_Zeus_ES: "zeus-mkii-es",
  RSI_Zeus_MR: "zeus-mkii-mr",
  RSI_Polaris_FW: "polaris",
  AEGS_Idris_M_PU: "idris-m",
};

const formatImgSrc = (name) =>
  `https://ships.42kit.com/resized/${name
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("'", "-")
    .replace(".", "-")
    .toLowerCase()
    .trimEnd()
    .replaceAll(" ", "-")}%20top.png`;

const Prices = ({}) => {
  const lang = localStorage.getItem("lang");
  const { manufacturer } = useParams();
  const [seriesList, setSeriesList] = useState([]);
  useEffect(() => {
    let shipsOfThisManu = [];
    dataShipIndex.forEach((shipData) => {
      let manu = shipData.Manufacturer;
      if (codeToManu[manufacturer] == manu) {
        let nameShort = shipData.Name.split(" ").slice(1).join(" ");
        shipData.NameShort = nameShort;

        let nameCnZh = null;
        for (let i = 0; i < ship_pics_and_zh_name.ships.length; ++i) {
          if (ship_pics_and_zh_name.ships[i][shipData.Name]) {
            nameCnZh = ship_pics_and_zh_name.ships[i][shipData.Name].replace(
              "-",
              " ",
            );
            break;
          }
        }
        shipData.NameCnZh = nameCnZh;
        shipsOfThisManu.push([shipData, shipData.Store.Buy]);
      }
    });
    shipsOfThisManu.sort((a, b) =>
      a[1] === null ? 1 : b[1] === null ? -1 : a[1] - b[1],
    );

    let seriesDict = {};
    let seriesOrder = [];
    for (const [data, price] of shipsOfThisManu) {
      let seriesName = ship_name_to_series[data.ClassName];
      if (!seriesName) seriesName = data.ClassName;
      if (!seriesDict[seriesName]) {
        seriesOrder.push(seriesName);
        seriesDict[seriesName] = {
          ships: [],
        };
      }
      seriesDict[seriesName].ships.push([data, price]);
    }

    let series = seriesOrder.map((s) => ({
      className: s,
      ships: seriesDict[s].ships,
    }));

    setSeriesList(series);
  }, [manufacturer]);
  return (
    <div className="Ship-selector-container">
      <div className="title-bar-wrapper">
        <div className="title-bar-bg-blur"></div>
        <div className="title-bar">
          <div className="Ship-selector-search-bar">
            <Icon path={mdiMagnify} size={1} />
            <input
              type="search"
              placeholder={
                I18nPure(codeToManu[manufacturer], lang) +
                " / " +
                codeToManu[manufacturer]
              }
              onChange={() => {}}
            />
            <button className={`Ship-selector-filter-toggle`}>
              <Icon path={mdiFilter} size={1} />
            </button>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="ship-select-card-list-wrapper">
          <div className="ship-select-card-list grid2">
            {seriesList.map((series) => {
              if (series.ships.length === 1) {
                const [item, price] = series.ships[0];
                return (
                  <ShipSelectCard
                    key={item.className}
                    shipName={
                      lang == "zh_cn"
                        ? item.NameCnZh?.split(" ").slice(1).join(" ") ||
                          item.NameShort
                        : item.NameShort
                    }
                    shipNameEng={item.NameShort}
                    manufacturer={item.Manufacturer}
                    isReleased={item.ProgressTracker.Status === "Released"}
                    isShip={item.Type == "Ship"}
                    imgSrc={formatImgSrc(
                      specialFileName[item.ClassName] || item.NameShort,
                    )}
                    rsiPrice={price}
                    inGamePrice={item.PU.Buy}
                    colorOverride="var(--color-text)"
                    bgColorOverride="var(--color-bg-light)"
                  />
                );
              } else
                return (
                  <div
                    style={{
                      gridColumn: "1/-1",
                      position: "relative",
                      width: "calc(100% + 2rem)",
                      left: "-1rem",
                      padding: "1rem",
                      margin: ".5rem 0",
                      borderRadius: "2rem",
                      backgroundColor: "#80808020",
                    }}
                  >
                    <p
                      style={{
                        lineHeight: 1,
                        marginLeft: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <I18n text={series.className} />
                    </p>
                    <div className="grid2">
                      {series.ships.map(([item, price]) => (
                        <ShipSelectCard
                          key={item.className}
                          shipName={
                            lang == "zh_cn"
                              ? item.NameCnZh?.split(" ").slice(1).join(" ") ||
                                item.NameShort
                              : item.NameShort
                          }
                          shipNameEng={item.NameShort}
                          manufacturer={item.Manufacturer}
                          isReleased={
                            item.ProgressTracker.Status === "Released"
                          }
                          isShip={item.Type == "Ship"}
                          imgSrc={formatImgSrc(
                            specialFileName[item.ClassName] || item.NameShort,
                          )}
                          rsiPrice={price}
                          inGamePrice={item.PU.Buy}
                          colorOverride="var(--color-text)"
                          bgColorOverride="var(--color-bg-light)"
                        />
                      ))}
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
