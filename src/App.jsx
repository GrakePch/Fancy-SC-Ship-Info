import { useEffect, useState } from "react";
import shipIndex from "./data/index-min.json";
import shipList from "./data/ship-list-min.json";
import shipHardpoints from "./data/ship-hardpoints-min.json";
import ship_pics_and_zh_name from "./assets/ship_pics_and_zh_name.json";
import manufacturers_small from "./assets/manufacturers_small";
import "./App.css";
import statusToHue from "./assets/statusToHue";
import ManufacturerToHue from "./assets/ManufacturerToHue";

import CardList from "./components/CardList/CardList";
import FlightCharacteristics from "./components/FlightCharacteristics/FlightCharacteristics";
import FlightAccelerations from "./components/FlightAccelerations/FlightAccelerations";
import ShipSelector from "./components/ShipSelector/ShipSelector";
import I18n from "./components/I18n";

import LangContext from "./contexts/LangContext";

import Icon from "@mdi/react";
import { mdiSync } from "@mdi/js";
import bg_line from "./assets/lines.png";
import Components from "./components/Components/Components";
import ComponentGroup from "./components/ComponentGroup/ComponentGroup";

function App() {
  const [lang, setLang] = useState("en");

  const [shipId, setShipId] = useState(null);

  const [shipIdx, setShipIdx] = useState(null);
  const [shipObj, setShipObj] = useState(null);
  const [shipHardpts, setShipHardpts] = useState(null);

  const [speedMax, setSpeedMax] = useState(0);
  const [pitchMax, setPitchMax] = useState(0);
  const [yawMax, setYawMax] = useState(0);
  const [rollMax, setRollMax] = useState(0);

  const [accelFwdMax, setAccelFwdMax] = useState(0);
  const [accelBwdMax, setAccelBwdMax] = useState(0);
  const [accelStrMax, setAccelStrMax] = useState(0);
  const [accelUwdMax, setAccelUwdMax] = useState(0);
  const [accelDwdMax, setAccelDwdMax] = useState(0);

  const [isShipSelectorOn, setIsShipSelectorOn] = useState(false);
  const [showingComponentDetail, setShowingComponentDetail] = useState(null);

  const [dictShipZhName, setDictShipZhName] = useState({});
  const [dictShipImgIso, setDictShipImgIso] = useState({});

  const [listPilotWeapons, setListPilotWeapons] = useState([]);
  const [listTurretGuns, setListTurretGuns] = useState([]);
  const [listMissileRacks, setListMissileRacks] = useState([]);
  const [listShields, setListShields] = useState([]);
  const [listPowerPlants, setListPowerPlants] = useState([]);
  const [listCoolers, setListCoolers] = useState([]);
  const [listQuantumDrives, setListQuantumDrives] = useState([]);
  const [totalDecoyAmmo, setTotalDecoyAmmo] = useState(0);
  const [totalNoiseAmmo, setTotalNoiseAmmo] = useState(0);
  const [totalDecoyItemNum, setTotalDecoyItemNum] = useState(0);
  const [totalNoiseItemNum, setTotalNoiseItemNum] = useState(0);

  useEffect(() => {
    let sp = new URLSearchParams(window.location.search);
    setShipId(sp.get("s"));
    setLang(sp.get("lang"));

    for (let i = 0; i < shipIndex.length; ++i)
      shipIndex[i].NameShort = shipIndex[i].Name.split(" ").slice(1).join(" ");
  }, []);

  useEffect(() => {
    if (shipId) {
      for (let i = 0; i < shipIndex.length; i++) {
        if (
          shipIndex[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          setShipIdx(shipIndex[i]);
          break;
        }
      }

      /* Update Color Theme */
      if (
        shipIdx &&
        shipIdx.Manufacturer &&
        ManufacturerToHue[shipIdx.Manufacturer] != null
      )
        document.documentElement.style.setProperty(
          "--hue",
          `${ManufacturerToHue[shipIdx.Manufacturer]}`
        );

      let _speedMax = 0;
      let _pitchMax = 0;
      let _yawMax = 0;
      let _rollMax = 0;
      let _fMax = 0;
      let _bMax = 0;
      let _sMax = 0;
      let _uMax = 0;
      let _dMax = 0;

      setShipObj(null);
      for (let i = 0; i < shipList.length; i++) {
        if (
          shipList[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          setShipObj(shipList[i]);
        }
        let flight = shipList[i].FlightCharacteristics;
        if (flight) {
          _speedMax = Math.max(_speedMax, flight.MaxSpeed);
          _pitchMax = Math.max(_pitchMax, flight.Pitch);
          _yawMax = Math.max(_yawMax, flight.Yaw);
          _rollMax = Math.max(_rollMax, flight.Roll);

          let accel = flight.AccelerationG;
          let capct = flight.Capacitors;
          _fMax = Math.max(_fMax, accel.Main * capct.Y_AccelMultiplicator);
          _bMax = Math.max(_bMax, accel.Retro * capct.Y_AccelMultiplicator);
          _sMax = Math.max(_sMax, accel.Strafe * capct.X_AccelMultiplicator);
          _uMax = Math.max(_uMax, accel.Up * capct.Z_AccelMultiplicator);
          _dMax = Math.max(_dMax, accel.Down * capct.Z_AccelMultiplicator);
        }
      }
      setPitchMax(Math.max(_pitchMax, 90));
      setYawMax(Math.max(_yawMax, 90));
      setRollMax(_rollMax);
      setSpeedMax(_speedMax);
      setAccelFwdMax(_fMax);
      setAccelBwdMax(_bMax);
      setAccelStrMax(_sMax);
      setAccelUwdMax(_uMax);
      setAccelDwdMax(_dMax);
      // console.log(_fMax, _bMax, _sMax, _uMax, _dMax);

      /* Set Ship Hardpoints */
      setShipHardpts(null);
      for (let i = 0; i < shipHardpoints.length; ++i) {
        if (
          shipHardpoints[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          setShipHardpts(shipHardpoints[i]);
        }
      }
    }
  }, [shipId, shipIdx]);

  useEffect(() => {
    if (shipIdx) {
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
    }
  }, [shipIdx]);

  useEffect(() => {
    if (!shipHardpts) return;
    let temp = [];

    shipHardpts.Hardpoints.Weapons.PilotWeapons?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      }
    );
    setListPilotWeapons(temp);

    temp = [];

    shipHardpts.Hardpoints.Weapons.MannedTurrets?.InstalledItems?.forEach(
      (item) => {
        item?.SubWeapons?.forEach((subItem) => temp.push(subItem));
      }
    );
    shipHardpts.Hardpoints.Weapons.RemoteTurrets?.InstalledItems?.forEach(
      (item) => {
        item?.SubWeapons?.forEach((subItem) => temp.push(subItem));
      }
    );
    setListTurretGuns(temp);

    temp = [];
    shipHardpts.Hardpoints.Weapons.MissileRacks?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      }
    );
    setListMissileRacks(temp);

    temp = [];
    shipHardpts.Hardpoints.Components.Systems?.Shields?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      }
    );
    setListShields(temp);

    temp = [];
    shipHardpts.Hardpoints.Components.Propulsion?.PowerPlants?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      }
    );
    setListPowerPlants(temp);

    temp = [];
    shipHardpts.Hardpoints.Components.Systems?.Coolers?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      }
    );
    setListCoolers(temp);

    temp = [];
    shipHardpts.Hardpoints.Components.Propulsion?.QuantumDrives?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      }
    );
    setListQuantumDrives(temp);

    let tempDecoyItemNum = 0;
    let tempNoiseItemNum = 0;
    if (shipHardpts.Hardpoints.Components.Systems.Countermeasures) {
      let CMs =
        shipHardpts.Hardpoints.Components.Systems.Countermeasures
          .InstalledItems;
      for (let i = 0; i < CMs?.length; ++i) {
        /* Special case for origin jumpworks: both decoy and noise are called "noise" */
        if (CMs[i].Name == "Origin Jumpworks Noise Launcher") {
          if (CMs[i].Ammunition > 10) {
            setTotalDecoyAmmo(CMs[i].Ammunition);
            tempDecoyItemNum++;
          } else {
            setTotalNoiseAmmo(CMs[i].Ammunition);
            tempNoiseItemNum++;
          }
          continue;
        }
        /* General */
        if (CMs[i].Name.includes("Decoy") || CMs[i].Name.includes("Flare")) {
          setTotalDecoyAmmo(CMs[i].Ammunition);
          tempDecoyItemNum++;
        } else if (
          CMs[i].Name.includes("Noise") ||
          CMs[i].Name.includes("Chaff")
        ) {
          setTotalNoiseAmmo(CMs[i].Ammunition);
          tempNoiseItemNum++;
        }
      }
    }
    setTotalDecoyItemNum(tempDecoyItemNum);
    setTotalNoiseItemNum(tempNoiseItemNum);
  }, [shipHardpts]);

  return (
    <LangContext.Provider value={[lang, setLang]}>
      <ShipSelector
        on={isShipSelectorOn}
        setState={setIsShipSelectorOn}
        shipIndex={shipIndex}
        setShipId={setShipId}
        dictShipZhName={dictShipZhName}
      />
      {shipIdx == null && (
        <button onClick={() => setIsShipSelectorOn(true)} className="font-geom">
          <h2>Select a vehicle</h2>
        </button>
      )}
      {shipIdx && (
        <div className="title-card">
          <div className="manufacturer-bg">
            {manufacturers_small[shipIdx.Manufacturer]}
          </div>
          <img
            src={dictShipImgIso[shipIdx.Name]}
            alt="ship_image"
            className="ship-img-iso"
          />
          {/* <img src={`https://ships.42kit.com/${shipIdx.NameShort.toLowerCase().trimEnd().replaceAll(" ", "-")}%20iso.png`} alt="ship_image" className="ship-img-iso" /> */}
          <div className="manufacturer">
            <div>{manufacturers_small[shipIdx.Manufacturer]}</div>
            <h2>
              <I18n text={shipIdx.Manufacturer} />
            </h2>
          </div>
          <div className="ship-name-wrapper">
            <h1 className="ship-name">
              {lang == "zh"
                ? dictShipZhName[shipIdx.Name]?.split(" ").slice(1).join(" ") ||
                  shipIdx.NameShort
                : shipIdx.NameShort}
            </h1>
            {/* <h1 className="ship-name">{shipIdx.NameShort}</h1> */}
            <button
              className="circleIconBtn"
              onClick={() => setIsShipSelectorOn(true)}
            >
              <Icon path={mdiSync} size={1} />
            </button>
          </div>
          <div className="career-and-role font-slim">
            <h4>
              <I18n text={shipIdx.Career} />
            </h4>
            <h4>
              <I18n text={shipIdx.Role} />
            </h4>
            <h4
              style={{
                color: `hsl(${
                  statusToHue[shipIdx.ProgressTracker.Status]
                }, 100%, 50%)`,
                backgroundColor: `hsl(${
                  statusToHue[shipIdx.ProgressTracker.Status]
                }, 100%, 9%)`,
              }}
            >
              {shipIdx.ProgressTracker.Status}{" "}
              {shipIdx.ProgressTracker.Patch && (
                <span>{shipIdx.ProgressTracker.Patch}</span>
              )}
            </h4>
          </div>
          <h3
            className="prices font-slim"
            style={{ opacity: shipIdx.PU.Buy ? 1 : 0.5 }}
          >
            {shipIdx.PU.Buy
              ? shipIdx.PU.Buy + " aUEC"
              : "Not Purchasable with aUEC"}
          </h3>
          <h3 className="prices font-slim">
            {shipIdx.Store.Buy} USD
            {shipIdx.Store.isLimitedSale && " LIMITED SALE"}
          </h3>
        </div>
      )}
      {shipIdx && shipHardpts && (
        <div className="component-sizes-wrapper">
          <div className="component-sizes-btn-wrapper">
            <ComponentGroup
              title="PilotWeaponHardpoints"
              icon="Weapons"
              defList={listPilotWeapons}
              isSpan2
              isActive={showingComponentDetail === "Weapons"}
              funcOnClick={() => {
                setShowingComponentDetail((s) =>
                  s === "Weapons" ? null : "Weapons"
                );
              }}
            />
            <ComponentGroup
              title="TurretWeaponHardpoints"
              icon="Turrets"
              defList={listTurretGuns}
              isSpan2
              isActive={showingComponentDetail === "Turrets"}
              funcOnClick={() => {
                setShowingComponentDetail((s) =>
                  s === "Turrets" ? null : "Turrets"
                );
              }}
            />
            <ComponentGroup
              title="MissileRacks"
              icon="Missiles"
              defList={listMissileRacks}
              isActive={showingComponentDetail === "Missiles"}
              funcOnClick={() => {
                setShowingComponentDetail((s) =>
                  s === "Missiles" ? null : "Missiles"
                );
              }}
            />
            <ComponentGroup
              title="Shields"
              icon={
                shipHardpts.Hardpoints.Components.Systems.Shields.FaceType
                  ? "ShieldType" +
                    shipHardpts.Hardpoints.Components.Systems.Shields.FaceType
                  : "Shields"
              }
              defList={listShields}
              isActive={showingComponentDetail === "Shields"}
              funcOnClick={() => {
                setShowingComponentDetail((s) =>
                  s === "Shields" ? null : "Shields"
                );
              }}
            />
            <ComponentGroup
              title="PowerPlants"
              icon="PowerPlants"
              defList={listPowerPlants}
              isActive={showingComponentDetail === "PowerPlants"}
              funcOnClick={() => {
                setShowingComponentDetail((s) =>
                  s === "PowerPlants" ? null : "PowerPlants"
                );
              }}
            />
            <ComponentGroup
              title="Coolers"
              icon="Coolers"
              defList={listCoolers}
              isActive={showingComponentDetail === "Coolers"}
              funcOnClick={() => {
                setShowingComponentDetail((s) =>
                  s === "Coolers" ? null : "Coolers"
                );
              }}
            />
            <ComponentGroup
              title="CompTitle-QuantumDrives"
              icon="QuantumDrives"
              defList={listQuantumDrives}
              isActive={showingComponentDetail === "QuantumDrives"}
              funcOnClick={() => {
                setShowingComponentDetail((s) =>
                  s === "QuantumDrives" ? null : "QuantumDrives"
                );
              }}
            />
            <div
              style={{
                borderRadius: "1rem",
                backgroundImage: `url(${bg_line})`,
                backgroundSize: "1.5rem",
                backgroundPosition: "center",
                gridColumn: "span 2",
                opacity: 0.15,
              }}
            ></div>
          </div>
          <div
            className="component-detail-wrapper-wrapper"
            style={{
              height: showingComponentDetail ? "11.5rem" : 0,
            }}
          >
            <div className="component-detail-wrapper">
              {showingComponentDetail === "Turrets" ? (
                <Components
                  title="CompTitle-TurretWeapons"
                  icon="Turrets"
                  type="Weapons"
                  defaultCompGroupObj={{
                    InstalledItems: listTurretGuns,
                  }}
                />
              ) : showingComponentDetail === "Weapons" ? (
                <Components
                  title="CompTitle-PilotWeapons"
                  icon="Weapons"
                  type="Weapons"
                  defaultCompGroupObj={
                    shipHardpts?.Hardpoints?.Weapons?.PilotWeapons
                  }
                />
              ) : showingComponentDetail === "Missiles" ? (
                <Components
                  title="CompTitle-MissileRacks"
                  icon="Missiles"
                  type="MissileRacks"
                  defaultCompGroupObj={
                    shipHardpts?.Hardpoints?.Weapons?.MissileRacks
                  }
                />
              ) : showingComponentDetail === "Shields" ? (
                <Components
                  title="CompTitle-Shields"
                  icon="Shields"
                  defaultCompGroupObj={
                    shipHardpts?.Hardpoints?.Components?.Systems?.Shields
                  }
                />
              ) : showingComponentDetail === "QuantumDrives" ? (
                <Components
                  title="CompTitle-QuantumDrives"
                  icon="QuantumDrives"
                  col="1"
                  defaultCompGroupObj={
                    shipHardpts?.Hardpoints?.Components?.Propulsion
                      ?.QuantumDrives
                  }
                />
              ) : showingComponentDetail === "PowerPlants" ? (
                <Components
                  title="CompTitle-PowerPlants"
                  icon="PowerPlants"
                  defaultCompGroupObj={
                    shipHardpts?.Hardpoints?.Components?.Propulsion?.PowerPlants
                  }
                />
              ) : showingComponentDetail === "Coolers" ? (
                <Components
                  title="CompTitle-Coolers"
                  icon="Coolers"
                  defaultCompGroupObj={
                    shipHardpts?.Hardpoints?.Components?.Systems?.Coolers
                  }
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
      {shipObj && (
        <>
          <div className="grid3">
            <CardList
              title="Basic"
              infoObj={{
                Size: shipObj.Size,
                Mass: [(shipObj.Mass / 1000).toFixed(3), "t"],
                Dimensions: [
                  shipObj.Dimensions.Length +
                    " / " +
                    shipObj.Dimensions.Width +
                    " / " +
                    shipObj.Dimensions.Height,
                  "m",
                ],
                TotalHealthStruct:
                  Object.values(
                    shipObj.Hull.StructureHealthPoints.Parts
                  ).reduce((a, b) => a + b, 0) +
                  Object.values(
                    shipObj.Hull.StructureHealthPoints.VitalParts
                  ).reduce((a, b) => a + b, 0),
                VitalHealthStruct: Object.values(
                  shipObj.Hull.StructureHealthPoints.VitalParts
                ).reduce((a, b) => a + b, 0),
                FuelCapacity: shipObj?.FuelManagement?.FuelCapacity,
                QuantumFuelCapacity:
                  shipObj?.FuelManagement?.QuantumFuelCapacity,
              }}
            />
            <CardList
              title="Payloads"
              infoObj={{
                Crew: shipObj.Crew,
                WeaponCrew: shipObj.WeaponCrew,
                OperationsCrew: shipObj.OperationsCrew,
                CargoGrid: [shipObj.Cargo.CargoGrid, "SCU"],
                CargoContainers: [shipObj.Cargo.CargoContainers, "SCU"],
                ExternalStorage: [shipObj.Cargo.ExternalStorage, "SCU"],
                PersonalInventory: [
                  shipObj.Cargo.PersonalInventory * 1000,
                  "mSCU",
                ],
              }}
            />
            <CardList
              title="Insurance"
              infoObj={{
                StandardClaimTime: [
                  Math.floor(shipObj.Insurance.StandardClaimTime) + " m",
                  ((shipObj.Insurance.StandardClaimTime % 1) * 60)
                    .toFixed(0)
                    .padStart(2, "0") + " s",
                ],
                ExpeditedClaimTime: [
                  Math.floor(shipObj.Insurance.ExpeditedClaimTime) + " m",
                  ((shipObj.Insurance.ExpeditedClaimTime % 1) * 60)
                    .toFixed(0)
                    .padStart(2, "0") + " s",
                ],
                ExpeditedCost: [
                  shipObj.Insurance.ExpeditedCost.toFixed(0),
                  "aUEC",
                ],
                ...shipObj.Buy,
              }}
            />
            <CardList
              title="Combats"
              infoObj={{
                TotalWeaponsDmg: [shipObj.Weapons.TotalWeaponsDmg, "/s"],
                TotalTurretDmg: ["?", "/s"],
                TotalMissilesDmg: shipObj.Weapons.TotalMissilesDmg,
                TotalEMPDmg: "?",
                TotalDecoyAmmo:
                  totalDecoyItemNum && totalDecoyItemNum + "×" + totalDecoyAmmo,
                TotalNoiseAmmo:
                  totalNoiseItemNum && totalNoiseItemNum + "×" + totalNoiseAmmo,
              }}
              iconOverrides={[
                "Weapons",
                "Turrets",
                "Missiles",
                "EMP",
                "Decoy",
                "Noise",
              ]}
            />
            <CardList
              title="QuantumTravel"
              infoObj={{
                QTRangeMax: [
                  (
                    shipObj?.FuelManagement?.QuantumFuelCapacity /
                    shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                      0
                    )?.FuelRate /
                    1e9
                  ).toFixed(3),
                  "Gm",
                ],
                QTFuelConsumptionRate: [
                  (
                    shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                      0
                    )?.FuelRate * 1e9
                  ).toFixed(2),
                  "/Gm",
                ],
                QTSpeedCruise: [
                  (
                    shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                      0
                    )?.CruiseSpeed / 1000
                  ).toFixed(0),
                  "km/s",
                ],
                QTSpeedStage2: [
                  (
                    shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                      0
                    )?.Stage2Speed / 1000
                  ).toFixed(0),
                  "km/s",
                ],
                QTSpeedStage1: [
                  (
                    shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                      0
                    )?.Stage1Speed / 1000
                  ).toFixed(0),
                  "km/s",
                ],
                TravelTimeFromCruToMic: [
                  "~" +
                    (
                      57469469000 /
                      shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                        0
                      )?.CruiseSpeed /
                      60
                    ).toFixed(0),
                  "min",
                ],
              }}
            />
            <CardList
              title="Shields"
              infoObj={{
                TotalShieldHP:
                  shipHardpts.Hardpoints.Components.Systems.Shields
                    .TotalShieldPool,
                SingleFaceShieldHP:
                  shipHardpts.Hardpoints.Components.Systems.Shields
                    .TotalShieldPool /
                  (shipHardpts.Hardpoints.Components.Systems.Shields.FaceType ==
                  "Bubble"
                    ? 1
                    : shipHardpts.Hardpoints.Components.Systems.Shields
                        .FaceType == "FrontBack"
                    ? 2
                    : 4),
                TotalRegenSpeed: [
                  shipHardpts.Hardpoints.Components.Systems.Shields
                    .TotalRegenSpeed,
                  "/s",
                ],
                RegenDelay: null,
                PhysicalAbsorptionRateMax: [
                  shipHardpts.Hardpoints.Components.Systems.Shields.InstalledItems?.at(
                    0
                  )?.PhysicalAbsorption?.Maximum * 100,
                  "%",
                ],
              }}
              iconOverrides={[
                "ShieldType" +
                  shipHardpts.Hardpoints.Components.Systems.Shields.FaceType,
              ]}
            />

            {shipObj.IsSpaceship && (
              <>
                <FlightCharacteristics
                  scm={shipObj.FlightCharacteristics.ScmSpeed}
                  max={shipObj.FlightCharacteristics.MaxSpeed}
                  pitch={shipObj.FlightCharacteristics.Pitch}
                  yaw={shipObj.FlightCharacteristics.Yaw}
                  roll={shipObj.FlightCharacteristics.Roll}
                  speedMax={speedMax}
                  pitchMax={pitchMax}
                  yawMax={yawMax}
                  rollMax={rollMax}
                />
                <FlightAccelerations
                  FlightCharObj={shipObj.FlightCharacteristics}
                  FwdMax={accelFwdMax}
                  BwdMax={accelBwdMax}
                  StrMax={accelStrMax}
                  UwdMax={accelUwdMax}
                  DwdMax={accelDwdMax}
                />
              </>
            )}

            {shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
              .InstalledItems && (
              <CardList
                title="SelfDestruct"
                infoObj={{
                  Countdown: [
                    shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                      .InstalledItems[0].Countdown,
                    "s",
                  ],
                  ExplosionDamage:
                    shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                      .InstalledItems[0].Damage,
                  ExplosionRadius: [
                    shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                      .InstalledItems[0].MinRadius +
                      " ~ " +
                      shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                        .InstalledItems[0].MaxRadius,
                    "m",
                  ],
                }}
              />
            )}

            <CardList
              title="Emissions"
              infoObj={{
                IdleEMEmission:
                  shipObj.Emissions.Electromagnetic.IdleEMEmission,
                ActiveEMEmission:
                  shipObj.Emissions.Electromagnetic.ActiveEMEmission,
                QTEMEmission: shipObj.Emissions.Electromagnetic.QTEMEmission,
                StartIREmission: shipObj.Emissions.Infrared.StartIREmission,
                FrontCSEmission: shipObj.Emissions.CrossSection.Front,
                SideCSEmission: shipObj.Emissions.CrossSection.Side,
                TopCSEmission: shipObj.Emissions.CrossSection.Top,
              }}
            />
            <CardList
              title="ArmorAttributes"
              infoObj={{
                DamageReducPhy: [
                  (
                    100 -
                    shipObj.Armor.DamageMultipliers.Physical * 100
                  ).toFixed(0),
                  "%",
                ],
                DamageReducEne: [
                  (100 - shipObj.Armor.DamageMultipliers.Energy * 100).toFixed(
                    0
                  ),
                  "%",
                ],
                DamageReducDis: [
                  (
                    100 -
                    shipObj.Armor.DamageMultipliers.Distortion * 100
                  ).toFixed(0),
                  "%",
                ],
                SignalReducEM: [
                  (
                    100 -
                    shipObj.Armor.SignalMultipliers.Electromagnetic * 100
                  ).toFixed(0),
                  "%",
                ],
                SignalReducIR: [
                  (
                    100 -
                    shipObj.Armor.SignalMultipliers.Infrared * 100
                  ).toFixed(0),
                  "%",
                ],
                SignalReducCS: [
                  (
                    100 -
                    shipObj.Armor.SignalMultipliers.CrossSection * 100
                  ).toFixed(0),
                  "%",
                ],
              }}
            />

            {shipObj.IsSpaceship && (
              <>
                <CardList
                  title="FuelTanks"
                  infoObj={{
                    FuelCapacity: shipObj.FuelManagement.FuelCapacity,
                    QuantumFuelCapacity:
                      shipObj.FuelManagement.QuantumFuelCapacity,
                    FuelIntakeRate: shipObj.FuelManagement.FuelIntakeRate,
                    IntakeToMainFuelRatio:
                      shipObj.FuelManagement.IntakeToMainFuelRatio,
                    TimeForIntakesToFillTank:
                      shipObj.FuelManagement.TimeForIntakesToFillTank,
                  }}
                />
                <CardList
                  title="FuelBurnRate"
                  infoObj={{
                    FuelBurnRateMain: [
                      shipObj.FuelManagement.FuelUsagePerSecond.Main,
                      "/s",
                    ],
                    FuelBurnRateMainAssisted:
                      shipObj.FuelManagement.FuelUsagePerSecond.MainAssisted !=
                      null ? (
                        [
                          shipObj.FuelManagement.FuelUsagePerSecond.MainAssisted.toFixed(
                            2
                          ),
                          "/s",
                        ]
                      ) : (
                        <span
                          style={{
                            opacity: 0.5,
                          }}
                        >
                          ∅
                        </span>
                      ),
                    FuelBurnRateRetro: [
                      shipObj.FuelManagement.FuelUsagePerSecond.Retro,
                      "/s",
                    ],
                    FuelBurnRateManeuv: [
                      shipObj.FuelManagement.FuelUsagePerSecond.Maneuvering,
                      "/s",
                    ],
                    FuelBurnRateVtol: [
                      shipObj.FuelManagement.FuelUsagePerSecond.Vtol,
                      "/s",
                    ],
                  }}
                />
                <CardList
                  title="FlightTime"
                  infoObj={{
                    FlightTimeMain: [
                      (
                        shipObj.FuelManagement.FuelCapacity /
                        shipObj.FuelManagement.FuelUsagePerSecond.Main /
                        60
                      ).toFixed(0),
                      "min",
                    ],
                    FlightTimeMainAssisted:
                      shipObj.FuelManagement.FuelUsagePerSecond.MainAssisted !=
                      null ? (
                        [
                          (
                            shipObj.FuelManagement.FuelCapacity /
                            shipObj.FuelManagement.FuelUsagePerSecond
                              .MainAssisted /
                            60
                          ).toFixed(0),
                          "min",
                        ]
                      ) : (
                        <span
                          style={{
                            opacity: 0.5,
                          }}
                        >
                          ∅
                        </span>
                      ),
                    FlightTimeRetro: [
                      (
                        shipObj.FuelManagement.FuelCapacity /
                        shipObj.FuelManagement.FuelUsagePerSecond.Retro /
                        60
                      ).toFixed(0),
                      "min",
                    ],
                    FlightTimeManeuv: [
                      (
                        shipObj.FuelManagement.FuelCapacity /
                        shipObj.FuelManagement.FuelUsagePerSecond.Maneuvering /
                        60
                      ).toFixed(0),
                      "min",
                    ],
                    FlightTimeVtol: [
                      (
                        shipObj.FuelManagement.FuelCapacity /
                        shipObj.FuelManagement.FuelUsagePerSecond.Vtol /
                        60
                      ).toFixed(0),
                      shipObj.FuelManagement.FuelUsagePerSecond.Vtol
                        ? "min"
                        : "",
                    ],
                  }}
                />
                {false && (
                  <CardList
                    title="Afterburner"
                    infoObj={{
                      BoostCapacitor:
                        shipObj.FlightCharacteristics.Capacitors
                          .ThrusterCapacitorSize,
                      BoostIdleCost: [
                        shipObj.FlightCharacteristics.Capacitors
                          .CapacitorIdleCost,
                        "/s",
                      ],
                      BoostRegenRate: [
                        shipObj.FlightCharacteristics.Capacitors
                          .CapacitorRegenPerSec,
                        "/s",
                      ],
                      BoostRegenDelay: [
                        shipObj.FlightCharacteristics.Capacitors
                          .CapacitorRegenDelay,
                        "s",
                      ],
                      BoostRegenTime: [
                        shipObj.FlightCharacteristics.Capacitors
                          .RegenerationTime,
                        "s",
                      ],
                    }}
                    iconOverrides={[null, "Afterburner", null, null, null]}
                  />
                )}
              </>
            )}
          </div>
        </>
      )}
    </LangContext.Provider>
  );
}

export default App;
