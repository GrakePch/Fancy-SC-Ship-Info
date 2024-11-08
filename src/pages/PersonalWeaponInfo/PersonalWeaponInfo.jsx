import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { mdiCube, mdiDatabaseOutline, mdiFlare, mdiMagazineRifle, mdiTarget, mdiWeight } from "@mdi/js";
import Icon from "@mdi/react";

import dmgTypeToColor from "../../assets/damageTypeToColor";
import I18n from "../../components/I18n";
import listPersonalWeapon from "../../data/fps-weapons.json";
import "./PersonalWeaponInfo.css";
import PortEditable from "./PortEditable/PortEditable";
import { CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip, ScatterChart, Scatter, Dot } from "recharts";
import icons from "../../assets/icons";
import personal_weapons_img from "../../assets/personal_weapons_side/personal_weapons_img";

const targetArmors = [
  "naked",
  "default",
  "undersuit",
  "fa",
  "light",
  "medium",
  "heavy",
];
const targetArmorsMod = {
  naked: [4, 2, 1.5, 1.5],
  default: [1, 1, 1, 1],
  undersuit: [0.9, 0.9, 0.9, 0.9],
  fa: [0.9, 0.9, 0.9, 0.9],
  light: [0.8, 0.8, 0.8, 0.8],
  medium: [0.7, 0.7, 0.7, 0.7],
  heavy: [0.6, 0.6, 0.6, 0.6],
};
const bodyPartMod = [1.5, 1, 0.8, 0.8];

const iconNameFiringMode = {
  Rapid: "FPSFiringModeAuto",
  Single: "FPSFiringModeSemi",
  Burst: "FPSFiringModeBurst",
  Charge: "FPSFiringModeCharge",
  Shotgun: "FPSFiringModeAuto",
}

const PersonalWeaponInfo = () => {
  const param = useParams();
  const [nameLoc, setNameLoc] = useState("");
  const [manuCode, setManuCode] = useState("");
  const [dataPW, setDataPW] = useState({});
  const [firingModes, setFiringModes] = useState([]);
  const [firingMode, setFiringMode] = useState(0);
  const [dictPorts, setDictPorts] = useState({});
  const [targetArmor, setTargetArmor] = useState(targetArmors[1]);
  const [dmgForParts, setDmgForParts] = useState([0, 0, 0, 0]);
  const [stkForParts, setStkForParts] = useState([0, 0, 0, 0]);
  const [ttkForParts, setTtkForParts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let temp = {};
    for (const item of listPersonalWeapon)
      if (item.className === param.className) {
        temp = item.stdItem;
        setNameLoc(item.name?.slice(1));
        if (item.className){
          let first_ = item.className.indexOf("_");
          let manuCode = item.className.slice(0, first_).toUpperCase();
          setManuCode(manuCode);
        }
        break;
      }

    setDataPW(temp);
    console.log(temp);

    setFiringModes(temp.Weapon?.Firing);

    let tempDictPorts = {};
    for (const port of temp.Ports) tempDictPorts[port.PortName] = port;

    setDictPorts(tempDictPorts);
  }, []);

  useEffect(() => {
    if (!firingModes[firingMode]) return;
    let netDMG = firingModes[firingMode]?.DamagePerShot
      ? (firingModes[firingMode].DamagePerShot.Physical || 0) + (firingModes[firingMode].DamagePerShot.Energy || 0)
      : 0;
    let newDMG = [0, 0, 0, 0];
    let newSTK = [0, 0, 0, 0];
    let newTTK = [0, 0, 0, 0];

    let interval = 60 / firingModes[firingMode]?.RoundsPerMinute;

    for (let i = 0; i < 4; ++i) {
      newDMG[i] = netDMG * bodyPartMod[i] * targetArmorsMod[targetArmor][i];
      newSTK[i] = Math.ceil(100 / newDMG[i]);
      newTTK[i] = (newSTK[i] - 1) * interval;

      newDMG[i] = Math.round(newDMG[i] * 10) / 10;
      newSTK[i] = Math.round(newSTK[i]);
      newTTK[i] = (Math.round(newTTK[i] * 100) / 100).toFixed(2);
    }

    setDmgForParts(newDMG);
    setStkForParts(newSTK);
    setTtkForParts(newTTK);
  }, [firingModes, firingMode, targetArmor]);

  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    if (!dataPW.Weapon?.Ammunition) return;
    const data = {}
    for (const t of Object.keys(dataPW.Weapon.Ammunition.ImpactDamage)){
      const maxDmg = dataPW.Weapon.Ammunition.ImpactDamage[t];
      const minDmg = dataPW.Weapon.Ammunition.DamageDrop.MinDamage[t];

      const startDrop = dataPW.Weapon.Ammunition.DamageDrop.MinDistance[t];
      const dropPerMeter = dataPW.Weapon.Ammunition.DamageDrop.DropPerMeter[t];

      data[t] = [];
      let dmg = maxDmg;
      for (let x = 0; x <= 500; ++x) {
        let point = {x: x};
        if (x > startDrop && dmg > minDmg) {
          dmg -= dropPerMeter;
        }
          
        point.y = Math.round(dmg * 100) / 100;
        data[t].push(point);
      }
    ;}
    setLineData(data);
  },[dataPW]);

  return (
    <div className="Personal-Weapon-Info-container">
      <div className="spotlight">
          <h2><I18n text={"manufacturer_Name" + manuCode} hanhua fail={manuCode}/></h2>
          <h1><I18n text={nameLoc} hanhua /></h1>
          <h3>{dataPW.Name}</h3>
        <div className="main-card">
          <div>
            <div
              className="main-image"
              style={{ backgroundImage: `url(${personal_weapons_img[dataPW.ClassName]})` }}
            ></div>
            <div className="data-basic">
              <div>
                <Icon path={mdiCube} size={1} />
                <p>
                  <I18n text="Volume" />
                </p>
                <p>{dataPW.Volume} μSCU</p>
              </div>
              <div>
                <Icon path={mdiWeight} size={1} />
                <p>
                  <I18n text="Mass" />
                </p>
                <p>{dataPW.Mass} Kg</p>
              </div>
            </div>
          </div>
          {firingModes && firingModes[firingMode] &&
          <div className="fire-rate-and-data">
            <div className="important-data-grid">
              <div className="important-data">
                <p>TTK (s)</p>
                <p>{ttkForParts[1]}</p>
              </div>
              <div className="important-data">
                <p>DPS</p>
                <p>{dmgForParts[1]}</p>
              </div>
              <div className="important-data">
                <p><I18n text="FireRate" /> (RPM)</p>
                <p>{firingModes[firingMode].RoundsPerMinute}</p>
              </div>
              <div className="important-data">
                <p><I18n text="MagSize" /></p>
                <p>{dictPorts.magazine_attach.InstalledItem.Magazine.Capacity}</p>
              </div>
            </div>
            <div className="fire-rate-tabs">
              {firingModes.map((mode, idx) => (
                <button
                  key={mode.FireType + idx}
                  className={idx === firingMode ? "active" : ""}
                  onClick={() => setFiringMode(idx)}
                >
                  {icons[iconNameFiringMode[mode.Name]]}
                  {mode.Name === "Burst" && mode.ShotPerAction 
                  ? <I18n text={"FiringMode-Burst-" + mode.ShotPerAction} />
                  : <I18n text={"FiringMode-" + mode.Name} />}
                </button>
              ))}
            </div>
          </div>
        }
        </div>
      </div>
      
      <div className="attachment-container">
        <PortEditable data={dictPorts.magazine_attach} name={"magazine_attach"} 
          icon={<Icon path={mdiMagazineRifle} size={1} horizontal/>} />
        <PortEditable data={dictPorts.optics_attach} name={"optics_attach"} 
          icon={<Icon path={mdiTarget} size={1} />} />
        <PortEditable data={dictPorts.barrel_attach} name={"barrel_attach"}  
          icon={<Icon path={mdiDatabaseOutline} size={1} rotate={90} />} />
        <PortEditable data={dictPorts.underbarrel_attach} name={"underbarrel_attach"}
          icon={<Icon path={mdiFlare} size={1} />} />
      </div>
      <div className="data-detail">
        <div className="charts">
              <div className="damage-drop-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={lineData}>
                    <CartesianGrid />
                    <XAxis dataKey="x" type="number" domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]}/>
                    <YAxis dataKey="y" type="number" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    {dataPW.Weapon?.Ammunition.ImpactDamage && Object.keys(dataPW.Weapon.Ammunition.ImpactDamage).map((dmgType) => 
                      <Scatter key={dmgType} data={lineData[dmgType]} name={<I18n text={dmgType} />} fill={dmgTypeToColor[dmgType]} shape={<Dot r={2} />} isAnimationActive={false} />)
                    }
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="human-status">
                  <div className="humans">
                    <div>
                      <p><I18n text="DamagePerShot" /></p>
                      <div className="human">
                        <div className="head" style={{backgroundColor: stkForParts[0] < 10 && `hsla(${(stkForParts[0] - 1) / 8 * 240},50%,50%,.3)`}}>{dmgForParts[0]}</div>
                        <div className="torso" style={{backgroundColor: stkForParts[1] < 10 && `hsla(${(stkForParts[1] - 1) / 8 * 240},50%,50%,.3)`}}>{dmgForParts[1]}</div>
                        <div className="arm" style={{backgroundColor: stkForParts[2] < 10 && `hsla(${(stkForParts[2] - 1) / 8 * 240},50%,50%,.3)`}}>{dmgForParts[2]}</div>
                        <div className="arm2" style={{backgroundColor: stkForParts[2] < 10 && `hsla(${(stkForParts[2] - 1) / 8 * 240},50%,50%,.3)`}}></div>
                        <div className="leg" style={{backgroundColor: stkForParts[3] < 10 && `hsla(${(stkForParts[3] - 1) / 8 * 240},50%,50%,.3)`}}>{dmgForParts[3]}</div>
                      </div>
                    </div>
                    <div>
                      <p><I18n text="ShotsToKill" /></p>
                      <div className="human">
                        <div className="head" style={{backgroundColor: stkForParts[0] < 10 && `hsla(${(stkForParts[0] - 1) / 8 * 240},50%,50%,.3)`}}>{stkForParts[0]}</div>
                        <div className="torso" style={{backgroundColor: stkForParts[1] < 10 && `hsla(${(stkForParts[1] - 1) / 8 * 240},50%,50%,.3)`}}>{stkForParts[1]}</div>
                        <div className="arm" style={{backgroundColor: stkForParts[2] < 10 && `hsla(${(stkForParts[2] - 1) / 8 * 240},50%,50%,.3)`}}>{stkForParts[2]}</div>
                        <div className="arm2" style={{backgroundColor: stkForParts[2] < 10 && `hsla(${(stkForParts[2] - 1) / 8 * 240},50%,50%,.3)`}}></div>
                        <div className="leg" style={{backgroundColor: stkForParts[3] < 10 && `hsla(${(stkForParts[3] - 1) / 8 * 240},50%,50%,.3)`}}>{stkForParts[3]}</div>
                      </div>
                    </div>
                    <div>
                      <p><I18n text="TimeToKill" /></p>
                      <div className="human">
                        <div className="head" style={{backgroundColor: stkForParts[0] < 10 && `hsla(${(stkForParts[0] - 1) / 8 * 240},50%,50%,.3)`}}>{ttkForParts[0]}</div>
                        <div className="torso" style={{backgroundColor: stkForParts[1] < 10 && `hsla(${(stkForParts[1] - 1) / 8 * 240},50%,50%,.3)`}}>{ttkForParts[1]}</div>
                        <div className="arm" style={{backgroundColor: stkForParts[2] < 10 && `hsla(${(stkForParts[2] - 1) / 8 * 240},50%,50%,.3)`}}>{ttkForParts[2]}</div>
                        <div className="arm2" style={{backgroundColor: stkForParts[2] < 10 && `hsla(${(stkForParts[2] - 1) / 8 * 240},50%,50%,.3)`}}></div>
                        <div className="leg" style={{backgroundColor: stkForParts[3] < 10 && `hsla(${(stkForParts[3] - 1) / 8 * 240},50%,50%,.3)`}}>{ttkForParts[3]}</div>
                      </div>
                    </div>
                  </div>
                  <div className="armor-selectors">
                    {[0, 1, 2, 4, 5, 6].map((idx) => (
                      <button
                        key={targetArmors[idx]}
                        className={
                          targetArmor === targetArmors[idx] ? "active" : ""
                        }
                        onClick={() => setTargetArmor(targetArmors[idx])}
                      >
                        <I18n text={"Armor-" + targetArmors[idx]} />
                      </button>
                    ))}
                  </div>
              </div>
        </div>
        <div className="main-data">
          {firingModes && firingModes[firingMode] && (
            <>
              <div className="simple-data">
              <p><I18n text="DamagePerShot" /></p>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Physical
                      ? dmgTypeToColor.Physical
                      : "#808080",
                  }}
                >
                  <p><I18n text="Physical" /></p>
                  <p>{firingModes[firingMode].DamagePerShot.Physical || 0}</p>
                </div>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Energy
                      ? dmgTypeToColor.Energy
                      : "#808080",
                  }}
                >
                  <p><I18n text="Energy" /></p>
                  <p>{firingModes[firingMode].DamagePerShot.Energy || 0}</p>
                </div>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Distortion
                      ? dmgTypeToColor.Distortion
                      : "#808080",
                  }}
                >
                  <p><I18n text="Distortion" /></p>
                  <p>{firingModes[firingMode].DamagePerShot.Distortion || 0}</p>
                </div>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Stun
                      ? dmgTypeToColor.Stun
                      : "#808080",
                  }}
                >
                  <p><I18n text="Stun" /></p>
                  <p>{firingModes[firingMode].DamagePerShot.Stun || 0}</p>
                </div>
                <hr />
                <p>
                  <I18n text="DamagePerSecond" />
                </p>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Physical
                      ? dmgTypeToColor.Physical
                      : "#808080",
                  }}
                >
                  <p>
                    <I18n text="Physical" />
                  </p>
                  <p>
                    {firingModes[firingMode].DamagePerSecond.Physical || 0}
                  </p>
                </div>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Energy
                      ? dmgTypeToColor.Energy
                      : "#808080",
                  }}
                >
                  <p>
                    <I18n text="Energy" />
                  </p>
                  <p>
                    {firingModes[firingMode].DamagePerSecond.Energy || 0}
                  </p>
                </div>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Distortion
                      ? dmgTypeToColor.Distortion
                      : "#808080",
                  }}
                >
                  <p>
                    <I18n text="Distortion" />
                  </p>
                  <p>
                    {firingModes[firingMode].DamagePerSecond.Distortion ||
                      0}
                  </p>
                </div>
                <div
                  style={{
                    color: firingModes[firingMode].DamagePerShot.Stun
                      ? dmgTypeToColor.Stun
                      : "#808080",
                  }}
                >
                  <p>
                    <I18n text="Stun" />
                  </p>
                  <p>{firingModes[firingMode].DamagePerSecond.Stun || 0}</p>
                </div>
              </div>
              <div className="simple-data">
                <div>
                  <p><I18n text="FireRate" /></p>
                  <p>{firingModes[firingMode].RoundsPerMinute} RPM</p>
                </div>
                <div>
                  <p>
                    <I18n text="AmmoPerShot" />
                  </p>
                  <p>{firingModes[firingMode].AmmoPerShot}</p>
                </div>
                <div>
                  <p>
                    <I18n text="PelletsPerShot" />
                  </p>
                  <p>{firingModes[firingMode].PelletsPerShot}</p>
                </div>
                <div>
                  <p>
                    <I18n text="BulletVelocity" />
                  </p>
                  <p>{dataPW.Weapon?.Ammunition.Speed} m/s</p>
                </div>
                <div>
                  <p>
                    <I18n text="BulletRange" />
                  </p>
                  <p>{dataPW.Weapon?.Ammunition.Range} m</p>
                </div>
                <div>
                  <p>
                    <I18n text="BulletLifeTime" />
                  </p>
                  <p>{dataPW.Weapon?.Ammunition.LifeTime} s</p>
                </div>
                <div>
                  <p>
                    <I18n text="Spread-Min" />
                  </p>
                  <p>{firingModes[firingMode].Spread.Min}</p>
                </div>
                <div>
                  <p>
                    <I18n text="Spread-Max" />
                  </p>
                  <p>{firingModes[firingMode].Spread.Max}</p>
                </div>
                <div>
                  <p>
                    <I18n text="Spread-Aim-Min" />
                  </p>
                  <p>
                    {(firingModes[firingMode].Spread.Min *
                      (firingModes[firingMode].AimModifier?.SpreadModifier
                        .Min || 1)).toFixed(0)}
                  </p>
                </div>
                <div>
                  <p>
                    <I18n text="Spread-Aim-Max" />
                  </p>
                  <p>
                    {(firingModes[firingMode].Spread.Max *
                      (firingModes[firingMode].AimModifier?.SpreadModifier
                        .Max || 1)).toFixed(0)}
                  </p>
                </div>
                <div>
                  <p>
                    <I18n text="HeatPerShot" />
                  </p>
                  <p>{firingModes[firingMode].HeatPerShot}</p>
                </div>
                <div>
                  <p>
                    <I18n text="WearPerShot" />
                  </p>
                  <p>{firingModes[firingMode].WearPerShot}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalWeaponInfo;
