import formatRSI from "../../utils/formatRSI";
import ComponentGroup from "../ComponentGroup/ComponentGroup";
import "./PanelComponents.css";

const PanelComponents = ({ shipHardpts, shipDataRSI, hideQuantumDrives }) => {
  const listPowerPlants =
    shipHardpts?.Hardpoints.Components.Propulsion.PowerPlants.InstalledItems ||
    formatRSI(shipDataRSI.compiled.RSIModular.power_plants);
  const listShields =
    shipHardpts?.Hardpoints.Components.Systems.Shields.InstalledItems ||
    formatRSI(shipDataRSI.compiled.RSIModular.shield_generators);
  const listCoolers =
    shipHardpts?.Hardpoints.Components.Systems.Coolers.InstalledItems ||
    formatRSI(shipDataRSI.compiled.RSIModular.coolers);
  const listQTDrives =
    shipHardpts?.Hardpoints.Components.Propulsion.QuantumDrives
      .InstalledItems ||
    formatRSI(shipDataRSI.compiled.RSIPropulsion.quantum_drives);
  const listRadars =
    shipHardpts?.Hardpoints.Components.Avionics.Radars.InstalledItems ||
    formatRSI(shipDataRSI.compiled.RSIAvionic.radar);

  return (
    <div className="panel-components">
      <ComponentGroup
        type="PowerPlant.Power"
        title="PowerPlants"
        icon="PowerPlants"
        objList={listPowerPlants}
      />
      <ComponentGroup
        type="Shield.UNDEFINED"
        title="Shields"
        icon="Shields"
        objList={listShields}
      />
      <ComponentGroup
        type="Cooler.UNDEFINED"
        title="Coolers"
        icon="Coolers"
        objList={listCoolers}
      />
      {hideQuantumDrives || (
        <ComponentGroup
          type="QuantumDrive.UNDEFINED"
          title="Quantum Drives"
          icon="QuantumDrives"
          objList={listQTDrives}
        />
      )}
      <ComponentGroup
        type="Radar.MidRangeRadar"
        title="Radars"
        icon="Radars"
        objList={listRadars}
      />
    </div>
  );
};

export default PanelComponents;
