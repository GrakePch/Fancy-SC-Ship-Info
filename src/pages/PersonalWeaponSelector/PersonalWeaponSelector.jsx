import { useEffect, useState } from "react";

import icons from "../../assets/icons";
import listPersonalWeapon from "../../data/fps-weapons.json";
import "./PersonalWeaponSelector.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import I18n from "../../components/I18n";
import personal_weapons_img from "../../assets/personal_weapons_side/144p/personal_weapons_img";
import Icon from "@mdi/react";
import { mdiSortAscending, mdiSortDescending } from "@mdi/js";

const PersonalWeaponSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showType, setShowType] = useState("");
  const weaponTypes = [
    "Small",
    "Medium",
    "Large",
    "Gadget",
    "Knife",
    "Grenade",
  ];
  const attachmentTypes = [
    "Barrel",
    "IronSight",
    "BottomAttachment",
    "Missile",
    "Utility",
  ];
  const [listWeapon, setListWeapon] = useState({
    Small: [],
    Medium: [],
    Large: [],
    Gadget: [],
    Knife: [],
    Grenade: [],
  });

  const [listAttachment, setListAttachment] = useState({
    Barrel: [],
    IronSight: [],
    BottomAttachment: [],
    Missile: [],
    Utility: [],
  });

  const gunTypes = ["HG", "SMG", "AR", "SR", "SG", "LMG", "GL", "Heavy"];

  const [dictGun, setDictGun] = useState({
    HG: [],
    SMG: [],
    AR: [],
    SG: [],
    SR: [],
    LMG: [],
    GL: [],
    Heavy: [],
    Other: []
  })
  const [listAllWeapon, setListAllWeapon] = useState([]);
  const [listSortValueMax, setListSortValueMax] = useState({});
  const [sortMode, setSortMode] = useState(["type", 1]);

  useEffect(() => {
    const tempListWeapon = {
      Small: [],
      Medium: [],
      Large: [],
      Gadget: [],
      Knife: [],
      Grenade: [],
    };
    const tempListAttach = {
      Barrel: [],
      IronSight: [],
      BottomAttachment: [],
      Light: [],
      Missile: [],
      Utility: [],
    };
    const tempDictGun = {
      HG: [],
      SMG: [],
      AR: [],
      SG: [],
      SR: [],
      LMG: [],
      GL: [],
      Heavy: [],
      Other: []
    }
    const tempListAllWeapon = [];

    for (const item of listPersonalWeapon) {
      if (item.type === "WeaponPersonal") {
        tempListWeapon[item.subType].push(item);
        if (item.subType === "Small") {
          tempDictGun.HG.push(item);
        } else if (item.subType === "Large") {
          tempDictGun.Heavy.push(item);
        } else if (item.subType === "Medium") {
          if (!item.tags) continue;
          if (item.tags?.includes("sniper"))
            tempDictGun.SR.push(item);
          else if (item.tags.includes("rifle"))
            tempDictGun.AR.push(item);
          else if (item.tags.includes("shotgun"))
            tempDictGun.SG.push(item);
          else if (item.tags.includes("smg"))
            tempDictGun.SMG.push(item);
          else if (item.tags.includes("lmg"))
            tempDictGun.LMG.push(item);
          else if (item.tags.includes("glauncher"))
            tempDictGun.GL.push(item);
          else
            tempDictGun.Other.push(item);
        }
      } else if (item.type === "WeaponAttachment") {
        tempListAttach[item.subType].push(item);
      }
    }

    setListWeapon(tempListWeapon);
    setListAttachment(tempListAttach);
    setDictGun(tempDictGun);
    console.log(tempDictGun);

    for (const t of gunTypes) {
      for (const item of tempDictGun[t])
        tempListAllWeapon.push(item);
    }

    let tempListSortValueMax = { maxDPS: 0 };
    for (const item of tempListAllWeapon) {
      item.sort = {};
      let dpsForFiringModes = item.stdItem.Weapon.Firing.map(fm => fm.DamagePerSecond.Physical || fm.DamagePerSecond.Energy || 0);
      let maxDPS = Math.max(...dpsForFiringModes);
      item.sort.maxDPS = maxDPS;
      tempListSortValueMax.maxDPS = Math.max(tempListSortValueMax.maxDPS, maxDPS);
    }
    setListAllWeapon(tempListAllWeapon);
    setListSortValueMax(tempListSortValueMax);
  }, []);

  useEffect(() => {
    let s_sortMode = searchParams.get("sort");
    if (s_sortMode === "maxDPS-")
      setSortMode(["dps", -1]);
    else if (s_sortMode === "maxDPS")
      setSortMode(["dps", 1]);
    else
      setSortMode(["type", 1]);
  }, [searchParams])

  const handleTypeSelectClick = (superType, type) => {
    let composition = superType + "." + type;
    if (composition === showType) setShowType("");
    else setShowType(composition);
  };

  return (
    <div className="Index-Personal-Wpn-container">
      <div className="sort-selector">
        <button 
          onClick={() => {searchParams.delete("sort"); setSearchParams(searchParams, {replace: true})}} 
          className={sortMode[0] === "type" ? "active" : ""}
        ><I18n text="FPSSort-Type" /></button>
        <button 
          onClick={() => {
            if (sortMode[0] != "dps") 
              searchParams.set("sort", "maxDPS-");
            else 
              searchParams.set("sort", (sortMode[1] > 0) ? "maxDPS-" : "maxDPS");
            setSearchParams(searchParams, {replace: true});
        }} 
          className={sortMode[0] === "dps" ? "active" : ""}
        ><I18n text="FPSSort-MaxDPS" />
        {sortMode[0] === "dps" && sortMode[1] > 0 
          ? <Icon path={mdiSortAscending} size={1}/>
          : <Icon path={mdiSortDescending} size={1} vertical/>}
        </button>
      </div>
      {<div className="group-list">
        { sortMode[0] === "dps"
          ? <div className="item-list">
            {
              listAllWeapon.sort((a, b) => sortMode[1] * (a.sort.maxDPS - b.sort.maxDPS)).map((item) => 
                <div key={item.className} className="item" onClick={() => navigate("/PW/" + item.className)}>
                  {icons["s" + item.stdItem.Size]}
                  <div className="contents">
                    <p className="name"><I18n text={item.name.slice(1).toLowerCase()} hanhua /></p>
                    <p className="name-small">{item.stdItem.Name}</p>
                    <p className="value"><span>{item.sort?.maxDPS}</span> <I18n text="FPSSort-MaxDPS" /></p>
                  </div>
                  <div className="thumbnail" style={{backgroundImage: `url(${personal_weapons_img[item.className]})`}}></div>
                  <div className="value-bar" style={{width: `${(item.sort?.maxDPS / 1000) * 100}%`}}></div>
                </div>
              )
            }
          </div>
        : gunTypes.map((k) => 
        <div key={k}>
          <p><I18n text={"GunType-" + k} /></p>
          <div className="item-list">
            {
              dictGun[k].sort((a, b) => a.stdItem.Name.localeCompare(b.stdItem.Name)).map((item) => 
                <div key={item.className} className="item" onClick={() => navigate("/PW/" + item.className)}>
                  {icons["s" + item.stdItem.Size]}
                  <div className="contents">
                    <p className="name"><I18n text={item.name.slice(1).toLowerCase()} hanhua /></p>
                    <p className="name-small">{item.stdItem.Name}</p>
                    <p className="value"><span>{item.sort?.maxDPS}</span> <I18n text="FPSSort-MaxDPS" /></p>
                  </div>
                  <div className="thumbnail" style={{backgroundImage: `url(${personal_weapons_img[item.className]})`}}></div>
                  <div className="value-bar" style={{width: `${(item.sort?.maxDPS / 1000) * 100}%`}}></div>
                </div>
              )
            }
          </div>
        </div>)
        }
      </div>}
      {/* <nav>
        {weaponTypes.map((type) => (
          <button
            key={type}
            className={`btn-type-select ${"w." + type === showType ? "active" : ""}`}
            onClick={() => handleTypeSelectClick("w", type)}
          >
            {type}({listWeapon[type].length})
          </button>
        ))}
      </nav>
      <nav>
        {attachmentTypes.map((type) => (
          <button
            key={type}
            className={`btn-type-select ${"a." + type === showType ? "active" : ""}`}
            onClick={() => handleTypeSelectClick("a", type)}
          >
            {type}({listAttachment[type].length})
          </button>
        ))}
      </nav>
      <div className="item-list">
        {showType &&
          (showType[0] === "w" ? listWeapon : listAttachment)[showType.slice(2)]
            .sort((a, b) => a.stdItem.Name?.localeCompare(b.stdItem.Name))
            .map((item) => (
              <div key={item.className} className="item" onClick={() => navigate("/PW/" + item.className)}>
                {icons["s" + item.stdItem.Size]}
                <p className="name">{item.stdItem.Name}</p>
                <div className="class">
                  {item.stdItem.Class === "Ballistic"
                    ? icons["BulletPhy"]
                    : item.stdItem.Class?.includes("Laser")
                      ? icons["BulletEne"]
                      : item.stdItem.Class?.includes("Plasma")
                        ? icons["BulletDis"]
                        : item.stdItem.Class === "Electron"
                          ? icons["IdleEMEmission"]
                          : item.stdItem.Class}
                </div>
              </div>
            ))}
      </div> */}
    </div>
  );
};

export default PersonalWeaponSelector;
