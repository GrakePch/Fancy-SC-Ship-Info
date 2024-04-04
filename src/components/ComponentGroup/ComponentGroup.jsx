/* eslint-disable react/prop-types */
import "./ComponentGroup.css";
import HardpointSizes from "../HardpointSizes/HardpointSizes";
import I18n from "../I18n";
import icons from "../../assets/icons";

export default function ComponentGroup({ title, icon, defList, isSpan2 }) {
  return (
    <div
      className="btn-component-group"
      type="button"
      style={{ gridColumn: isSpan2 && "span 3" }}
    >
      <p>
        <I18n text={title} />
      </p>
      {icons[icon]}
      <p className="hardpoint-sizes">
        <HardpointSizes components={defList} />
      </p>
    </div>
  );
}
