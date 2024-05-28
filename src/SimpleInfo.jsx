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
      </div><div className="career-and-role font-slim">
              <h4>
                <I18n text={shipIdx.Career} />
              </h4>
              <h4>
                <I18n text={shipIdx.Role} />
              </h4>
              <h4
                style={{
                  color: `hsl(${
                    statusToHue[shipIdx.ProgressTracker.Status]
                  }, 100%, 50%)`,
                  backgroundColor: `hsl(${
                    statusToHue[shipIdx.ProgressTracker.Status]
                  }, 100%, 9%)`,
                }}
              >
                {shipIdx.ProgressTracker.Status}{" "}
                {shipIdx.ProgressTracker.Patch && (
                  <span>{shipIdx.ProgressTracker.Patch}</span>
                )}
              </h4>
            </div>
            <h3
              className="prices font-slim"
              style={{ opacity: shipIdx.PU.Buy ? 1 : 0.5 }}
            >
              {shipIdx.PU.Buy
                ? shipIdx.PU.Buy + " aUEC"
                : "Not Purchasable with aUEC"}
            </h3>
            <h3 className="prices font-slim">
              {shipIdx.Store.Buy} USD
              {shipIdx.Store.isLimitedSale && " LIMITED SALE"}
            </h3>
            <h3 className="prices font-slim">
              尺寸 &nbsp;&nbsp;&nbsp; <span className="sml">长</span> {shipObj.Dimensions.Length} × <span className="sml">宽</span> {shipObj.Dimensions.Width} × <span className="sml">高</span> {shipObj.Dimensions.Height} m
            </h3>
            <h3 className="prices font-slim">
              质量 &nbsp;&nbsp;&nbsp; {(shipObj.Mass / 1000).toFixed(3)} t
            </h3>
    </div>
  );
};

export default SimpleInfo;
