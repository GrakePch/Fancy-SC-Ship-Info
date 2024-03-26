import { useEffect, useState } from "react";
import shipIndex from "./data/index-min.json";
import shipList from "./data/ship-list-min.json";
import manufacturers_small from "./assets/manufacturers_small";
import "./App.css";
import statusToHue from "./assets/statusToHue";
import ManufacturerToHue from "./assets/ManufacturerToHue";

import c1_spirit from "./assets/ships_iso/fleetpics_c1-spirit__iso_l_118945803210a65527330473655e4762.png";
import CardList from "./components/CardList/CardList";
import FlightCharacteristics from "./components/FlightCharacteristics/FlightCharacteristics";
import FlightAccelerations from "./components/FlightAccelerations/FlightAccelerations";
import ShipSelector from "./components/ShipSelector/ShipSelector";

import Icon from "@mdi/react";
import { mdiAutorenew } from "@mdi/js";

function App() {
  let [shipId, setShipId] = useState(null);
  let [shipIdx, setShipIdx] = useState(null);
  let [shipObj, setShipObj] = useState(null);

  let [speedMax, setSpeedMax] = useState(0);
  let [pitchMax, setPitchMax] = useState(0);
  let [yawMax, setYawMax] = useState(0);
  let [rollMax, setRollMax] = useState(0);

  let [accelFwdMax, setAccelFwdMax] = useState(0);
  let [accelBwdMax, setAccelBwdMax] = useState(0);
  let [accelStrMax, setAccelStrMax] = useState(0);
  let [accelUwdMax, setAccelUwdMax] = useState(0);
  let [accelDwdMax, setAccelDwdMax] = useState(0);

  let [isShipSelectorOn, setIsShipSelectorOn] = useState(false);

  useEffect(() => {
    let sp = new URLSearchParams(window.location.search);
    setShipId(sp.get("s"));

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
    }
  }, [shipId, shipIdx]);

  return (
    <>
      <ShipSelector
        on={isShipSelectorOn}
        setState={setIsShipSelectorOn}
        shipIndex={shipIndex}
        setShipId={setShipId}
      />
      {shipIdx && (
        <div className="title-card">
          <div className="manufacturer-bg">
            {manufacturers_small[shipIdx.Manufacturer]}
          </div>
          {/* <img src={c1_spirit} alt="ship_image" className="ship-img-iso" /> */}
          <div className="manufacturer">
            <div>{manufacturers_small[shipIdx.Manufacturer]}</div>
            <h2>{shipIdx.Manufacturer}</h2>
          </div>
          <div className="ship-name-wrapper">
            <h1 className="ship-name">{shipIdx.NameShort}</h1>
            <button
              className="circleIconBtn"
              onClick={() => setIsShipSelectorOn(true)}
            >
              <Icon path={mdiAutorenew} size={1} />
            </button>
          </div>
          <div className="career-and-role font-slim">
            <h4>{shipIdx.Career}</h4>
            <h4>{shipIdx.Role}</h4>
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
      {shipObj && (
        <>
          <div className="grid3">
            <CardList
              infoObj={{
                Size: shipObj.Size,
                Mass: [shipObj.Mass / 1000, "t"],
                Length: [shipObj.Dimensions.Length, "m"],
                Width: [shipObj.Dimensions.Width, "m"],
                Height: [shipObj.Dimensions.Height, "m"],
              }}
            />
            <CardList
              infoObj={{
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
              infoObj={{
                Crew: shipObj.Crew,
                WeaponCrew: shipObj.WeaponCrew,
                OperationsCrew: shipObj.OperationsCrew,
              }}
            />

            {shipObj.IsSpaceship && (
              <>
                <CardList
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
            {/* <CardList
              infoObj={{
                AccelMain: [
                  shipObj.FlightCharacteristics.AccelerationG.Main.toFixed(1),
                  `\u00A0(${(
                    shipObj.FlightCharacteristics.AccelerationG.Main *
                    shipObj.FlightCharacteristics.Capacitors
                      .Y_AccelMultiplicator
                  ).toFixed(1)}) G`,
                ],
                AccelRetro: [
                  shipObj.FlightCharacteristics.AccelerationG.Retro.toFixed(1),
                  `\u00A0(${(
                    shipObj.FlightCharacteristics.AccelerationG.Retro *
                    shipObj.FlightCharacteristics.Capacitors
                      .Y_AccelMultiplicator
                  ).toFixed(1)}) G`,
                ],
                AccelManeuvering: [
                  shipObj.FlightCharacteristics.AccelerationG.Maneuvering.toFixed(
                    1
                  ),
                  `\u00A0(${(
                    shipObj.FlightCharacteristics.AccelerationG.Maneuvering *
                    shipObj.FlightCharacteristics.Capacitors
                      .X_AngAccelMultiplier
                  ).toFixed(1)}) G`,
                ],
                AccelStrafe: [
                  shipObj.FlightCharacteristics.AccelerationG.Strafe.toFixed(1),
                  `\u00A0(${(
                    shipObj.FlightCharacteristics.AccelerationG.Strafe *
                    shipObj.FlightCharacteristics.Capacitors
                      .X_AccelMultiplicator
                  ).toFixed(1)}) G`,
                ],
                AccelUp: [
                  shipObj.FlightCharacteristics.AccelerationG.Up.toFixed(1),
                  `\u00A0(${(
                    shipObj.FlightCharacteristics.AccelerationG.Up *
                    shipObj.FlightCharacteristics.Capacitors
                      .Z_AccelMultiplicator
                  ).toFixed(1)}) G`,
                ],
                AccelDown: [
                  shipObj.FlightCharacteristics.AccelerationG.Down.toFixed(1),
                  `\u00A0(${(
                    shipObj.FlightCharacteristics.AccelerationG.Down *
                    shipObj.FlightCharacteristics.Capacitors
                      .Z_AccelMultiplicator
                  ).toFixed(1)}) G`,
                ],
              }}
            /> */}

            <CardList
              infoObj={{
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
                DamageMultiPhy: [
                  shipObj.Armor.DamageMultipliers.Physical * 100,
                  "%",
                ],
                DamageMultiEne: [
                  shipObj.Armor.DamageMultipliers.Energy * 100,
                  "%",
                ],
                DamageMultiDis: [
                  shipObj.Armor.DamageMultipliers.Distortion * 100,
                  "%",
                ],
                SignalMultiEM: [
                  shipObj.Armor.SignalMultipliers.Electromagnetic * 100,
                  "%",
                ],
                SignalMultiIR: [
                  shipObj.Armor.SignalMultipliers.Infrared * 100,
                  "%",
                ],
                SignalMultiCS: [
                  shipObj.Armor.SignalMultipliers.CrossSection * 100,
                  "%",
                ],
              }}
            />
            <CardList
              infoObj={{
                TotalShieldHP: shipObj.Weapons.TotalShieldHP,
                TotalWeaponsDmg: [shipObj.Weapons.TotalWeaponsDmg, "/s"],
                TotalTurretDmg: ["?", "/s"],
                TotalMissilesDmg: shipObj.Weapons.TotalMissilesDmg,
                TotalEMPDmg: "?",
              }}
            />
            <CardList
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
              infoObj={{
                StandardClaimTime: [shipObj.Insurance.StandardClaimTime, "min"],
                ExpeditedClaimTime: [
                  shipObj.Insurance.ExpeditedClaimTime,
                  "min",
                ],
                ExpeditedCost: [
                  shipObj.Insurance.ExpeditedCost.toFixed(0),
                  "aUEC",
                ],
                ...shipObj.Buy,
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
