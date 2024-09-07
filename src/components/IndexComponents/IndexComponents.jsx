import { useEffect, useState } from "react";

import shipItems from "../../data/ship-items-min.json";
import ComponentGeneral from "../ComponentGeneral/ComponentGeneral";
import "./IndexComponents.css";

const classOrder = {
  Military: 1,
  Stealth: 2,
  Civilian: 3,
  Industrial: 4,
  Competition: 5,
};

const IndexComponents = () => {
  let [typeList, setTypeList] = useState([]);
  let [typeFilter, setTypeFilter] = useState("QuantumDrive.UNDEFINED");

  useEffect(() => {
    // let newTypeSet = new Set();
    // shipItems.forEach((item) => {
    //   newTypeSet.add(item.stdItem.Type);
    // });
    // setTypeList(Array.from(newTypeSet).sort());
    setTypeList([
      "PowerPlant.Power",
      "Shield.UNDEFINED",
      "Cooler.UNDEFINED",
      "QuantumDrive.UNDEFINED",
      "Radar.MidRangeRadar",
      "WeaponGun.Gun",
      "WeaponGun.Rocket",
      "MissileLauncher.MissileRack",
      "Missile.Missile",
      "Missile.Rocket",
      "Missile.Torpedo",
      "BombLauncher.BombRack",
      "Bomb.UNDEFINED",
      "EMP.UNDEFINED",
      "QuantumInterdictionGenerator.UNDEFINED",
      "Turret.BallTurret",
      "Turret.CanardTurret",
      "Turret.GunTurret",
      "Turret.MissileTurret",
      "Turret.NoseMounted",
      "Turret.TopTurret",
      "Turret.Utility",
      "WeaponMining.Gun",
      "Gadget.Gadget",
      "MiningModifier.Gun",
      "MiningModifier.UNDEFINED",
      "SalvageHead.UNDEFINED",
      "SalvageModifier.UNDEFINED",
      "TowingBeam.UNDEFINED",
      "TractorBeam.UNDEFINED",
      "Module.UNDEFINED",
    ]);
  }, []);
  return (
    <>
      <div className="container-types-list">
        {typeList.map((type) => (
          <div
            key={type}
            onClick={() => {
              setTypeFilter(type);
            }}
            className={typeFilter == type && "active"}
          >
            {type.endsWith(".UNDEFINED") ? type.slice(0, -10) : type}
          </div>
        ))}
      </div>
      <p>
        Total:{" "}
        {shipItems.filter((item) => typeFilter == item.stdItem.Type).length}
      </p>
      <div className="container-components-list">
        {shipItems
          .filter((item) => typeFilter == item.stdItem.Type)
          .sort(
            (a, b) =>
              a.size - b.size ||
              (classOrder[a.stdItem.Class?.trim()] || 999) -
                (classOrder[b.stdItem.Class?.trim()] || 999) ||
              a.stdItem.Grade - b.stdItem.Grade ||
              a.stdItem.Name.localeCompare(b.stdItem.Name),
          )
          .map((item) => (
            <ComponentGeneral key={item.className} item={item} />
          ))}
      </div>
    </>
  );
};

export default IndexComponents;
