/* eslint-disable react/prop-types */
import PitchYawRoll from "./PitchYawRoll/PitchYawRoll";
import "./FlightCharacteristics.css";
import I18n from "../I18n";

function FlightCharacteristics({
  scm,
  max,
  maxFwd,
  maxBwd,
  pitch,
  yaw,
  roll,
  speedMax,
  pitchMax,
  yawMax,
  rollMax,
  angVelMult,
  spoolTime,
}) {
  return (
    <div className="card-list pos-relative">
      <h2>
        <I18n text="Speeds" />
      </h2>
      <div className="Toggle-Spool-Time font-slim">
        <p>{spoolTime} s</p>
        <p>
          <I18n text="SpoolTime" />
        </p>
      </div>
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
            >
              <p>{scm}</p>
            </div>
            <p>{max}</p>
          </div>
          <div
            className="Speed-Max Fwd"
            style={{ height: (maxFwd / speedMax) * 100 + "%" }}
          >
            <div
              className="Speed-Max Bwd"
              style={{ height: (maxBwd / maxFwd) * 100 + "%" }}
            >
              <div
                className="Speed-SCM"
                style={{ height: (scm / maxBwd) * 100 + "%" }}
              ></div>
              <p>{maxBwd}</p>
            </div>
            <p>{maxFwd}</p>
          </div>
          {/* <p>{speedMax - max > 200 && speedMax}</p> */}
        </div>
        <div className="Flight-char-info">
          <p>
            <I18n text={"NavMaxSpeed"} />
          </p>
          <div className="flex-data red">
            <p>
              <I18n text={"AllDirections"} />
            </p>
            <p>{max} m/s</p>
          </div>
          <hr />
          <p>
            <I18n text={"ScmMaxSpeeds"} />
          </p>
          <div className="flex-data red">
            <p>
              <I18n text={"ScmFwdMaxSpeed"} />
            </p>
            <p>{maxFwd} m/s</p>
          </div>
          <div className="flex-data red">
            <p>
              <I18n text={"ScmBwdMaxSpeed"} />
            </p>
            <p>{maxBwd} m/s</p>
          </div>
          <p>
            <I18n text={"ScmSpeed"} />
          </p>
          <div className="flex-data">
            <p>
              <I18n text={"AllDirections"} />
            </p>
            <p>{scm} m/s</p>
          </div>
        </div>
        <div className="PYR-plot-self">
          <div className="flex-data">
            <p>
              <I18n text={"Pitch"} />
            </p>
            <p>
              {pitch} <span>({(pitch * angVelMult.Pitch).toFixed(0)})</span> °/s
            </p>
          </div>
          <div className="flex-data">
            <p>
              <I18n text={"Yaw"} />
            </p>
            <p>
              {yaw} <span>({(yaw * angVelMult.Yaw).toFixed(0)})</span> °/s
            </p>
          </div>
          <div className="flex-data">
            <p>
              <I18n text={"Roll"} />
            </p>
            <p>
              {roll} <span>({(roll * angVelMult.Roll).toFixed(0)})</span> °/s
            </p>
          </div>
          <PitchYawRoll
            P={pitch}
            Y={yaw}
            R={roll}
            PB={pitch * angVelMult.Pitch}
            YB={yaw * angVelMult.Yaw}
            RB={roll * angVelMult.Roll}
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
