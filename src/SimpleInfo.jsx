import { useContext } from "react";

import "./SimpleInfo.css";
import ManufacturerToHue from "./assets/ManufacturerToHue";
import bg_line from "./assets/lines.png";
import manufacturers_small from "./assets/manufacturers_small";
import ship_pics_and_zh_name from "./assets/ship_pics_and_zh_name.json";
import statusToHue from "./assets/statusToHue";
import I18n from "./components/I18n";
import LangContext from "./contexts/LangContext";

const SimpleInfo = ({
  shipIdx,
  shipObj,
  shipHardpts,
  dictShipZhName,
  dictShipImgIso,
}) => {
  const lang = useContext(LangContext)[0];
  if (!shipIdx) return null;
  return (
    <div className="SimpleInfo-container">
      <div className="manufacturer-bg">
        {manufacturers_small[shipIdx.Manufacturer]}
      </div>
      <img
        src={dictShipImgIso[shipIdx.Name]}
        alt="ship_image"
        className="ship-img-iso"
      />
      <div className="manufacturer">
        <div>{manufacturers_small[shipIdx.Manufacturer]}</div>
        <h2>
          <I18n text={shipIdx.Manufacturer} />
        </h2>
      </div>
      <div className="ship-name-wrapper">
        <h1 className="ship-name">
          {lang == "zh"
            ? dictShipZhName[shipIdx.Name]?.split(" ").slice(1).join(" ") ||
              shipIdx.NameShort
            : shipIdx.NameShort}
        </h1>
      </div>
    </div>
  );
};

export default SimpleInfo;
