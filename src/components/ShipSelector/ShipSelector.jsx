import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { mdiFilter, mdiMagnify, mdiVanUtility } from "@mdi/js";
import Icon from "@mdi/react";

import ManufacturerToHue from "../../assets/ManufacturerToHue";
import icons from "../../assets/icons";
import manufacturers_small from "../../assets/manufacturers_small";
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
};

/* eslint-disable react/prop-types */
function ShipSelector({ shipIndex, dictShipZhName }) {
  const [manufacturerList, setManufacturerList] = useState([]);
  const [filterDrawerOn, setFilterDrawerOn] = useState(false);
  const [filterForManu, setFilterForManu] = useState(null);
  const [filterForShipVeh, setFilterForShipVeh] = useState([
    true,
    true,
    true,
  ]); /* 0: Ship, 1: Ground Vehicle, 2: Gravlev */
  const [filterForReleased, setFilterForReleased] = useState(false);
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
    let manuSet = new Set();
    for (let i = 0; i < shipIndex.length; ++i) {
      manuSet.add(shipIndex[i].Manufacturer);
    }
    setManufacturerList(Array.from(manuSet));
  }, [shipIndex]);

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

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
            dictShipZhName[a.Name]?.split(" ").slice(1).join(" ") || a.NameShort
          )?.localeCompare(
            dictShipZhName[b.Name]?.split(" ").slice(1).join(" ") ||
              b.NameShort,
            "zh",
          )
        : a.NameShort?.localeCompare(b.NameShort),
    );

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
            <button
              className={`Ship-selector-filter-toggle ${isFilterActive && "on"}`}
            >
              <Icon
                path={mdiFilter}
                size={1}
                onClick={() => setFilterDrawerOn((prev) => !prev)}
              />
            </button>
          </div>
          <div className={`Ship-selector-filter ${filterDrawerOn || "off"}`}>
            <div className="filter-first-row">
              <button
                className={`circleIconBtn ${
                  !filterForShipVeh[0] && "off"
                } rotate90`}
                onClick={() => {
                  setFilterForShipVeh((p) => [!p[0], p[1], p[2]]);
                }}
                type="button"
              >
                {icons["ship_top"]}
              </button>
              <button
                className={`circleIconBtn ${!filterForShipVeh[1] && "off"}`}
                onClick={() => {
                  setFilterForShipVeh((p) => [p[0], !p[1], p[2]]);
                }}
                type="button"
              >
                <Icon path={mdiVanUtility} size={1} />
              </button>
              <button
                className={`circleIconBtn ${!filterForShipVeh[2] && "off"}`}
                onClick={() => {
                  setFilterForShipVeh((p) => [p[0], p[1], !p[2]]);
                }}
                type="button"
              >
                {icons["gravlev"]}
              </button>
              <div>
                <input
                  className="btnFilterForReleased"
                  onChange={() => {
                    setFilterForReleased((p) => !p);
                  }}
                  type="checkbox"
                  id="filterForReleased"
                  checked={filterForReleased}
                />
                <label htmlFor="filterForReleased">
                  <I18n text="ShipFilterReleasedOnly" />
                </label>
              </div>
            </div>

            <div className="filter-by-manufacturer">
              {manufacturerList.map((manu) => (
                <div className="filter-btn-and-tooltip" key={manu}>
                  <button
                    style={
                      manu !== filterForManu
                        ? {
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
                          }
                        : {
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
                    }
                    onClick={() =>
                      setFilterForManu((current) =>
                        current != null && current == manu ? null : manu,
                      )
                    }
                  >
                    {manufacturers_small[manu] || manu[0]}
                  </button>
                  <div
                    className="font-slim"
                    style={{
                      backgroundColor:
                        ManufacturerToHue[manu] !== undefined
                          ? `hsl(${ManufacturerToHue[manu]}, 100%, 90%)`
                          : "#e3e3e3",
                    }}
                  >
                    <I18n text={manu} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`contents ${filterDrawerOn && "filter-drawer-on"}`}>
        <div className="ship-select-card-list-wrapper">
          <div className="ship-select-card-list grid3">
            {processedShipIndex.map((item, idx) => (
              <div
                key={item.ClassName + idx}
                onClick={() => navigate("/" + item.ClassName)}
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
                  manufacturer={item.Manufacturer}
                  isReleased={item.PU.HasPerf}
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipSelector;
