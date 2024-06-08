/* eslint-disable react/prop-types */
import { useContext } from "react";

import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";
import LangContext from "../../contexts/LangContext";
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

const SimpleComponent = ({ type, itemObj, icon }) => {
  const lang = useContext(LangContext)[0];
  const obj = itemObj.InstalledItems?.at(0);
  return (
    <div className="SimpleComponent">
      <div className="icon">{icons[icon]}</div>
      <div className="SimpleComponent-contents">
        <div className="SimpleComponent-type-sizes font-slim">
          <p>{type}</p>
          <div>
            <HardpointSizes components={itemObj.InstalledItems} />
          </div>
        </div>
        <div className="SimpleComponent-name-grade">
          <p>
            {obj
              ? component_zh_name[obj.Name?.toLowerCase()] || obj.Name
              : "无"}
          </p>
          <p className="font-slim" style={{ color: classToColor[obj?.Class] }}>
            {obj &&
              I18nPure(classToShort[obj?.Class], lang) +
                " - " +
                String.fromCharCode(64 + obj?.Grade)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleComponent;
