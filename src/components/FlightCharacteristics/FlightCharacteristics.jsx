/* eslint-disable react/prop-types */
import PitchYawRoll from "./PitchYawRoll/PitchYawRoll";
import "./FlightCharacteristics.css";

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
    <div className="card-list font-slim">
      <div className="flex-data">
        <p>ScmSpeed</p>
        <p>{scm} m/s</p>
      </div>
      <div className="flex-data">
        <p>MaxSpeed</p>
        <p>{max} m/s</p>
      </div>
      <div className="Speed-Meter">
        <div
          className="Speed-Max"
          style={{ width: (max / speedMax) * 100 + "%" }}
        >
          <div
            className="Speed-SCM"
            style={{ width: (scm / max) * 100 + "%" }}
          ></div>
        </div>
      </div>
      <div className="PYR-plot">
        <PitchYawRoll
          P={pitch}
          Y={yaw}
          R={roll}
          PM={pitchMax}
          YM={yawMax}
          RM={rollMax}
        />
        <div>
          <div className="flex-data">
            <p>Pitch</p>
            <p>{pitch} °/s</p>
          </div>
          <div className="flex-data">
            <p>Yaw</p>
            <p>{yaw} °/s</p>
          </div>
          <div className="flex-data">
            <p>Roll</p>
            <p>{roll} °/s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCharacteristics;
