import { mdiCheckCircle } from "@mdi/js";
import Icon from "@mdi/react";

import ManufacturerToHue from "../../../assets/ManufacturerToHue";
import manufacturers_small from "../../../assets/manufacturers_small";
import "./ShipSelectCard.css";

/* eslint-disable react/prop-types */
function ShipSelectCard({
  shipName,
  manufacturer,
  isReleased,
  imgSrc,
  isShip,
  infoText,
  bgColorOverride,
  colorOverride,
}) {
  const theme = localStorage.getItem("theme");
  return (
    <div
      className="Ship-select-card"
      style={{
        backgroundColor:
          bgColorOverride ||
          (ManufacturerToHue[manufacturer] !== undefined
            ? `hsl(${ManufacturerToHue[manufacturer]}, ${theme == "light" ? "10%, 70%" : "20%, 19%"})`
            : "#282828"),
        color:
          colorOverride ||
          (ManufacturerToHue[manufacturer] !== undefined
            ? `hsl(${ManufacturerToHue[manufacturer]}, 100%, ${theme == "light" ? "10%" : "90%"})`
            : "inherit"),
      }}
    >
      <div className="Ship-select-card-icon-bg">
        {manufacturers_small[manufacturer]}
      </div>
      <div className="Ship-select-card-text">
        <p style={{ fontWeight: theme === "light" && 600 }}>
          {shipName}
          {isReleased && (
            <>
              {" "}
              <Icon path={mdiCheckCircle} size={0.6667} />
            </>
          )}
        </p>
        {infoText && (
          <p className="Ship-select-card-special-info">${infoText}</p>
        )}
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
