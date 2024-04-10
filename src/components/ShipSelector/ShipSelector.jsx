import "./ShipSelector.css";
import Icon from "@mdi/react";
import {
  mdiAirplane,
  mdiAirplaneOff,
  mdiCar,
  mdiCarOff,
  mdiClose,
  mdiInformationOutline,
  mdiMotorbike,
  mdiMotorbikeOff,
  mdiTranslate,
} from "@mdi/js";
import ShipSelectCard from "./ShipSelectCard/ShipSelectCard";
import { useContext, useEffect, useState } from "react";
import manufacturers_small from "../../assets/manufacturers_small";
import ManufacturerToHue from "../../assets/ManufacturerToHue";
import I18n from "../I18n";
import LangContext from "../../contexts/LangContext";

/* eslint-disable react/prop-types */
function ShipSelector({ on, setState, shipIndex, setShipId, dictShipZhName }) {
  const [manufacturerList, setManufacturerList] = useState([]);
  const [filterForManu, setFilterForManu] = useState(null);
  const [filterForShipVeh, setFilterForShipVeh] = useState([
    true,
    true,
    true,
  ]); /* 0: Ship, 1: Ground Vehicle, 2: Gravlev */
  const [filterForReleased, setFilterForReleased] = useState(false);
  const [lang, setLang] = useContext(LangContext);

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") setState(false);
      },
      false
    );
  });

  useEffect(() => {
    let manuSet = new Set();
    for (let i = 0; i < shipIndex.length; ++i) {
      manuSet.add(shipIndex[i].Manufacturer);
    }
    setManufacturerList(Array.from(manuSet));
  }, [shipIndex]);

  return (
    <div
      className={`background-exit ${on ? "on" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setState(false);
      }}
    >
      <div className="Ship-selector-container">
        <div className="title-bar">
          <h2>Select a vehicle</h2>
          <button
            className="circleIconBtn"
            onClick={() => {
              setFilterForShipVeh((p) => [!p[0], p[1], p[2]]);
            }}
            type="button"
            style={{ opacity: !filterForShipVeh[0] && 0.5 }}
          >
            <Icon
              path={!filterForShipVeh[0] ? mdiAirplaneOff : mdiAirplane}
              size={1}
            />
          </button>
          <button
            className="circleIconBtn"
            onClick={() => {
              setFilterForShipVeh((p) => [p[0], !p[1], p[2]]);
            }}
            type="button"
            style={{ opacity: !filterForShipVeh[1] && 0.5 }}
          >
            <Icon path={!filterForShipVeh[1] ? mdiCarOff : mdiCar} size={1} />
          </button>
          <button
            className="circleIconBtn"
            onClick={() => {
              setFilterForShipVeh((p) => [p[0], p[1], !p[2]]);
            }}
            type="button"
            style={{ opacity: !filterForShipVeh[2] && 0.5 }}
          >
            <Icon
              path={!filterForShipVeh[2] ? mdiMotorbikeOff : mdiMotorbike}
              size={2}
            />
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
            <label htmlFor="filterForReleased">Released Only</label>
          </div>
          <div className="flex-grow" />
          <button
            className="circleIconBtn"
            onClick={() => {
              let newValue = lang == "zh" ? "en" : "zh";
              setLang(newValue);
              let sp = new URLSearchParams(window.location.search);
              sp.set("lang", newValue);
              window.history.pushState(null, "", "?" + sp.toString());
            }}
          >
            <Icon path={mdiTranslate} size={1} />
          </button>
          <button
            className="circleIconBtn"
            onClick={() =>
              window.open(
                "https://github.com/GrakePch/Fancy-SC-Ship-Info/blob/main/README.md",
                "_blank"
              )
            }
          >
            <Icon path={mdiInformationOutline} size={1} />
          </button>
          <button className="circleIconBtn" onClick={() => setState(false)}>
            <Icon path={mdiClose} size={1} />
          </button>
        </div>
        <div className="contents">
          <div className="filter-by-manufacturer">
            {manufacturerList.map((manu) => (
              <div className="filter-btn-and-tooltip" key={manu}>
                <button
                  style={
                    manu != filterForManu
                      ? {
                          backgroundColor:
                            ManufacturerToHue[manu] !== undefined
                              ? `hsl(${ManufacturerToHue[manu]}, 20%, 19%)`
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
                        }
                  }
                  onClick={() =>
                    setFilterForManu((current) =>
                      current != null && current == manu ? null : manu
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
          <div className="ship-select-card-list-wrapper">
            <div className="ship-select-card-list grid3">
              {shipIndex
                .filter(
                  (item) =>
                    (filterForManu == null
                      ? true
                      : item.Manufacturer == filterForManu) &&
                    (filterForReleased
                      ? item.ProgressTracker.Status == "Released" ||
                        item.ProgressTracker.Status == "PU"
                      : true) &&
                    ((item.Type == "Ship" && filterForShipVeh[0]) ||
                      (item.Type == "Vehicle" && filterForShipVeh[1]) ||
                      (item.Type == "Gravlev" && filterForShipVeh[2]))
                )
                .sort((a, b) =>
                  lang == "zh"
                    ? (
                        dictShipZhName[a.Name]?.split(" ").slice(1).join(" ") ||
                        a.NameShort
                      )?.localeCompare(
                        dictShipZhName[b.Name]?.split(" ").slice(1).join(" ") ||
                          b.NameShort,
                        "zh"
                      )
                    : a.NameShort?.localeCompare(b.NameShort)
                )
                .map((item, idx) => (
                  <div
                    key={item.ClassName + idx}
                    onClick={() => {
                      setState(false);
                      setShipId(item.ClassName);
                      let sp = new URLSearchParams(window.location.search);
                      sp.set("s", item.ClassName);
                      // window.location.search = sp.toString();
                      window.history.pushState(null, "", "?" + sp.toString());
                      // window.history.pushState(
                      //   null,
                      //   "",
                      //   `?s=${item.ClassName}`
                      // );
                    }}
                  >
                    <ShipSelectCard
                      // shipName={item.NameShort}
                      shipName={
                        lang == "zh"
                          ? dictShipZhName[item.Name]
                              ?.split(" ")
                              .slice(1)
                              .join(" ") || item.NameShort
                          : item.NameShort
                      }
                      manufacturer={item.Manufacturer}
                      isReleased={item.PU.HasPerf}
                      isShip={item.Type == "Ship"}
                      imgSrc={`https://ships.42kit.com/resized/${item.NameShort?.normalize(
                        "NFD"
                      )
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
    </div>
  );
}

export default ShipSelector;
