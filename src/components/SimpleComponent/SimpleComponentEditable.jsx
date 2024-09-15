/* eslint-disable react/prop-types */
import { useContext } from "react";

import classToColor from "../../assets/classToColor";
import classToShort from "../../assets/classToShort";
import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";
import LangContext from "../../contexts/LangContext";
import HardpointSizes from "../HardpointSizes/HardpointSizes";
import I18nPure from "../I18nPure";

const SimpleComponentEditable = ({ type, itemObj, icon }) => {
  const lang = useContext(LangContext)[0];
  const obj = itemObj.InstalledItems?.at(0);
  const baseLoadout = obj?.BaseLoadout;
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
              ? component_zh_name[baseLoadout.Name] ||
                component_zh_name[baseLoadout.Name?.toLowerCase()] ||
                baseLoadout.Name ||
                "未知"
              : "无"}
          </p>
          <p
            className="font-slim"
            style={{ color: classToColor[baseLoadout?.Class] }}
          >
            {obj &&
              (baseLoadout.Class || baseLoadout.Grade) &&
              I18nPure(classToShort[baseLoadout.Class] || "?", lang) +
                " - " +
                (baseLoadout.Grade
                  ? String.fromCharCode(64 + baseLoadout.Grade)
                  : "?")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleComponentEditable;
