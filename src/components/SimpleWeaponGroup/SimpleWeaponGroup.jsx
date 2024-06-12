/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import SimpleWeapon from "../SimpleWeapon/SimpleWeapon";

const engNameToZh = {
  PilotWeapons: "主驾机炮",
  MannedTurrets: "载人炮塔",
  RemoteTurrets: "遥控炮塔",
  MissileRacks: "导弹",
  BombRacks: "航弹",
  InterdictionHardpoints: "拦截模块",
  EMP: "EMP",
  QED: "量子拦截",
  MiningHardpoints: "采矿",
  PilotMiningHardpoints: "主驾采矿",
  CrewMiningHardpoints: "乘员采矿",
  SalvageHardpoints: "打捞",
  PilotSalvageHardpoints: "主驾打捞",
  CrewSalvageHardpoints: "乘员打捞",
  UtilityHardpoints: "牵引光束",
  UtilityTurrets: "牵引光束炮塔",
};

const SimpleWeaponGroup = ({ groupName, icon, weaponGroupObj }) => {
  const [rootCounting, setRootCounting] = useState({});
  useEffect(() => {
    const _rootCounting = {};
    weaponGroupObj?.InstalledItems?.forEach((item) => {
      if (item == null) return;
      if (!_rootCounting[JSON.stringify(item)]) {
        _rootCounting[JSON.stringify(item)] = 1;
      } else {
        _rootCounting[JSON.stringify(item)]++;
      }
    });

    setRootCounting(_rootCounting);
    // console.log(_rootCounting);
  }, [weaponGroupObj]);

  if (
    weaponGroupObj == null ||
    Object.keys(weaponGroupObj).length == 0 ||
    weaponGroupObj?.InstalledItems?.at(0) == null
  )
    return null;

  return (
    <div className="SimpleWeaponGroup-container">
      <h3>{engNameToZh[groupName] || groupName}</h3>
      {Object.keys(rootCounting).map((item, idx) => {
        let itemObj = JSON.parse(item);
        return (
          item && (
            <SimpleWeapon
              item={itemObj}
              key={itemObj.Name + idx}
              num={rootCounting[item]}
            />
          )
        );
      })}
    </div>
  );
};

export default SimpleWeaponGroup;
