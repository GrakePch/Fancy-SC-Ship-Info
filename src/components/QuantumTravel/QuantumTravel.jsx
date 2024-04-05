/* eslint-disable react/prop-types */
import "./QuantumTravel.css";
import I18n from "../I18n";

function euclideanDistance(pos1, pos2) {
  return (
    ((pos1[0] - pos2[0]) ** 2 +
      (pos1[1] - pos2[1]) ** 2 +
      (pos1[2] - pos2[2]) ** 2) **
    0.5
  );
}

export default function QuantumTravel({
  QFuelCapacity,
  FuelConsumpRate,
  QTSpeedCruise,
  QTSpeedStage1,
  QTSpeedStage2,
}) {
  const posPLCrusader = [-18962176.0, -2664960.0, 0.0];
  const posPLHurston = [12850457.093, 0.0, 0.0];
  const posPLmicroTech = [22462085.252, 37185744.965, 0.0];
  const posJPStantonToMagnus = [-62284273.861, 23467618.051, 20198396.608];
  const posJPStantonToTerra = [51118221.617, -5269981.303, -4339551.619];
  const QTRangeMax = QFuelCapacity / FuelConsumpRate / 1e9; // Unite: Gm

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
            className={`CRU_HUR ${QTRangeMax < disCRU_HUR && "cannot-reach"}`}
            style={{ width: (disCRU_HUR / disJPS2M_JPS2T) * 100 + "%" }}
          ></div>
          <p>
            <I18n text="QTRangeCRU2HUR" />
            {disCRU_HUR.toFixed(1)}
          </p>
          <div
            className={`CRU_MIC ${QTRangeMax < disCRU_MIC && "cannot-reach"}`}
            style={{ width: (disCRU_MIC / disJPS2M_JPS2T) * 100 + "%" }}
          ></div>
          <p>
            <I18n text="QTRangeCRU2MIC" />
            {disCRU_MIC.toFixed(1)}
          </p>
          <div
            className={`JPS2M_JPS2T ${
              QTRangeMax < disJPS2M_JPS2T && "cannot-reach"
            }`}
          ></div>
          <p>
            <I18n text="QTRangeJPS2M2JPS2T" />
            {disJPS2M_JPS2T.toFixed(1)}
          </p>
        </div>
        <div className="KeyValue">
          <p>
            <I18n text="QTFuelConsumptionRate" />
          </p>
          <p>{(FuelConsumpRate * 1e9).toFixed(2)} /Gm</p>
        </div>
        <div className="KeyValue">
          <p>
            <I18n text="QTSpeedCruise" />
          </p>
          <p>{(QTSpeedCruise / 1e3).toFixed(0)} km/s</p>
        </div>
        <div className="KeyValue">
          <p>
            <I18n text="TravelTimeFromCruToMic" />
          </p>
          <p>~{((disCRU_MIC * 1e9) / QTSpeedCruise / 60).toFixed(0)} min</p>
        </div>
      </div>
    </div>
  );
}
