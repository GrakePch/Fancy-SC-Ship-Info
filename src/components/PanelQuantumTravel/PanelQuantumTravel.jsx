import formatRSI from "../../utils/formatRSI";
import ComponentGroup from "../ComponentGroup/ComponentGroup";
import ListQuantumDrives from "../ListQuantumDrives/ListQuantumDrives";

const PanelQuantumTravel = ({ shipHardpts, shipDataRSI }) => {
  console.log(shipDataRSI);
  const listQTDrives =
    shipHardpts?.Hardpoints.Components.Propulsion.QuantumDrives
      .InstalledItems ||
    formatRSI(shipDataRSI.compiled.RSIPropulsion.quantum_drives);

  const QTFuel =
    shipHardpts?.Hardpoints.Components.Propulsion.QuantumFuelTanks
      .InstalledItems[0].Capacity;

  const hasQuantumDrive = listQTDrives.length > 0;

  const QDminSize = listQTDrives[0].MinSize || listQTDrives[0].Size;
  const QDmaxSize = listQTDrives[0].MaxSize || listQTDrives[0].Size;

  return (
    <>
      <div className="panel-components">
        <ComponentGroup
          type="QuantumDrive.UNDEFINED"
          title="Quantum Drives"
          icon="QuantumDrives"
          objList={listQTDrives}
        />
      </div>
      {hasQuantumDrive && (
        <ListQuantumDrives
          minSize={QDminSize}
          maxSize={QDmaxSize}
          defaultQDClassName={listQTDrives[0].Loadout}
          QTFuel={QTFuel}
        />
      )}
    </>
  );
};

export default PanelQuantumTravel;
