/* eslint-disable react/prop-types */
import classToColor from "../../assets/classToColor";
import classToShort from "../../assets/classToShort";
import icons from "../../assets/icons";
import I18nPure from "../I18nPure";
import "./ComponentGeneral.css";

const ComponentGeneral = ({ item }) => {
  return (
    <div className="container-component-info">
      <div className="component-header">
        <div className="component-size-icon">
          {icons["s" + item.stdItem.Size]}
        </div>
        {[
          "PowerPlant",
          "Shield",
          "Cooler",
          "QuantumDrive",
          "Radar",
          "QuantumInterdictionGenerator",
        ].includes(item.type) && (
          <p
            className="component-class-grade font-slim"
            style={{
              color: classToColor[item.stdItem?.Class?.trim()],
              backgroundColor: classToColor[item.stdItem?.Class?.trim()]
                ? classToColor[item.stdItem?.Class?.trim()] + "10"
                : "var(--color-bg-lighter-a)",
            }}
          >
            {(item.stdItem.Class || item.stdItem.Grade) &&
              I18nPure(
                classToShort[item.stdItem.Class?.trim()] || "???",
                "en",
              ) +
                " - " +
                (item.stdItem.Grade
                  ? String.fromCharCode(64 + item.stdItem.Grade)
                  : "?")}
          </p>
        )}
        <h4>{item.stdItem.Name}</h4>
      </div>
      <p>
        <small>
          {item.stdItem.Type.endsWith(".UNDEFINED")
            ? item.stdItem.Type.slice(0, -10)
            : item.stdItem.Type}
        </small>
      </p>
      {/* <p>
        <small>{item.stdItem.ClassName}</small>
      </p> */}
      <p>Made by {item.stdItem.Manufacturer?.Name || "[UNKNOWN]"}</p>
    </div>
  );
};

export default ComponentGeneral;
