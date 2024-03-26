import Icon from "@mdi/react";
import ManufacturerToHue from "../../../assets/ManufacturerToHue";
import manufacturers_small from "../../../assets/manufacturers_small";
import "./ShipSelectCard.css";
import { mdiCheckCircleOutline } from "@mdi/js";

/* eslint-disable react/prop-types */
function ShipSelectCard({ shipName, manufacturer, isReleased }) {
  return (
    <div
      className="Ship-select-card"
      style={{
        backgroundColor:
          ManufacturerToHue[manufacturer] !== undefined
            ? `hsl(${ManufacturerToHue[manufacturer]}, 20%, 19%)`
            : "#282828",
        color:
          ManufacturerToHue[manufacturer] !== undefined
            ? `hsl(${ManufacturerToHue[manufacturer]}, 100%, 90%)`
            : "inherit",
      }}
    >
      <div className="Ship-select-card-icon-bg">
        {manufacturers_small[manufacturer]}
      </div>
      <p>
        {shipName}
        {isReleased && <Icon path={mdiCheckCircleOutline} size={0.6667} />}
      </p>
    </div>
  );
}

export default ShipSelectCard;
