/* eslint-disable react/prop-types */
import AccelerationPlot from "./AccelerationPlot/AccelerationPlot";
import "./FlightAccelerations.css";

function FlightAccelerations({
  FlightCharObj,
  FwdMax,
  BwdMax,
  StrMax,
  UwdMax,
  DwdMax,
}) {
  let accelObj = FlightCharObj.AccelerationG;
  let capctObj = FlightCharObj.Capacitors;
  return (
    <div className="card-list font-slim">
      <div className="Accel-plot-container">
        <div>
          <div className="accel-flex-data">
            <p>F</p>
            <p>{accelObj.Main.toFixed(1)}</p>
            <p>
              ({(accelObj.Main * capctObj.Y_AccelMultiplicator).toFixed(1)})
            </p>
            <p>G</p>
          </div>
          <div className="Accel-plot">
            <AccelerationPlot
              F={accelObj.Main}
              B={accelObj.Retro}
              LR={accelObj.Strafe}
              FBA={capctObj.Y_AccelMultiplicator}
              LRA={capctObj.X_AccelMultiplicator}
              FM={Math.max(FwdMax, UwdMax)}
              BM={Math.max(BwdMax, DwdMax)}
              LRM={StrMax}
            />
          </div>
          <div className="accel-flex-data">
            <p>B</p>
            <p>{accelObj.Retro.toFixed(1)}</p>
            <p>
              ({(accelObj.Retro * capctObj.Y_AccelMultiplicator).toFixed(1)})
            </p>
            <p>G</p>
          </div>
        </div>

        <div
          className="accel-flex-data"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <p>Strafe</p>
          <p>{accelObj.Strafe.toFixed(1)}</p>
          <p>
            ({(accelObj.Strafe * capctObj.X_AccelMultiplicator).toFixed(1)})
          </p>
          <p>G</p>
        </div>

        <div>
          <div className="accel-flex-data">
            <p>U</p>
            <p>{accelObj.Up.toFixed(1)}</p>
            <p>({(accelObj.Up * capctObj.Z_AccelMultiplicator).toFixed(1)})</p>
            <p>G</p>
          </div>
          <div className="Accel-plot">
            <AccelerationPlot
              F={accelObj.Up}
              B={accelObj.Down}
              LR={accelObj.Strafe}
              FBA={capctObj.Z_AccelMultiplicator}
              LRA={capctObj.X_AccelMultiplicator}
              FM={Math.max(FwdMax, UwdMax)}
              BM={Math.max(BwdMax, DwdMax)}
              LRM={StrMax}
              isFBchangedToUD
            />
          </div>
          <div className="accel-flex-data">
            <p>D</p>
            <p>{accelObj.Down.toFixed(1)}</p>
            <p>
              ({(accelObj.Down * capctObj.Z_AccelMultiplicator).toFixed(1)})
            </p>
            <p>G</p>
          </div>
        </div>

        <div
          className="accel-flex-data"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <p>AccelTri</p>
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
        </div>

        <div
          className="accel-flex-data"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <p>AccManeuv</p>
          <p>{accelObj.Maneuvering.toFixed(1)}</p>
          <p>
            ({(accelObj.Maneuvering * capctObj.X_AngAccelMultiplier).toFixed(1)}
            )
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlightAccelerations;
