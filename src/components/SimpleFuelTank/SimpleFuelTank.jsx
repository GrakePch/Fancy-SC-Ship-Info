import icons from "../../assets/icons";

/* eslint-disable react/prop-types */
const SimpleFuelTank = ({ fuelH, fuelQT }) => {
  return (
    <div className="SimpleComponent">
      <div className="icon">{icons["FuelCapacity"]}</div>
      <div className="SimpleComponent-contents">
        <div className="SimpleFuelTank-type-capacity">
          <p>氢燃料容量</p>
          <p>{fuelH}</p>
        </div>
        <div className="SimpleFuelTank-type-capacity">
          <p>量子燃料容量</p>
          <p>{fuelQT}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleFuelTank;
