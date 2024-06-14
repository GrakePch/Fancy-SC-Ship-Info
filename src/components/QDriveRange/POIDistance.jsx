import { useContext } from "react";

import classToColor from "../../assets/classToColor";
import classToShort from "../../assets/classToShort";
import icons from "../../assets/icons";
import LangContext from "../../contexts/LangContext";
import I18n from "../I18n";
import I18nPure from "../I18nPure";
import "./QDriveRange.css";

const POIDistance = ({ name, range, maxRange = 1 }) => {
  const rangeColor = "hsla(20deg, 0%, 60%, 30%)";
  return (
    <div
      className="QDriveRange-container POIDistance"
      style={{
        background: `linear-gradient(to right, ${rangeColor}, ${rangeColor} ${(range / maxRange) * 100}%, var(--color-bg-light) ${(range / maxRange) * 100}%)`,
      }}
    >
      <p>
        <I18n text={"Long-" + name} />
      </p>
      <p className="value">{range.toFixed(3)} Gm</p>
    </div>
  );
};

export default POIDistance;
