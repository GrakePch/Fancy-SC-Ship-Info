/* eslint-disable react/prop-types */
import classToColor from "../../assets/classToColor";
import classToShort from "../../assets/classToShort";
import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";
import HardpointSizes from "../HardpointSizes/HardpointSizes";
import I18nPure from "../I18nPure";

const getZhName = (name) => {
  let res = component_zh_name[name] || component_zh_name[name?.toLowerCase()];
  if (!res) return false;
  let idx = res.lastIndexOf("(");
  let pure = res.slice(0, idx);
  return pure;
};

const SimpleComponentEditable = ({ type, itemObj, icon }) => {
  const lang = localStorage.getItem("lang");
  const obj = itemObj.InstalledItems?.at(0);
  const baseLoadout = obj?.BaseLoadout;
  const name = obj
    ? getZhName(baseLoadout.Name) || baseLoadout.Name || "未知"
    : "无";
  const grade =
    obj &&
    (baseLoadout.Class || baseLoadout.Grade) &&
    I18nPure(classToShort[baseLoadout.Class] || "?", lang) +
      " - " +
      (baseLoadout.Grade ? String.fromCharCode(64 + baseLoadout.Grade) : "?");
  return (
    <div className="SimpleComponent">
      <div className="SimpleComponent-type font-slim">
        <p>{type}</p>
        <div className="SimpleComponent-type-icon">{icons[icon]}</div>
        <HardpointSizes components={itemObj.InstalledItems} />
      </div>
      <div className="SimpleComponent-contents">
          <p>{name}</p>
          <p>{baseLoadout?.Name}</p>
          <p
            className="SimpleComponent-grade font-slim"
            style={{
              color: classToColor[baseLoadout?.Class],
              backgroundColor: classToColor[baseLoadout?.Class] + "30",
            }}
          >
            {grade}
          </p>
      </div>
    </div>
  );
};

export default SimpleComponentEditable;
