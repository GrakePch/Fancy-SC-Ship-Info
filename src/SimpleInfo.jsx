/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

import "./SimpleInfo.css";
import ManufacturerToHue from "./assets/ManufacturerToHue";
import component_zh_name from "./assets/component_zh_name.json";
import bg_line from "./assets/lines.png";
import manufacturers_small from "./assets/manufacturers_small";
import ship_pics_and_zh_name from "./assets/ship_pics_and_zh_name.json";
import statusEnToZh from "./assets/statusEnToZh";
import statusToHue from "./assets/statusToHue";
import FlightAccelerations from "./components/FlightAccelerations/FlightAccelerations";
import FlightCharacteristics from "./components/FlightCharacteristics/FlightCharacteristics";
import I18n from "./components/I18n";
import I18nPure from "./components/I18nPure";
import SimpleComponent from "./components/SimpleComponent/SimpleComponent";
import SimpleFuelTank from "./components/SimpleFuelTank/SimpleFuelTank";
import SimpleWeaponGroup from "./components/SimpleWeaponGroup/SimpleWeaponGroup";
import LangContext from "./contexts/LangContext";
import shipItems from "./data/ship-items-min.json";

const SimpleInfo = ({
  shipIdx,
  shipObj,
  shipHardpts,
  dictShipZhName,
  dictShipImgIso,
  computedMax,
}) => {
  const lang = useContext(LangContext)[0];

  const speedMax = computedMax.speedMax;
  const pitchMax = computedMax.pitchMax;
  const yawMax = computedMax.yawMax;
  const rollMax = computedMax.setRollMax;

  const accelFwdMax = computedMax.accelFwdMax;
  const accelBwdMax = computedMax.accelBwdMax;
  const accelStrMax = computedMax.accelStrMax;
  const accelUwdMax = computedMax.accelUwdMax;
  const accelDwdMax = computedMax.accelDwdMax;

  const [shipComponentQDrive, setShipComponentQDrive] = useState(null);

  useEffect(() => {
    if (!shipHardpts) return;
    let temp = [];
    shipHardpts.Hardpoints.Components.Propulsion?.QuantumDrives?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      },
    );
    let QDriveTemp = null;
    if (temp && temp.length > 0) {
      for (let i = 0; i < shipItems.length; ++i) {
        if (
          shipItems[i].type === "QuantumDrive" &&
          shipItems[i].stdItem.Name === temp[0].Name
        ) {
          QDriveTemp = shipItems[i];
          break;
        }
      }
    }
    setShipComponentQDrive(QDriveTemp);
  }, [shipHardpts]);

  if (!shipIdx) return null;
  return (
    <>
      <div className="SimpleInfo-container">
        <div className="manufacturer-bg">
          {manufacturers_small[shipIdx.Manufacturer]}
        </div>
        <img
          src={dictShipImgIso[shipIdx.Name]}
          alt=""
          className="ship-img-iso"
          style={{ maxHeight: "14rem" }}
        />
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
        </div>
        <div className="career-and-role font-slim">
          <h4>
            <I18n text={shipIdx.Career} />
          </h4>
          <h4>
            {component_zh_name[shipIdx.Role?.toLowerCase()] || shipIdx.Role}
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
            {statusEnToZh[shipIdx.ProgressTracker.Status]}{" "}
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
            : "无法通过 aUEC 购买"}
          <span>
            {shipObj?.Buy &&
              " 购买于 " +
                Object.keys(shipObj.Buy)
                  .map((loc) => I18nPure(loc, lang))
                  .join(" / ")}
          </span>
        </h3>
        <h3 className="prices font-slim">
          {shipIdx.Store.Buy} USD
          <span>{shipIdx.Store.IsLimitedSale && " 限时购买"}</span>
        </h3>
        <h3 className="basic-info font-slim">
          尺寸 &nbsp;&nbsp;&nbsp;{" "}
          {shipObj ? (
            <>
              <span className="sml">长</span> {shipObj.Dimensions.Length} ×{" "}
              <span className="sml">宽</span> {shipObj.Dimensions.Width} ×{" "}
              <span className="sml">高</span> {shipObj.Dimensions.Height} m
            </>
          ) : (
            "未知"
          )}
        </h3>
        <h3 className="basic-info font-slim">
          质量 &nbsp;&nbsp;&nbsp;{" "}
          {shipObj ? <>{(shipObj.Mass / 1000).toFixed(3)} t</> : "未知"}
        </h3>
        <div className="SimpleInfo-title-bottom-banner">
          <div className="small-texts">
            游戏版本：3.23 &nbsp;&nbsp;|&nbsp;&nbsp; 主要数据来源：Ships
            Performances Viewer
          </div>
          <div className="small-logo"></div>
          <div className="small-texts">
            GrakePCH 设计 &nbsp;&nbsp;|&nbsp;&nbsp; CxJuice 与 XK_14
            提供技术支持
          </div>
        </div>
      </div>
      {shipHardpts && (
        <div className="SimpleInfo-contents">
          <div className="SimpleGrid">
            <SimpleComponent
              type="电源"
              icon="PowerPlants"
              itemObj={shipHardpts.Hardpoints.Components.Propulsion.PowerPlants}
            />
            <SimpleComponent
              type="护盾"
              icon={
                shipHardpts.Hardpoints.Components.Systems.Shields.FaceType
                  ? "ShieldType" +
                    shipHardpts.Hardpoints.Components.Systems.Shields.FaceType
                  : "Shields"
              }
              itemObj={shipHardpts.Hardpoints.Components.Systems.Shields}
            />
            <SimpleComponent
              type="冷却器"
              icon="Coolers"
              itemObj={shipHardpts.Hardpoints.Components.Systems.Coolers}
            />
            <SimpleComponent
              type="量子引擎"
              icon="QuantumDrives"
              itemObj={
                shipHardpts.Hardpoints.Components.Propulsion.QuantumDrives
              }
            />
            <SimpleComponent
              type="雷达"
              icon="Radars"
              itemObj={shipHardpts.Hardpoints.Components.Avionics.Radars}
            />
            <SimpleFuelTank
              fuelH={shipObj?.FuelManagement?.FuelCapacity || 0}
              fuelQT={shipObj?.FuelManagement?.QuantumFuelCapacity || 0}
            />
            {shipIdx.Type == "Ship" && (
              <>
                <div style={{ gridColumn: "1/3" }}>
                  <FlightCharacteristics
                    scm={shipObj.FlightCharacteristics.ScmSpeed}
                    max={shipObj.FlightCharacteristics.MaxSpeed}
                    maxFwd={
                      shipObj.FlightCharacteristics.MasterModes.ScmMode
                        .BoostSpeedForward
                    }
                    maxBwd={
                      shipObj.FlightCharacteristics.MasterModes.ScmMode
                        .BoostSpeedBackward
                    }
                    pitch={shipObj.FlightCharacteristics.Pitch}
                    yaw={shipObj.FlightCharacteristics.Yaw}
                    roll={shipObj.FlightCharacteristics.Roll}
                    speedMax={speedMax}
                    pitchMax={pitchMax}
                    yawMax={yawMax}
                    rollMax={rollMax}
                    angVelMult={
                      shipObj.FlightCharacteristics.Boost
                        .AngularVelocityMultiplier
                    }
                    spoolTime={
                      shipObj.FlightCharacteristics.MasterModes.BaseSpoolTime +
                      (shipComponentQDrive
                        ? shipComponentQDrive.stdItem.QuantumDrive.StandardJump
                            .SpoolUpTime
                        : 0)
                    }
                  />
                </div>
                <div style={{ gridColumn: "1/3" }}>
                  <FlightAccelerations
                    shipImgIso={dictShipImgIso[shipIdx.Name]}
                    FlightCharObj={shipObj.FlightCharacteristics}
                    FwdMax={accelFwdMax}
                    BwdMax={accelBwdMax}
                    StrMax={accelStrMax}
                    UwdMax={accelUwdMax}
                    DwdMax={accelDwdMax}
                  />
                </div>{" "}
              </>
            )}
          </div>
          <div className="SimpleInfo-weapons">
            <SimpleWeaponGroup
              groupName="PilotWeapons"
              icon="Weapons"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.PilotWeapons}
            />
            <SimpleWeaponGroup
              groupName="MannedTurrets"
              icon="WeaponCrew"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.MannedTurrets}
            />
            <SimpleWeaponGroup
              groupName="RemoteTurrets"
              icon="RemoteTurrets"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.RemoteTurrets}
            />
            <SimpleWeaponGroup
              groupName="MissileRacks"
              icon="Missiles"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.MissileRacks}
            />
            <SimpleWeaponGroup
              groupName="BombRacks"
              icon="Bombs"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.BombRacks}
            />
            <SimpleWeaponGroup
              groupName="EMP"
              icon="EMP"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.InterdictionHardpoints?.EMP}
            />
            <SimpleWeaponGroup
              groupName="QED"
              icon="QED"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.InterdictionHardpoints?.QED}
            />
            <SimpleWeaponGroup
              groupName="PilotMiningHardpoints"
              icon="CargoContainers"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.MiningHardpoints?.PilotControlled}
            />
            <SimpleWeaponGroup
              groupName="CrewMiningHardpoints"
              icon="CargoContainers"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.MiningHardpoints?.CrewControlled}
            />
            <SimpleWeaponGroup
              groupName="PilotSalvageHardpoints"
              icon="Recycle"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.SalvageHardpoints?.PilotControlled}
            />
            <SimpleWeaponGroup
              groupName="CrewSalvageHardpoints"
              icon="Recycle"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.SalvageHardpoints?.CrewControlled}
            />
            <SimpleWeaponGroup
              groupName="UtilityHardpoints"
              icon="Beams"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.UtilityHardpoints}
            />
            <SimpleWeaponGroup
              groupName="UtilityTurrets"
              icon="Beams"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.UtilityTurrets}
            />
            <div className="placeholder" style={{
                backgroundImage: `url(${bg_line})`,}}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleInfo;
