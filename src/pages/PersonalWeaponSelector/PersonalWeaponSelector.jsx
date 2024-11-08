import { useEffect, useState } from "react";

import icons from "../../assets/icons";
import listPersonalWeapon from "../../data/fps-weapons.json";
import "./PersonalWeaponSelector.css";
import { useNavigate } from "react-router-dom";
import { temp } from "three/webgpu";
import I18n from "../../components/I18n";
import personal_weapons_img from "../../assets/personal_weapons_side/personal_weapons_img";

const PersonalWeaponSelector = () => {
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
  }, []);

  const handleTypeSelectClick = (superType, type) => {
    let composition = superType + "." + type;
    if (composition === showType) setShowType("");
    else setShowType(composition);
  };

  return (
    <div className="Index-Personal-Wpn-container">
      
      <div className="group-list">
        {gunTypes.map((k) => 
        <>
          <p><I18n text={"GunType-" + k} /></p>
          <div className="item-list">
            {
              dictGun[k].sort((a, b) => a.stdItem.Name.localeCompare(b.stdItem.Name)).map((item) => {
                let first_ = item.className.indexOf("_");
                let manuCode = item.className.slice(0, first_).toUpperCase();
                return <div key={item.className} className="item" onClick={() => navigate("/PW/" + item.className)}>
                  {icons["s" + item.stdItem.Size]}
                  <div className="contents">
                    <p className="name"><I18n text={item.name.slice(1)} hanhua /></p>
                    <p className="name-small">{item.stdItem.Name}</p>
                    <p className="manufacturer"><I18n text={"manufacturer_Name" + manuCode} hanhua fail={manuCode} /></p>
                  </div>
                  <div className="thumbnail" style={{backgroundImage: `url(${personal_weapons_img[item.className]})`}}></div>
                </div>
              })
            }
          </div>
        </>)}
        </div>
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
