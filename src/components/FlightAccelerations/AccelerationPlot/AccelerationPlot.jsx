/* eslint-disable react/prop-types */
import icons from "../../../assets/icons";
import "./AccelerationPlot.css";

function AccelerationPlot({
  F,
  B,
  LR,
  FBA,
  LRA,
  FM,
  BM,
  LRM,
  isFBchangedToUD,
}) {
  return (
    <div
      className="acceleration-plot"
      style={{ aspectRatio: `${LRM * 2} / ${FM + BM}` }}
    >
      <div
        className="accel-forward-section"
        style={{ height: (FM / (FM + BM)) * 100 + "%" }}
      >
        <div className="axis-X"></div>
        <div className="axis-Y"></div>
        <div
          className="accel-forward-rect-afterburner"
          style={{
            height: ((F * FBA) / FM) * 100 + "%",
            width: ((LR * LRA) / LRM) * 100 + "%",
          }}
        >
          <div
            className="accel-forward-rect"
            style={{
              height: (F / (F * FBA)) * 100 + "%",
              width: (LR / (LR * LRA)) * 100 + "%",
            }}
          ></div>
        </div>
      </div>
      <div
        className="accel-backward-section"
        style={{ height: (BM / (FM + BM)) * 100 + "%" }}
      >
        <div className="axis-Y"></div>
        <div
          className="accel-backward-rect-afterburner"
          style={{
            height: ((B * FBA) / BM) * 100 + "%",
            width: ((LR * LRA) / LRM) * 100 + "%",
          }}
        >
          <div
            className="accel-backward-rect"
            style={{
              height: (B / (B * FBA)) * 100 + "%",
              width: (LR / (LR * LRA)) * 100 + "%",
            }}
          ></div>
        </div>
        <div className="accel-icon">
          {isFBchangedToUD ? icons.ship_rear : icons.ship_top}
        </div>
      </div>
    </div>
  );
}

export default AccelerationPlot;
