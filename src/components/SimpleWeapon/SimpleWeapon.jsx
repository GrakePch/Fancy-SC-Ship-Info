import icons from "../../assets/icons";

/* eslint-disable react/prop-types */
const SimpleWeapon = ({ item, num = 1, gimballed = false }) => {
  const isGimbalMount = item.Name.includes("Gimbal");
  if (isGimbalMount)
    return <SimpleWeapon item={item.SubWeapons?.at(0)} num={1} gimballed />;
  return (
    <div>
      <div
        className="SimpleWeapon-container"
        style={{
          opacity: item.Missiles || item.SubWeapons ? 0.5 : 1,
        }}
      >
        <p>{item.Name}</p>
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
          {num && "×" + num}
        </span>
      </div>
      {item.Missiles && item.Missiles.length > 0 ? (
        <div className="SimpleWeapon-subWeapon-container">
          <SimpleWeapon item={item.Missiles[0]} num={item.Missiles.length} />
        </div>
      ) : (
        <div className="SimpleWeapon-subWeapon-container">
          {item.Missiles
            ? item.Missiles?.map((item, idx) => (
                <SimpleWeapon item={item} key={item.Name + idx} />
              ))
            : item.SubWeapons?.map((subItem, idx) => (
                <SimpleWeapon item={subItem} key={subItem.Name + idx} />
              ))}
        </div>
      )}
    </div>
  );
};

export default SimpleWeapon;
