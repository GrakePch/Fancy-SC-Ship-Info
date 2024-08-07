/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import icons from "../../assets/icons";
import "./Components.css";
import { mdiLock } from "@mdi/js";
import { useContext } from "react";
import LangContext from "../../contexts/LangContext";
import I18nPure from "../I18nPure";

const classToShort = {
  Military: "MLT",
  Stealth: "STL",
  Civilian: "CVL",
  Industrial: "IND",
  Competition: "CPT",
};

const classToColor = {
  Military: "#367d39",
  Stealth: "#439193",
  Civilian: "#c1af3e",
  Industrial: "#a86834",
  Competition: "#a83434",
};

const dmgTypeToColor = {
  Physical: "#c1af3e",
  Energy: "#a83434",
  Distortion: "#439193",
};

const sizeToColor = [
  "#6e7881",
  "#258f00",
  "#008f7e",
  "#006dd1",
  "#371cdf",
  "#8022dc",
  "#cc29cf",
  "#ff9900",
  "#ff5c00",
  "#ff3838",
  "#af0000",
  "#ff9900",
  "#ff3838",
];

function Component({ compObj, icon, type }) {
  const lang = useContext(LangContext)[0];
  /* Get the object of the first(only) subweapon if it is gimbal mount */
  let isGimbalMount =
    compObj.Gimballed && compObj.SubWeapons && compObj.SubWeapons.length == 1;
  let obj = isGimbalMount ? compObj.SubWeapons[0] : compObj;
  let bulletDmgType =
    type == "Weapons" && obj.AlphaDmg && Object.keys(obj.AlphaDmg)
      ? Object.keys(obj.AlphaDmg)?.length == 1
        ? Object.keys(obj.AlphaDmg)?.at(0)
        : "Mixed"
      : "";
  return (
    <div
      className="single-component-slot font-slim"
      style={{ backgroundColor: sizeToColor[obj.Size] }}
    >
      <div
        className="single-component"
        style={
          {
            // boxShadow: `0 0 .375rem ${sizeToColor[obj.Size]}`,
          }
        }
      >
        <div className="comp-size-and-lock">
          <p>S{obj.Size}</p>
          {obj.Uneditable && <Icon path={mdiLock} color="#a0a0a0" />}
        </div>
        <div className="comp-icon" style={{ fill: "#a0a0a0" }}>
          {icons[isGimbalMount ? "WeaponsGimballed" : icon]}
        </div>
        <p
          style={{
            color:
              type == "Weapons" && obj.AlphaDmg && Object.keys(obj.AlphaDmg)
                ? dmgTypeToColor[bulletDmgType]
                : classToColor[obj.Class],
          }}
        >
          {obj.Class
            ? I18nPure(classToShort[obj.Class], lang) +
              " - " +
              String.fromCharCode(64 + obj.Grade)
            : type == "MissileRacks"
            ? obj?.Missiles?.length + " × s" + obj?.Missiles?.at(0)?.Size
            : type == "Weapons" && obj.AlphaDmg && Object.keys(obj.AlphaDmg)
            ? I18nPure("Short-" + bulletDmgType, lang)
            : "-"}
        </p>
      </div>
    </div>
  );
}

function Components({ title, icon, type, defaultCompGroupObj, col = 2 }) {
  return (
    <div className="components-group">
      {/* <h4>
        <I18n text={title} />
      </h4> */}
      {defaultCompGroupObj && (
        <div className={`components-wrapper col-${1}`}>
          {defaultCompGroupObj.InstalledItems &&
            defaultCompGroupObj.InstalledItems.map((item, idx) => (
              <Component key={idx} compObj={item} icon={icon} type={type} />
            ))}
          {col == 1 ? (
            (defaultCompGroupObj.InstalledItems == null ||
              defaultCompGroupObj.InstalledItems.length == 0) && (
              <div className="null-slot"></div>
            )
          ) : defaultCompGroupObj.InstalledItems == null ||
            defaultCompGroupObj.InstalledItems.length == 0 ? (
            <>
              <div className="null-slot"></div>
              <div className="null-slot"></div>
            </>
          ) : defaultCompGroupObj.InstalledItems &&
            defaultCompGroupObj.InstalledItems.length % 2 == 1 ? (
            <div className="null-slot"></div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Components;
