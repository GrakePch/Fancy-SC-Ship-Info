/* eslint-disable react/prop-types */
import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";
import HardpointSizes from "../HardpointSizes/HardpointSizes";
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

const getZhName = (name) => {
  let res = component_zh_name[name] || component_zh_name[name?.toLowerCase()];
  if (!res) return false;
  let idx = res.lastIndexOf("(");
  let pure = res.slice(0, idx);
  return pure;
};
const SimpleComponent = ({ type, itemObj, icon }) => {
  const lang = localStorage.getItem("lang");
  const obj = itemObj.InstalledItems?.at(0);
  const name = obj ? getZhName(obj.Name) || obj.Name || "未知" : "无";
  return (
    <div className="SimpleComponent">
      <div className="SimpleComponent-type font-slim">
        <p>{type}</p>
        <div className="SimpleComponent-type-icon">{icons[icon]}</div>
        <HardpointSizes components={itemObj.InstalledItems} />
      </div>
      <div className="SimpleComponent-contents">
        <div className="SimpleComponent-name-grade">
          <p>{name}</p>
          <p className="font-slim" style={{ color: classToColor[obj?.Class] }}>
            {obj &&
              (obj?.Class || obj?.Grade) &&
              I18nPure(classToShort[obj?.Class] || "?", lang) +
                " - " +
                (obj?.Grade ? String.fromCharCode(64 + obj?.Grade) : "?")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleComponent;
