import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./QT.css";
import ManufacturerToHue from "./assets/ManufacturerToHue";
import cross from "./assets/cross.png";
import icons from "./assets/icons";
import manufacturers_small from "./assets/manufacturers_small";
import ship_pics_and_zh_name from "./assets/ship_pics_and_zh_name.json";
import themes from "./assets/themes";
import I18n from "./components/I18n";
import ListQuantumDrives from "./components/ListQuantumDrives/ListQuantumDrives";
import ShipSelector from "./components/ShipSelector/ShipSelector";
import SimpleComponent from "./components/SimpleComponent/SimpleComponent";
import LangContext from "./contexts/LangContext";
import shipIndex from "./data/index-min.json";
import shipHardpoints from "./data/ship-hardpoints-min.json";
import shipList from "./data/ship-list-min.json";

const QT = ({}) => {
  const [lang, setLang] = useContext(LangContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const [dictShipZhName, setDictShipZhName] = useState({});
  const [dictShipImgIso, setDictShipImgIso] = useState({});

  const [shipId, setShipId] = useState(null);

  const [shipIdx, setShipIdx] = useState(null);
  const [shipObj, setShipObj] = useState(null);
  const [shipHardpts, setShipHardpts] = useState(null);

  const [shipQDriveSize, setShipQDriveSize] = useState(-1);

  useEffect(() => {
    // if (!searchParams) return;
    setShipId(searchParams.get("s"));
    setLang(searchParams.get("lang"));

    for (let i = 0; i < shipIndex.length; ++i)
      shipIndex[i].NameShort = shipIndex[i].Name.split(" ").slice(1).join(" ");
  }, [searchParams, setLang]);

  useEffect(() => {
    let dShipZhName = {};
    let dShipImgIso = {};
    for (let i = 0; i < ship_pics_and_zh_name.ships.length; ++i) {
      let firstKey = Object.keys(ship_pics_and_zh_name.ships[i])[0];
      dShipZhName[firstKey] = ship_pics_and_zh_name.ships[i][firstKey];
      if (ship_pics_and_zh_name.ships[i].vehicleLink)
        dShipImgIso[firstKey] = ship_pics_and_zh_name.ships[i].vehicleLink;
    }
    setDictShipZhName(dShipZhName);
    setDictShipImgIso(dShipImgIso);

    let theme = searchParams.get("theme") == "light" ? "light" : "dark";
    document.documentElement.style.setProperty(
      "--color-bg",
      themes[theme].colorBg,
    );
    document.documentElement.style.setProperty(
      "--color-bg-a",
      themes[theme].colorBgA,
    );
    document.documentElement.style.setProperty(
      "--color-bg-light",
      themes[theme].colorBgLight,
    );
    document.documentElement.style.setProperty(
      "--color-bg-light-a",
      themes[theme].colorBgLightA,
    );
    document.documentElement.style.setProperty(
      "--color-bg-lighter",
      themes[theme].colorBgLighter,
    );
    document.documentElement.style.setProperty(
      "--color-bg-lighter-a",
      themes[theme].colorBgLighterA,
    );
    document.documentElement.style.setProperty(
      "--color-text",
      themes[theme].colorText,
    );
    document.documentElement.style.setProperty(
      "--color-primary-bg",
      themes[theme].colorPrimaryBg,
    );
    document.documentElement.style.setProperty(
      "--color-primary-text",
      themes[theme].colorPrimaryText,
    );
    document.documentElement.style.setProperty(
      "--color-primary-sat",
      themes[theme].colorPrimarySat,
    );
    document.documentElement.style.setProperty(
      "--color-primary-dim",
      themes[theme].colorPrimaryDim,
    );
    document.documentElement.style.setProperty(
      "--color-primary-dimmer",
      themes[theme].colorPrimaryDimmer,
    );
  }, []);

  useEffect(() => {
    let tempShipIdx = null;
    let tempShipObj = null;
    let tempShipHardpts = null;

    let tempShipQDriveSize = -1;

    if (shipId) {
      for (let i = 0; i < shipIndex.length; i++) {
        if (
          shipIndex[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          tempShipIdx = shipIndex[i];
          break;
        }
      }

      /* Update Color Theme */
      if (searchParams.get("hue") != null && !isNaN(searchParams.get("hue"))) {
        document.documentElement.style.setProperty(
          "--hue",
          searchParams.get("hue"),
        );
      } else if (
        shipIdx &&
        shipIdx.Manufacturer &&
        ManufacturerToHue[shipIdx.Manufacturer] != null
      )
        document.documentElement.style.setProperty(
          "--hue",
          `${ManufacturerToHue[shipIdx.Manufacturer]}`,
        );

      /* Set Ship Object */
      for (let i = 0; i < shipList.length; i++) {
        if (
          shipList[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          tempShipObj = shipList[i];
        }
      }

      /* Set Ship Hardpoints */
      for (let i = 0; i < shipHardpoints.length; ++i) {
        if (
          shipHardpoints[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          tempShipHardpts = shipHardpoints[i];
          tempShipQDriveSize =
            tempShipHardpts.Hardpoints?.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
              0,
            )?.MaxSize;
        }
      }
    }

    setShipIdx(tempShipIdx);
    setShipObj(tempShipObj);
    setShipHardpts(tempShipHardpts);
    setShipQDriveSize(tempShipQDriveSize);
  }, [shipId, shipIdx]);

  return shipIdx == null ? (
    <ShipSelector
      shipIndex={shipIndex}
      dictShipZhName={dictShipZhName}
      setSearchParams={setSearchParams}
    />
  ) : (
    <div>
      <div className="QT-title-card-group-hor">
        <div className="QT-title-card">
          <img
            src={dictShipImgIso[shipIdx.Name]}
            alt="ship_image"
            className="ship-img-iso"
          />
          <div className="manufacturer">
            <div>{manufacturers_small[shipIdx.Manufacturer]}</div>
            <h2>
              <I18n text={shipIdx.Manufacturer} />
            </h2>
          </div>
          <h1 className="ship-name">
            {lang == "zh"
              ? dictShipZhName[shipIdx.Name]?.split(" ").slice(1).join(" ") ||
                shipIdx.NameShort
              : shipIdx.NameShort}
          </h1>
          <h2 className="ship-name-secondary">{shipIdx.Name}</h2>
        </div>
        <div className="QT-title-card-group-ver">
          {shipHardpts?.Hardpoints?.Components?.Propulsion?.QuantumDrives ? (
            <SimpleComponent
              type="量子引擎"
              icon="QuantumDrives"
              itemObj={
                shipHardpts.Hardpoints.Components.Propulsion.QuantumDrives
              }
            />
          ) : (
            <div className="QT-title-card-sml">
              {icons.QuantumDrives}
              <div>
                <p>量子引擎</p>
                <p>未知</p>
              </div>
            </div>
          )}
          <div className="QT-title-card-sml">
            {icons.QuantumFuelCapacity}
            <div>
              <p>量子燃料容量</p>
              <p>
                {shipObj
                  ? shipObj.FuelManagement?.QuantumFuelCapacity || "0"
                  : "未知"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {shipObj ? (
        shipObj?.FuelManagement?.QuantumFuelCapacity ? (
          <ListQuantumDrives
            minSize={shipQDriveSize}
            maxSize={shipQDriveSize}
            defaultQDClassName={
              shipHardpts?.Hardpoints?.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                0,
              ).BaseLoadout.ClassName
            }
            QTFuel={shipObj?.FuelManagement?.QuantumFuelCapacity}
          />
        ) : (
          <div className="SimpleInfo-nodata" style={{ marginTop: "1rem" }}>
            <img className="bg" src={cross} width="100%" height="100%" />
            <p>不可量子航行</p>
          </div>
        )
      ) : (
        <div className="SimpleInfo-nodata" style={{ marginTop: "1rem" }}>
          <img className="bg" src={cross} width="100%" height="100%" />
          <p>暂无数据</p>
        </div>
      )}
    </div>
  );
};

export default QT;
