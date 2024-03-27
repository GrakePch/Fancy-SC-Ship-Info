import Icon from "@mdi/react";
import ManufacturerToHue from "../../../assets/ManufacturerToHue";
import manufacturers_small from "../../../assets/manufacturers_small";
import "./ShipSelectCard.css";
import { mdiCheckCircle } from "@mdi/js";

/* eslint-disable react/prop-types */
function ShipSelectCard({
  shipName,
  manufacturer,
  isReleased,
  imgSrc,
  isShip,
}) {
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
      <div className="Ship-select-card-text">
        <p>
          {shipName}
          {isReleased && (
            <>
              {" "}
              <Icon path={mdiCheckCircle} size={0.6667} />
            </>
          )}
        </p>
      </div>
      <div
        className="Ship-select-card-img"
        style={{
          backgroundImage: `url(${imgSrc})`,
          width: isShip ? "33%" : "25%",
        }}
      ></div>
    </div>
  );
}

export default ShipSelectCard;
