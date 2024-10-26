import icons from "../../assets/icons";

/* eslint-disable react/prop-types */
const SimpleFuelTank = ({ fuelH, fuelQT }) => {
  return (
    <div className="SimpleComponent">
      <div
        className="SimpleComponent-contents"
        style={{
          justifyContent: "center",
          backgroundColor: "transparent",
          gap: ".5rem",
        }}
      >
        <div className="SimpleFuelTank-type-capacity">
          {icons["FuelCapacity"]}
          <p>氢燃料容量</p>
          <p>
            {fuelH !== null ? (fuelH > 0 ? `${fuelH / 10000} 万` : 0) : "?"}
          </p>
        </div>
        <div className="SimpleFuelTank-type-capacity">
          {icons["QuantumFuelCapacity"]}
          <p>量子燃料容量</p>
          <p>
            {fuelQT !== null ? (fuelQT > 0 ? `${fuelQT / 10000} 万` : 0) : "?"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleFuelTank;
