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
  MiningHardpoints: "采矿",
  SalvageHardpoints: "打捞",
  UtilityHardpoints: "其他模块",
  UtilityTurrets: "其他炮塔",
};

const SimpleWeaponGroup = ({ groupName, icon, weaponGroupObj }) => {
  const [dictWeaponNameToObj, setDictWeaponNameToObj] = useState({});
  useEffect(() => {
    const _dictWeaponNameToObj = {};
    weaponGroupObj.InstalledItems?.forEach((item) => {
      _dictWeaponNameToObj[item.Name] = item;
    });

    setDictWeaponNameToObj(_dictWeaponNameToObj);
    // console.log(_dictWeaponNameToObj);
  }, [weaponGroupObj]);

  if (Object.keys(weaponGroupObj).length == 0) return null;

  return (
    <div className="SimpleWeaponGroup-container">
      <h3>{engNameToZh[groupName]}</h3>
      {weaponGroupObj.InstalledItems?.map((item, idx) => (
        <SimpleWeapon item={item} key={item.Name + idx} />
      ))}
    </div>
  );
};

export default SimpleWeaponGroup;
