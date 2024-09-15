import { useEffect, useState } from "react";

import { mdiCircleSmall, mdiLock } from "@mdi/js";
import Icon from "@mdi/react";

import component_zh_name from "../../assets/component_zh_name.json";
import dmgTypeToColor from "../../assets/damageTypeToColor";
import icons from "../../assets/icons";
import signalToColor from "../../assets/signalTypeToColor";
import ship_items from "../../data/ship-items-min.json";
import I18nPure from "../I18nPure";

const dmgTypeToIcon = {
  Physical: icons.BulletPhy,
  Energy: icons.BulletEne,
  Distortion: icons.BulletDis,
};

const signalToIcon = {
  Electromagnetic: icons.IdleEMEmission,
  Infrared: icons.StartIREmission,
  CrossSection: icons.CSEmission,
};

const getItemInfo = (name) => {
  for (let i = 0; i < ship_items.length; ++i) {
    if (ship_items[i].stdItem.Name == name) return ship_items[i];
  }
  return null;
};

/* eslint-disable react/prop-types */
const SimpleWeapon = ({ item, num = 1, gimballed = false }) => {
  // if (item.Name == null) return;

  let baseLoadout = item.BaseLoadout;

  if (baseLoadout == null) return;

  let itemInfo = getItemInfo(baseLoadout?.Name);

  let bulletDmgRaw = itemInfo?.stdItem?.Weapon?.Ammunition?.ImpactDamage;

  let bulletDmgTypesRaw = bulletDmgRaw
    ? bulletDmgRaw && Object.keys(bulletDmgRaw)
    : [];

  let bulletDmgType =
    bulletDmgTypesRaw.length > 0
      ? bulletDmgTypesRaw.length == 1
        ? bulletDmgTypesRaw.at(0)
        : "Mixed"
      : "";

  let trackingSignal = itemInfo?.stdItem?.Missile?.TrackingSignal;

  const isGimbalMount = baseLoadout.Name?.includes("Gimbal");
  if (isGimbalMount) {
    if (item.Ports)
      return <SimpleWeapon item={item.Ports.at(0)} num={num} gimballed />;
  }

  const [rootCounting, setRootCounting] = useState({});
  useEffect(() => {
    const _rootCounting = {};
    const subList = item.Ports;

    subList?.forEach((item) => {
      if (item == null) return;

      /* PortName may differ. e.g. wing_left & wing_right */
      let itemNoPortName = JSON.parse(JSON.stringify(item));
      delete itemNoPortName.PortName;

      if (!_rootCounting[JSON.stringify(itemNoPortName)]) {
        _rootCounting[JSON.stringify(itemNoPortName)] =
          Number(itemNoPortName._Quantity) || 1;
      } else {
        _rootCounting[JSON.stringify(itemNoPortName)] +=
          Number(itemNoPortName._Quantity) || 1;
      }
    });

    setRootCounting(_rootCounting);
    // console.log(_rootCounting);
  }, [item]);

  return (
    <div>
      <div className={`SimpleWeapon-container ${item.Ports && "dimmer"}`}>
        <p>
          {component_zh_name[baseLoadout.Name] ||
            component_zh_name[baseLoadout.Name?.toLowerCase()] ||
            component_zh_name[
              baseLoadout?.Name?.slice(0, baseLoadout.Name?.lastIndexOf(" "))
            ] ||
            component_zh_name[
              baseLoadout.Name?.slice(
                0,
                baseLoadout.Name?.lastIndexOf(" "),
              ).toLowerCase()
            ] ||
            component_zh_name[
              baseLoadout.Name?.split(" ")
                ?.slice(0, baseLoadout?.Name?.split(" ").length - 2)
                .join(" ")
            ] ||
            component_zh_name[
              baseLoadout.Name?.split(" ")
                ?.slice(0, baseLoadout?.Name?.split(" ").length - 2)
                .join(" ")
                .toLowerCase()
            ] ||
            baseLoadout.Name ||
            "未知"}
        </p>
        <div className="SimpleWeapon-tail-icons">
          {trackingSignal && (
            <>
              <p
                style={{
                  color: signalToColor[trackingSignal],
                  fill: signalToColor[trackingSignal],
                }}
              >
                {signalToIcon[trackingSignal]}
                {I18nPure("Short-" + trackingSignal, "zh")}
              </p>
            </>
          )}
          {bulletDmgType && (
            <p
              style={{
                color: dmgTypeToColor[bulletDmgType],
                fill: dmgTypeToColor[bulletDmgType],
              }}
            >
              {dmgTypeToIcon[bulletDmgType]}
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
              {icons["s" + item.MaxSize]}
            </span>
            {(num < 10 ? "\u2007" : "") + "×" + num}
          </span>
        </div>
      </div>
      <div className="SimpleWeapon-subWeapon-container">
        {Object.keys(rootCounting).map((subItem, idx) => {
          let subItemObj = JSON.parse(subItem);
          return (
            <SimpleWeapon
              item={subItemObj}
              key={subItemObj.BaseLoadout.Name + idx}
              num={rootCounting[subItem]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SimpleWeapon;
