import { useEffect, useState } from "react";

import { mdiCircleSmall, mdiLock } from "@mdi/js";
import Icon from "@mdi/react";

import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";
import I18nPure from "../I18nPure";

const dmgTypeToColor = {
  Physical: "#c1a03e",
  Energy: "#a83434",
  Distortion: "#439193",
};

const signalToColor = {
  Electromagnetic: "#435f93",
  Infrared: "#a83434",
  CrossSection: "#c1a03e",
};

/* eslint-disable react/prop-types */
const SimpleWeapon = ({ item, num = 1, gimballed = false }) => {
  if (item.Name == null) return;

  let bulletDmgType =
    item.AlphaDmg && Object.keys(item.AlphaDmg)
      ? Object.keys(item.AlphaDmg)?.length == 1
        ? Object.keys(item.AlphaDmg)?.at(0)
        : "Mixed"
      : "";

  let trackingSignal = item.TrackingSignal;

  const isGimbalMount = item.Name.includes("Gimbal");
  if (isGimbalMount) {
    if (item.SubWeapons)
      return <SimpleWeapon item={item.SubWeapons.at(0)} num={num} gimballed />;
    else if (item.MiningLaser)
      return <SimpleWeapon item={item.MiningLaser.at(0)} num={num} gimballed />;
    else if (item.SalvageHead)
      return <SimpleWeapon item={item.SalvageHead.at(0)} num={num} gimballed />;
    else if (item.Utility)
      return <SimpleWeapon item={item.Utility.at(0)} num={num} gimballed />;
  }

  const [rootCounting, setRootCounting] = useState({});
  useEffect(() => {
    const _rootCounting = {};
    const subList =
      item.SubWeapons ||
      item.Missiles ||
      item.Bombs ||
      item.MiningLaser ||
      item.SalvageHead ||
      item.Utility;

    subList?.forEach((item) => {
      if (item == null) return;
      if (!_rootCounting[JSON.stringify(item)]) {
        _rootCounting[JSON.stringify(item)] = 1;
      } else {
        _rootCounting[JSON.stringify(item)]++;
      }
    });

    setRootCounting(_rootCounting);
    // console.log(_rootCounting);
  }, [item]);

  return (
    <div>
      <div
        className="SimpleWeapon-container"
        style={{
          opacity:
            item.Missiles ||
            item.Bombs ||
            item.MiningLaser ||
            item.SalvageHead ||
            item.Utility ||
            item.SubWeapons
              ? 0.5
              : 1,
        }}
      >
        <p>
          {component_zh_name[item.Name] ||
            component_zh_name[item.Name?.toLowerCase()] ||
            component_zh_name[
              item.Name?.slice(0, item.Name?.lastIndexOf(" "))
            ] ||
            component_zh_name[
              item.Name?.slice(0, item.Name?.lastIndexOf(" ")).toLowerCase()
            ] ||
            component_zh_name[
              item.Name?.split(" ")
                ?.slice(0, item.Name?.split(" ").length - 2)
                .join(" ")
            ] ||
            component_zh_name[
              item.Name?.split(" ")
                ?.slice(0, item.Name?.split(" ").length - 2)
                .join(" ")
                .toLowerCase()
            ] ||
            item.Name}
        </p>
        <div className="SimpleWeapon-tail-icons">
          {trackingSignal && (
            <p style={{ color: signalToColor[trackingSignal] }}>
              {I18nPure("Short-" + trackingSignal, "zh")}
            </p>
          )}
          {bulletDmgType && (
            <p style={{ color: dmgTypeToColor[bulletDmgType] }}>
              {I18nPure("Short-" + bulletDmgType, "zh")}
            </p>
          )}
          {gimballed ? (
            icons.gimballed
          ) : (
            <Icon path={mdiCircleSmall} color="#80808080" />
          )}
          {item.Uneditable ? (
            <Icon path={mdiLock} />
          ) : (
            <Icon path={mdiCircleSmall} color="#80808080" />
          )}
          <span className="font-slim" style={{ fontWeight: 600 }}>
            <span
              style={{
                display: "inline-block",
                width: "1.5rem",
                height: "1.5rem",
                verticalAlign: "top",
              }}
            >
              {icons["s" + item.Size] || item.Size}
            </span>
            {(num < 10 ? "\u2007" : "") + "×" + num}
          </span>
        </div>
      </div>
      <div className="SimpleWeapon-subWeapon-container">
        {Object.keys(rootCounting).map((subItem) => {
          let subItemObj = JSON.parse(subItem);
          return (
            <SimpleWeapon
              item={subItemObj}
              key={subItemObj.Name}
              num={rootCounting[subItem]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SimpleWeapon;
