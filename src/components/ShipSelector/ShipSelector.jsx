import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

import ManufacturerToHue from "../../assets/ManufacturerToHue";
import manufacturers_small from "../../assets/manufacturers_small";
import ship_pics_and_zh_name from "../../assets/ship_pics_and_zh_name.json";
import shipIndex from "../../data/index.js";
import ship_name_to_series from "../../data/ship_name_to_series.json";
import I18n from "../I18n";
import I18nPure from "../I18nPure";
import ShipSelectCard from "./ShipSelectCard/ShipSelectCard";
import "./ShipSelector.css";

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
  CNOU_Pionneer: "pioneer",
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

const getManuButtonColors = (manu, isActive) =>
  isActive
    ? {
        backgroundColor:
          ManufacturerToHue[manu] !== undefined
            ? `hsl(${ManufacturerToHue[manu]}, 100%, 90%)`
            : "var(--color-text)",
        color:
          ManufacturerToHue[manu] !== undefined
            ? `hsl(${ManufacturerToHue[manu]}, 20%, 19%)`
            : "var(--color-bg)",
        fill:
          ManufacturerToHue[manu] !== undefined
            ? `hsl(${ManufacturerToHue[manu]}, 20%, 19%)`
            : "var(--color-bg)",
        boxShadow:
          ManufacturerToHue[manu] !== undefined
            ? `var(--acrylic-edge), 0 .125rem .875rem .125rem hsla(${ManufacturerToHue[manu]}, 100%, 90%, 60%)`
            : "var(--acrylic-edge), 0 .125rem .875rem .125rem hsla(0, 0%, 90%, 60%)",
      }
    : {
        backgroundColor:
          ManufacturerToHue[manu] !== undefined
            ? `hsl(${ManufacturerToHue[manu]}, 20%, 25%)`
            : "#303030",
        color:
          ManufacturerToHue[manu] !== undefined
            ? `hsl(${ManufacturerToHue[manu]}, 100%, 90%)`
            : "inherit",
        fill:
          ManufacturerToHue[manu] !== undefined
            ? `hsl(${ManufacturerToHue[manu]}, 100%, 90%)`
            : "var(--color-text)",
      };

/* eslint-disable react/prop-types */
function ShipSelector() {
  const [manufacturerList, setManufacturerList] = useState([]);
  const [filterForManu, setFilterForManu] = useState(null);
  const [filterForShipVeh, setFilterForShipVeh] = useState([
    true,
    true,
    true,
  ]); /* 0: Ship, 1: Ground Vehicle, 2: Gravlev */
  const [filterForReleased, setFilterForReleased] = useState(false);
  const [dictShipZhName, setDictShipZhName] = useState({});
  const [seriesList, setSeriesList] = useState([]);

  const lang = localStorage.getItem("lang");
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const isFilterActive =
    filterForManu ||
    filterForReleased ||
    !filterForShipVeh[0] ||
    !filterForShipVeh[1] ||
    !filterForShipVeh[2];

  useEffect(() => {
    let dShipZhName = {};
    for (let i = 0; i < ship_pics_and_zh_name.ships.length; ++i) {
      let firstKey = Object.keys(ship_pics_and_zh_name.ships[i])[0];
      dShipZhName[firstKey] = ship_pics_and_zh_name.ships[i][firstKey];
    }
    setDictShipZhName(dShipZhName);

    for (let i = 0; i < shipIndex.length; ++i)
      shipIndex[i].NameShort = shipIndex[i].Name.split(" ").slice(1).join(" ");
  }, []);

  useEffect(() => {
    let manuSet = new Set();
    for (let i = 0; i < shipIndex.length; ++i) {
      manuSet.add(shipIndex[i].Manufacturer);
    }
    setManufacturerList(Array.from(manuSet));
  }, [shipIndex]);

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    const processedShipIndex = shipIndex
      .filter(
        (item) =>
          (filterForManu == null ? true : item.Manufacturer == filterForManu) &&
          (filterForReleased
            ? item.ProgressTracker.Status == "Released" ||
              item.ProgressTracker.Status == "PU"
            : true) &&
          ((item.Type == "Ship" && filterForShipVeh[0]) ||
            (item.Type == "Vehicle" && filterForShipVeh[1]) ||
            (item.Type == "Gravlev" && filterForShipVeh[2])) &&
          (item.NameShort?.toLowerCase().includes(searchField.toLowerCase()) ||
            dictShipZhName[item.Name]
              ?.split(" ")
              .slice(1)
              .join(" ")
              .toLowerCase()
              .includes(searchField.toLowerCase())),
      )
      .sort((a, b) =>
        lang == "zh_cn"
          ? (
              dictShipZhName[a.Name]?.split(" ").slice(1).join(" ") ||
              a.NameShort
            )?.localeCompare(
              dictShipZhName[b.Name]?.split(" ").slice(1).join(" ") ||
                b.NameShort,
              "zh",
            )
          : a.NameShort?.localeCompare(b.NameShort),
      );
    processedShipIndex.sort((a, b) =>
      a.Store.Buy === null
        ? 1
        : b.Store.Buy === null
          ? -1
          : a.Store.Buy - b.Store.Buy,
    );
    let seriesDict = {};
    let seriesOrder = [];
    for (const data of processedShipIndex) {
      let seriesName = ship_name_to_series[data.ClassName];
      if (!seriesName) seriesName = data.ClassName;
      if (!seriesDict[seriesName]) {
        seriesOrder.push(seriesName);
        seriesDict[seriesName] = {
          ships: [],
        };
      }
      seriesDict[seriesName].ships.push(data);
    }

    let series = seriesOrder.map((s) => ({
      className: s,
      ships: seriesDict[s].ships,
    }));

    setSeriesList(series);
  }, [filterForManu]);

  return (
    <div className="Ship-selector-container">
      <div className="title-bar-wrapper">
        <div className="title-bar-bg-blur"></div>
        <div className="title-bar">
          <div className="Ship-selector-search-bar">
            <Icon path={mdiMagnify} size={1} />
            <input
              type="search"
              placeholder={I18nPure("ShipSelectorSearch", lang)}
              onChange={handleSearchChange}
            />
          </div>
          <div className="filter-by-manufacturer">
            {manufacturerList.map((manu) => (
              <button
                key={manu}
                style={getManuButtonColors(manu, manu === filterForManu)}
                onClick={() =>
                  setFilterForManu((current) =>
                    current != null && current == manu ? null : manu,
                  )
                }
              >
                {manufacturers_small[manu] || manu[0]}
                <I18n text={manu} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="ship-select-card-list-wrapper">
          <div className="ship-select-card-list grid2">
            {seriesList.map((series) => {
              if (series.ships.length === 1) {
                const item = series.ships[0];
                return (
                  <div
                    key={item.ClassName}
                    onClick={() => navigate("/" + item.ClassName + "?simple=1")}
                  >
                    <ShipSelectCard
                      shipName={
                        lang == "zh_cn"
                          ? dictShipZhName[item.Name]
                              ?.split(" ")
                              .slice(1)
                              .join(" ") || item.NameShort
                          : item.NameShort
                      }
                      shipNameEng={item.NameShort}
                      manufacturer={item.Manufacturer}
                      isReleased={item.PU.HasPerf}
                      isShip={item.Type == "Ship"}
                      imgSrc={formatImgSrc(
                        specialFileName[item.ClassName] || item.NameShort,
                      )}
                      rsiPrice={item.Store.Buy}
                      inGamePrice={item.PU.Buy}
                      colorOverride="var(--color-text)"
                      bgColorOverride="var(--color-bg-light)"
                    />
                  </div>
                );
              } else
                return (
                  <div
                    key={series.className}
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
                      {series.ships.map((item) => (
                        <div
                          key={item.ClassName}
                          onClick={() =>
                            navigate("/" + item.ClassName + "?simple=1")
                          }
                        >
                          <ShipSelectCard
                            shipName={
                              lang == "zh_cn"
                                ? dictShipZhName[item.Name]
                                    ?.split(" ")
                                    .slice(1)
                                    .join(" ") || item.NameShort
                                : item.NameShort
                            }
                            shipNameEng={item.NameShort}
                            manufacturer={item.Manufacturer}
                            isReleased={item.PU.HasPerf}
                            isShip={item.Type == "Ship"}
                            imgSrc={formatImgSrc(
                              specialFileName[item.ClassName] || item.NameShort,
                            )}
                            rsiPrice={item.Store.Buy}
                            inGamePrice={item.PU.Buy}
                            colorOverride="var(--color-text)"
                            bgColorOverride="var(--color-bg-light)"
                          />
                        </div>
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
}

export default ShipSelector;
