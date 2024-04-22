/* eslint-disable react/prop-types */
// import icons from "../../../assets/icons";
import "./PitchYawRoll.css";

function PitchYawRoll({ P, Y, R, PB, YB, RB, PM, YM, RM }) {
  return (
    <div className="pitch-yaw-roll">
      <div
        className="roll-pie-tl"
        style={{
          background: `conic-gradient(
            var(--color-primary-text) ${(R / RM) * 90}deg, 
            var(--color-primary-dim) ${(R / RM) * 90 + 1}deg,
            var(--color-primary-dim) ${(RB / RM) * 90}deg, 
            #00000000 ${(RB / RM) * 90 + 1}deg)`,
        }}
      ></div>
      <div
        className="roll-pie-tr"
        style={{
          background: `conic-gradient(
            var(--color-primary-text) ${(R / RM) * 90}deg, 
            var(--color-primary-dim) ${(R / RM) * 90 + 1}deg,
            var(--color-primary-dim) ${(RB / RM) * 90}deg, 
            #00000000 ${(RB / RM) * 90 + 1}deg)`,
        }}
      ></div>
      <div
        className="roll-pie-bl"
        style={{
          background: `conic-gradient(
            var(--color-primary-text) ${(R / RM) * 90}deg, 
            var(--color-primary-dim) ${(R / RM) * 90 + 1}deg,
            var(--color-primary-dim) ${(RB / RM) * 90}deg, 
            #00000000 ${(RB / RM) * 90 + 1}deg)`,
        }}
      ></div>
      <div
        className="roll-pie-br"
        style={{
          background: `conic-gradient(
            var(--color-primary-text) ${(R / RM) * 90}deg, 
            var(--color-primary-dim) ${(R / RM) * 90 + 1}deg,
            var(--color-primary-dim) ${(RB / RM) * 90}deg, 
            #00000000 ${(RB / RM) * 90 + 1}deg)`,
        }}
      ></div>
      <div className="axis-yaw"></div>
      <div className="axis-pit"></div>
      <div style={{opacity: .5}}>
        <div
          className="py-rect boost"
          style={{
            height: (PB / PM) * 100 + "%",
            width: (YB / YM) * 100 + "%",
          }}
        ></div> 
        <div
          className="py-rect"
          style={{ height: (P / PM) * 100 + "%", width: (Y / YM) * 100 + "%" }}
        ></div>
      </div>
      {/* <div className="pyr-icon">{icons.ship_rear}</div> */}
    </div>
  );
}

export default PitchYawRoll;
