/* eslint-disable react/prop-types */
import PitchYawRoll from "./PitchYawRoll/PitchYawRoll";
import "./FlightCharacteristics.css";
import I18n from "../I18n";

function FlightCharacteristics({
  scm,
  max,
  pitch,
  yaw,
  roll,
  speedMax,
  pitchMax,
  yawMax,
  rollMax,
}) {
  return (
    <div className="card-list">
    <h2><I18n text="Speeds" /></h2>
      <div className="PYR-plot font-slim">
        <div className="Speed-Meter">
          <div
            className="Speed-Axis"
            // style={{ height: 100 - (max / speedMax) * 100 + "%" }}
          ></div>
          <div
            className="Speed-Max"
            style={{ height: (max / speedMax) * 100 + "%" }}
          >
            <div
              className="Speed-SCM"
              style={{ height: (scm / max) * 100 + "%" }}
            ><p>{scm}</p></div>
            <p>{max}</p>
          </div>
          <p>{speedMax - max > 200 && speedMax}</p>
          <p></p>
        </div>
        <div className="Flight-char-info">
          <p>
            <I18n text={"ScmSpeed"} />
          </p>
          <div className="flex-data">
            <p>{scm} m/s</p>
          </div>
          <p>
            <I18n text={"MaxSpeed"} />
          </p>
          <div className="flex-data">
            <p>{max} m/s</p>
          </div>
          <div className="flex-data">
            <p>
              <I18n text={"Pitch"} />
            </p>
            <p>{pitch} °/s</p>
          </div>
          <div className="flex-data">
            <p>
              <I18n text={"Yaw"} />
            </p>
            <p>{yaw} °/s</p>
          </div>
          <div className="flex-data">
            <p>
              <I18n text={"Roll"} />
            </p>
            <p>{roll} °/s</p>
          </div>
        </div>
        <div className="PYR-plot-self">
          <PitchYawRoll
            P={pitch}
            Y={yaw}
            R={roll}
            PM={pitchMax}
            YM={yawMax}
            RM={rollMax}
          />
        </div>
      </div>
    </div>
  );
}

export default FlightCharacteristics;
