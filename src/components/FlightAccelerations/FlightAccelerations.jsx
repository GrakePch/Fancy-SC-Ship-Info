/* eslint-disable react/prop-types */
import I18n from "../I18n";
import "./FlightAccelerations.css";

function FlightAccelerations({
  shipImgIso,
  FlightCharObj,
  FwdMax,
  BwdMax,
  StrMax,
  UwdMax,
  DwdMax,
}) {
  const accelObj = FlightCharObj.AccelerationG;
  const boostObj = FlightCharObj.Boost;
  const accelMult = boostObj.AccelerationMultiplier;
  // const capctObj = FlightCharObj.Capacitors;
  const BarBoostFwd = accelObj.Main * accelMult.PositiveAxis.Y;
  const BarBoostBwd = accelObj.Retro * accelMult.NegativeAxis.Y;
  const BarBoostUwd = accelObj.Up * accelMult.PositiveAxis.Z;
  const BarBoostDwd = accelObj.Down * accelMult.NegativeAxis.Z;
  const BarBoostRgt = accelObj.Strafe * accelMult.PositiveAxis.X;
  const BarBoostLft = accelObj.Strafe * accelMult.NegativeAxis.X;
  const BarBoostMaxAllDirection = Math.max(
    FwdMax,
    BwdMax,
    StrMax,
    UwdMax,
    DwdMax
  );
  return (
    <div className="card-list">
      <h2>
        <I18n text="Accelerations" />
      </h2>
      <div className="Accel-plot-container font-slim">
        <div className="Accel-data">
          <div className="accel-flex-data">
            <p>
              <I18n text={"Main"} />
            </p>
            <p>{accelObj.Main.toFixed(1)}</p>
            <p>({BarBoostFwd.toFixed(1)})</p>
            <p>G</p>
          </div>
          <div className="accel-flex-data dim">
            <p>
              <I18n text={"Retro"} />
            </p>
            <p>{accelObj.Retro.toFixed(1)}</p>
            <p>({BarBoostBwd.toFixed(1)})</p>
            <p>G</p>
          </div>
          <hr />
          <div className="accel-flex-data">
            <p>
              <I18n text={"Up"} />
            </p>
            <p>{accelObj.Up.toFixed(1)}</p>
            <p>({BarBoostUwd.toFixed(1)})</p>
            <p>G</p>
          </div>
          <div className="accel-flex-data dim">
            <p>
              <I18n text={"Down"} />
            </p>
            <p>{accelObj.Down.toFixed(1)}</p>
            <p>({BarBoostDwd.toFixed(1)})</p>
            <p>G</p>
          </div>
          <hr />
          <div className="accel-flex-data">
            <p>
              <I18n text={"Left"} />
            </p>
            <p>{accelObj.Strafe.toFixed(1)}</p>
            <p>({BarBoostLft.toFixed(1)})</p>
            <p>G</p>
          </div>
          <div className="accel-flex-data dim">
            <p>
              <I18n text={"Right"} />
            </p>
            <p>{accelObj.Strafe.toFixed(1)}</p>
            <p>({BarBoostRgt.toFixed(1)})</p>
            <p>G</p>
          </div>
        </div>
        <div className="Accel-plot">
          <div
            className="ShipImg"
            style={{ backgroundImage: `url(${shipImgIso})` }}
          ></div>
          <div className="Axis U">
            <div
              className="Accel-Bar-Boost"
              style={{
                height: (BarBoostUwd / BarBoostMaxAllDirection) * 100 + "%",
              }}
            >
              <div
                className="Accel-Bar"
                style={{ height: (accelObj.Up / BarBoostUwd) * 100 + "%" }}
              ></div>
            </div>
            <p>
              <I18n text="U" />
            </p>
          </div>
          <div className="Axis D">
            <div
              className="Accel-Bar-Boost"
              style={{
                height: (BarBoostDwd / BarBoostMaxAllDirection) * 100 + "%",
              }}
            >
              <div
                className="Accel-Bar"
                style={{ height: (accelObj.Down / BarBoostDwd) * 100 + "%" }}
              ></div>
            </div>
            <p>
              <I18n text="D" />
            </p>
          </div>
          <div className="Axis F">
            <div
              className="Accel-Bar-Boost"
              style={{
                height: (BarBoostFwd / BarBoostMaxAllDirection) * 100 + "%",
              }}
            >
              <div
                className="Accel-Bar"
                style={{ height: (accelObj.Main / BarBoostFwd) * 100 + "%" }}
              ></div>
            </div>
            <p>
              <I18n text="F" />
            </p>
          </div>
          <div className="Axis B">
            <div
              className="Accel-Bar-Boost"
              style={{
                height: (BarBoostBwd / BarBoostMaxAllDirection) * 100 + "%",
              }}
            >
              <div
                className="Accel-Bar"
                style={{ height: (accelObj.Retro / BarBoostBwd) * 100 + "%" }}
              ></div>
            </div>
            <p>
              <I18n text="B" />
            </p>
          </div>
          <div className="Axis R">
            <div
              className="Accel-Bar-Boost"
              style={{
                height: (BarBoostRgt / BarBoostMaxAllDirection) * 100 + "%",
              }}
            >
              <div
                className="Accel-Bar"
                style={{ height: (accelObj.Strafe / BarBoostRgt) * 100 + "%" }}
              ></div>
            </div>
            <p>
              <I18n text="R" />
            </p>
          </div>
          <div className="Axis L">
            <div
              className="Accel-Bar-Boost"
              style={{
                height: (BarBoostLft / BarBoostMaxAllDirection) * 100 + "%",
              }}
            >
              <div
                className="Accel-Bar"
                style={{ height: (accelObj.Strafe / BarBoostLft) * 100 + "%" }}
              ></div>
            </div>
            <p>
              <I18n text="L" />
            </p>
          </div>
        </div>

        {/* 
        <div
          className="accel-flex-data"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <p>
            <I18n text={"Strafe"} />
          </p>
          <p>{accelObj.Strafe.toFixed(1)}</p>
          <p>({BarBoostLft.toFixed(1)})</p>
          <p>G</p>
        </div>

        <div>
          <div className="accel-flex-data">
            <p>
              <I18n text={"U"} />
            </p>
            <p>{accelObj.Up.toFixed(1)}</p>
            <p>({BarBoostUwd.toFixed(1)})</p>
            <p>G</p>
          </div>
          <div className="accel-flex-data">
            <p>
              <I18n text={"D"} />
            </p>
            <p>{accelObj.Down.toFixed(1)}</p>
            <p>({BarBoostDwd.toFixed(1)})</p>
            <p>G</p>
          </div>
        </div> */}

        {/* <div
          className="accel-flex-data"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <p>
            <I18n text={"AccelTri"} />
          </p>
          <p>
            {(
              (accelObj.Up ** 2 + accelObj.Strafe ** 2 + accelObj.Main ** 2) **
              0.5
            ).toFixed(1)}
          </p>
          <p>
            (
            {(
              ((accelObj.Up * capctObj.Z_AccelMultiplicator) ** 2 +
                (accelObj.Strafe * capctObj.X_AccelMultiplicator) ** 2 +
                (accelObj.Main * capctObj.Y_AccelMultiplicator) ** 2) **
              0.5
            ).toFixed(1)}
            )
          </p>
          <p>G</p>
        </div> */}

        {/* <div
          className="accel-flex-data"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <p>
            <I18n text={"AccManeuv"} />
          </p>
          <p>{accelObj.Maneuvering?.toFixed(1)}</p>
          <p>
            ({(accelObj.Maneuvering * capctObj.X_AngAccelMultiplier)?.toFixed(1)}
            )
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default FlightAccelerations;
