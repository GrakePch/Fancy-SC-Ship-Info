/* eslint-disable react/prop-types */
import "./QuantumTravel.css";
import I18n from "../I18n";
import qtTime from "../../utils/qtTimeCalculator";
import I18nPure from "../I18nPure";
import { useContext } from "react";
import LangContext from "../../contexts/LangContext";

function euclideanDistance(pos1, pos2) {
  return (
    ((pos1[0] - pos2[0]) ** 2 +
      (pos1[1] - pos2[1]) ** 2 +
      (pos1[2] - pos2[2]) ** 2) **
    0.5
  );
}

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

const sizeToColor = [
  "#6e7881",
  "#258f00",
  "#008f7e",
  "#006dd1",
  "#371cdf",
  "#8022dc",
  "#cc29cf",
  "#ff9900",
  "#ff5c00",
  "#ff3838",
  "#af0000",
  "#ff9900",
  "#ff3838",
];

export default function QuantumTravel({
  QDriveName,
  QDriveSize,
  QDriveClass,
  QDriveGrade,
  QFuelCapacity,
  FuelConsumpRate,
  QTSpeedCruise,
  QTSpeedStage1,
  QTSpeedStage2,
  SpoolTime,
  CoolDown,
  SplineSpeed,
  SplineAccelRateStage1,
  SplineAccelRateStage2,
  SplineSpoolTime,
  SplineCoolDown,
}) {
  const lang = useContext(LangContext)[0];

  const posPLCrusader = [-18962176.0, -2664960.0, 0.0];
  const posPLHurston = [12850457.093, 0.0, 0.0];
  const posPLmicroTech = [22462085.252, 37185744.965, 0.0];
  const posJPStantonToMagnus = [-62284273.861, 23467618.051, 20198396.608];
  const posJPStantonToTerra = [51118221.617, -5269981.303, -4339551.619];
  const QTRangeMax = QFuelCapacity / FuelConsumpRate / 1e9; // Unit: Gm

  /* Distance Unit: Gm */
  const disCRU_HUR = euclideanDistance(posPLCrusader, posPLHurston) / 1e6;
  const disCRU_MIC = euclideanDistance(posPLCrusader, posPLmicroTech) / 1e6;
  const disJPS2M_JPS2T =
    euclideanDistance(posJPStantonToMagnus, posJPStantonToTerra) / 1e6;
  return (
    <div className="card-list">
      <h2>
        <I18n text="QuantumTravel" />
      </h2>
      <div className="componentQDrive font-slim">
        <p>{QDriveName}</p>
        <p>S{QDriveSize}</p>
        <p>
          {I18nPure(classToShort[QDriveClass], lang)} -{" "}
          {String.fromCharCode(64 + QDriveGrade)}
        </p>
      </div>
      <div className="quantumTravel-main-wrapper font-slim">
        <div className="KeyValue">
          <p>
            <I18n text="QTRangeMax" />
          </p>
          <p>{QTRangeMax.toFixed(3)} Gm</p>
        </div>
        <div className="quantumRangeMeter">
          <div className="mainMeter_wrapper">
            <div
              className="mainMeter"
              style={{ width: (QTRangeMax / disJPS2M_JPS2T) * 100 + "%" }}
            ></div>
          </div>
          {QTRangeMax > disJPS2M_JPS2T && <div className="moreMeter">...</div>}
        </div>
        <div className="rulers_wrapper font-slim">
          <div
            className={`ruler CRU_HUR ${
              QTRangeMax < disCRU_HUR && "cannot-reach"
            }`}
            style={{ width: (disCRU_HUR / disJPS2M_JPS2T) * 100 + "%" }}
          ></div>
          <div>
            <p>
              <I18n text="QTRangeCRU2HUR" />
              {disCRU_HUR.toFixed(1)}
            </p>
            <p>
              {QTRangeMax >= disCRU_HUR ? (
                `T= ${(
                  qtTime(
                    disCRU_HUR * 1e9,
                    QTSpeedCruise,
                    QTSpeedStage1,
                    QTSpeedStage2
                  ) / 60
                ).toFixed(0)}:${(
                  qtTime(
                    disCRU_HUR * 1e9,
                    QTSpeedCruise,
                    QTSpeedStage1,
                    QTSpeedStage2
                  ) % 60
                )
                  .toFixed(0)
                  .padStart(2, "0")}`
              ) : (
                <I18n text="LowFuel" />
              )}
            </p>
          </div>
          <div
            className={`ruler CRU_MIC ${
              QTRangeMax < disCRU_MIC && "cannot-reach"
            }`}
            style={{ width: (disCRU_MIC / disJPS2M_JPS2T) * 100 + "%" }}
          ></div>
          <div>
            <p>
              <I18n text="QTRangeCRU2MIC" />
              {disCRU_MIC.toFixed(1)}
            </p>
            <p>
              {QTRangeMax >= disCRU_MIC ? (
                `T= ${(
                  qtTime(
                    disCRU_MIC * 1e9,
                    QTSpeedCruise,
                    QTSpeedStage1,
                    QTSpeedStage2
                  ) / 60
                ).toFixed(0)}:${(
                  qtTime(
                    disCRU_MIC * 1e9,
                    QTSpeedCruise,
                    QTSpeedStage1,
                    QTSpeedStage2
                  ) % 60
                )
                  .toFixed(0)
                  .padStart(2, "0")}`
              ) : (
                <I18n text="LowFuel" />
              )}
            </p>
          </div>
          <div
            className={`ruler JPS2M_JPS2T ${
              QTRangeMax < disJPS2M_JPS2T && "cannot-reach"
            }`}
          ></div>
          <div>
            <p>
              <I18n text="QTRangeJPS2M2JPS2T" />
              {disJPS2M_JPS2T.toFixed(1)}
            </p>
            <p>
              {QTRangeMax >= disJPS2M_JPS2T ? (
                `T= ${(
                  qtTime(
                    disJPS2M_JPS2T * 1e9,
                    QTSpeedCruise,
                    QTSpeedStage1,
                    QTSpeedStage2
                  ) / 60
                ).toFixed(0)}:${(
                  qtTime(
                    disJPS2M_JPS2T * 1e9,
                    QTSpeedCruise,
                    QTSpeedStage1,
                    QTSpeedStage2
                  ) % 60
                )
                  .toFixed(0)
                  .padStart(2, "0")}`
              ) : (
                <I18n text="LowFuel" />
              )}
            </p>
          </div>
        </div>
        <hr />
        <div className="KeyValue">
          <p>
            <I18n text="QTSpeedCruise" />
          </p>
          <p>{(QTSpeedCruise / 1e3).toFixed(0)} km/s</p>
        </div>
        <div className="KeyValue">
          <p>
            <I18n text="QTFuelConsumptionRate" />
          </p>
          <p>{(FuelConsumpRate * 1e9).toFixed(2)} /Gm</p>
        </div>
        <div className="KeyValue">
          <p>
            <I18n text="StandardSpoolTime" />
          </p>
          <p>{SpoolTime} s</p>
        </div>
        <div className="KeyValue">
          <p>
            <I18n text="StandardCooldownTimeMax" />
          </p>
          <p>{CoolDown} s</p>
        </div>
        {/* <div className="KeyValue">
          <p>
            <I18n text="TravelTimeFromCruToMic" />
          </p>
          <p>
            {(
              qtTime(
                disCRU_MIC * 1e9,
                QTSpeedCruise,
                QTSpeedStage1,
                QTSpeedStage2
              ) / 60
            ).toFixed(0)}{" "}
            min{" "}
            {(
              qtTime(
                disCRU_MIC * 1e9,
                QTSpeedCruise,
                QTSpeedStage1,
                QTSpeedStage2
              ) % 60
            ).toFixed(0)}{" "}
            s
          </p>
        </div> */}
      </div>
    </div>
  );
}
