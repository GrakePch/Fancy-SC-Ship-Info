import "./ShipSelector.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import ShipSelectCard from "./ShipSelectCard/ShipSelectCard";
import { useEffect, useState } from "react";
import manufacturers_small from "../../assets/manufacturers_small";
import ManufacturerToHue from "../../assets/ManufacturerToHue";

/* eslint-disable react/prop-types */
function ShipSelector({ on, setState, shipIndex, setShipId }) {
  let [manufacturerList, setManufacturerList] = useState([]);
  let [filterForManu, setFilterForManu] = useState(null);
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
                  {manu}
                </div>
              </div>
            ))}
          </div>
          <div className="ship-select-card-list-wrapper">
            <div className="ship-select-card-list grid3">
              {shipIndex
                .filter((item) =>
                  filterForManu == null
                    ? true
                    : item.Manufacturer == filterForManu
                )
                .sort((a, b) => a.NameShort?.localeCompare(b.NameShort))
                .map((item, idx) => (
                  <div
                    key={item.ClassName + idx}
                    onClick={() => {
                      setState(false);
                      setShipId(item.ClassName);
                      window.history.pushState(
                        null,
                        "",
                        `?s=${item.ClassName}`
                      );
                    }}
                  >
                    <ShipSelectCard
                      shipName={item.NameShort}
                      manufacturer={item.Manufacturer}
                      isReleased={item.PU.HasPerf}
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
