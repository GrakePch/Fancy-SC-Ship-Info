import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { mdiFilter, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

import codeToManu from "../../assets/manu_code_to_name.json";
import ship_pics_and_zh_name from "../../assets/ship_pics_and_zh_name.json";
import I18nPure from "../../components/I18nPure";
import ShipSelectCard from "../../components/ShipSelector/ShipSelectCard/ShipSelectCard";
import LangContext from "../../contexts/LangContext";
import dataShipIndex from "../../data/index-min.json";
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

const Prices = ({}) => {
  const lang = useContext(LangContext)[0];
  const { manufacturer } = useParams();
  const [shipList, setShipList] = useState([]);
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
    shipsOfThisManu.sort((a, b) => a[1] - b[1]);

    setShipList(shipsOfThisManu);
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
                I18nPure(codeToManu[manufacturer], "zh") +
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
          <div className="ship-select-card-list grid3">
            {shipList.map(([item, price], key) => (
              <ShipSelectCard
                key={item.ClassName}
                shipName={
                  lang == "zh"
                    ? item.NameCnZh?.split(" ").slice(1).join(" ") ||
                      item.NameShort
                    : item.NameShort
                }
                manufacturer={item.Manufacturer}
                isReleased={false}
                isShip={item.Type == "Ship"}
                imgSrc={`https://ships.42kit.com/resized/${(
                  specialFileName[item.ClassName] || item.NameShort
                )
                  ?.normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace("'", "-")
                  .replace(".", "-")
                  .toLowerCase()
                  .trimEnd()
                  .replaceAll(" ", "-")}%20top.png`}
                infoText={price}
                colorOverride="var(--color-text)"
                bgColorOverride="var(--color-bg-light)"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
