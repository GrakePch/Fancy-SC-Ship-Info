import { useContext } from "react";

import classToColor from "../../assets/classToColor";
import classToShort from "../../assets/classToShort";
import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";
import sizeToColor from "../../assets/sizeToColor";
import LangContext from "../../contexts/LangContext";
import euclideanDistance from "../../utils/euclideanDistance";
import qtTime from "../../utils/qtTimeCalculator";
import I18n from "../I18n";
import I18nPure from "../I18nPure";
import "./QDriveRange.css";

const posPLCrusader = [-18962176.0, -2664960.0, 0.0];
const posPLHurston = [12850457.093, 0.0, 0.0];

/* Distance Unit: Gm */
const disCRU_HUR = euclideanDistance(posPLCrusader, posPLHurston) / 1e6;

const QDriveRange = ({
  QDrive,
  maxRange = 1,
  QTRange = 0,
  isDefault = false,
}) => {
  const lang = useContext(LangContext)[0];
  const rangeColor = "hsla(210, 90%, 50%, 15%)";

  return (
    <div
      className="QDriveRange-container"
      style={{
        background: `linear-gradient(to right, ${rangeColor}, ${rangeColor} ${(QTRange / maxRange) * 100}%, var(--color-bg-light) ${(QTRange / maxRange) * 100}%)`,
        outline: isDefault
          ? `2px solid ${sizeToColor[QDrive.stdItem.Size]}`
          : null,
      }}
    >
      {icons["s" + QDrive.stdItem.Size]}
      <p
        className="class-grade"
        style={{
          color: classToColor[QDrive.stdItem.Class],
        }}
      >
        {I18nPure(classToShort[QDrive.stdItem.Class] || "?", lang) +
          " - " +
          String.fromCharCode(64 + QDrive.stdItem.Grade)}
      </p>
      <p className="name">
        {lang === "zh"
          ? component_zh_name[QDrive.stdItem.Name] ||
            component_zh_name[QDrive.stdItem.Name?.toLowerCase()] ||
            QDrive.stdItem.Name
          : QDrive.stdItem.Name}
      </p>
      <p className="value">
        {QDrive.stdItem.QuantumDrive.StandardJump.SpoolUpTime.toFixed(0)} s
      </p>
      <p className="value">
        {QDrive.stdItem.QuantumDrive.StandardJump.Cooldown.toFixed(0)} s
      </p>
      <p
        className="value"
        style={{ color: QTRange < disCRU_HUR && "hsl(0deg, 50%, 50%)" }}
      >
        {QTRange >= disCRU_HUR ? (
          <>
            {(
              qtTime(
                disCRU_HUR * 1e9,
                QDrive.stdItem.QuantumDrive.StandardJump.Speed,
                QDrive.stdItem.QuantumDrive.StandardJump.Stage1AccelerationRate,
                QDrive.stdItem.QuantumDrive.StandardJump.State2AccelerationRate,
              ) / 60
            ).toFixed(0)}
            :
            {(
              qtTime(
                disCRU_HUR * 1e9,
                QDrive.stdItem.QuantumDrive.StandardJump.Speed,
                QDrive.stdItem.QuantumDrive.StandardJump.Stage1AccelerationRate,
                QDrive.stdItem.QuantumDrive.StandardJump.State2AccelerationRate,
              ) % 60
            )
              .toFixed(0)
              .padStart(2, "0")}
          </>
        ) : (
          <I18n text="LowFuel" />
        )}
      </p>
      <p className="value" style={{ width: "7rem" }}>
        {QTRange.toFixed(3)} Gm
      </p>
    </div>
  );
};

export default QDriveRange;
