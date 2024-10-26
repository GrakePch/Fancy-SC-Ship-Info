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
  Physical: icons.BulletNewPhy,
  Energy: icons.BulletNewEne,
  Distortion: icons.BulletNewDis,
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

const getZhName = (name) => {
  let res =
    component_zh_name[name] ||
    component_zh_name[name?.toLowerCase()] ||
    component_zh_name[name?.slice(0, name?.lastIndexOf(" "))] ||
    component_zh_name[name?.slice(0, name?.lastIndexOf(" ")).toLowerCase()] ||
    component_zh_name[
      name
        ?.split(" ")
        ?.slice(0, name?.split(" ").length - 2)
        .join(" ")
    ] ||
    component_zh_name[
      name
        ?.split(" ")
        ?.slice(0, name?.split(" ").length - 2)
        .join(" ")
        .toLowerCase()
    ];
  if (!res) return false;
  let idx = res.lastIndexOf("(");
  if (idx < 0) return res;
  let pure = res.slice(0, idx);
  return pure;
};

/* eslint-disable react/prop-types */
const SimpleWeapon = ({ item, num = 1, gimballed = false }) => {
  // if (item.Name == null) return;
  const lang = localStorage.getItem("lang");

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
        <div className="SimpleWeapon-name">
          <p>
            {baseLoadout.Name
              ? getZhName(baseLoadout.Name) || baseLoadout.Name
              : "未知"}
          </p>
          <p>{baseLoadout.Name || "Unknown"}</p>
        </div>
        <div className="SimpleWeapon-tail-icons font-slim">
          {trackingSignal && (
            <p className="SimpleWeapon-type-tag"
              style={{
                color: signalToColor[trackingSignal],
                fill: signalToColor[trackingSignal],
                borderColor: signalToColor[trackingSignal] + "30",
              }}
            >
              {signalToIcon[trackingSignal]}
              {I18nPure("Short-" + trackingSignal, lang)}
            </p>
          )}
          {bulletDmgType && (
            <p className="SimpleWeapon-type-tag"
              style={{
                color: dmgTypeToColor[bulletDmgType],
                fill: dmgTypeToColor[bulletDmgType],
                borderColor: dmgTypeToColor[bulletDmgType] + "30",
              }}
            >
              {dmgTypeToIcon[bulletDmgType]}
              {I18nPure("Short-" + bulletDmgType, lang)}
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
