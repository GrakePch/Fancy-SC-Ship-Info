import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";

/* eslint-disable react/prop-types */
const SimpleWeapon = ({ item, num = 1, gimballed = false }) => {
  const isGimbalMount = item.Name.includes("Gimbal");
  if (isGimbalMount) {
    if (item.SubWeapons)
      return <SimpleWeapon item={item.SubWeapons.at(0)} num={1} gimballed />;
    else if (item.MiningLaser)
      return <SimpleWeapon item={item.MiningLaser.at(0)} num={1} gimballed />;
    else if (item.SalvageHead)
      return <SimpleWeapon item={item.SalvageHead.at(0)} num={1} gimballed />;
    else if (item.Utility)
      return <SimpleWeapon item={item.Utility.at(0)} num={1} gimballed />;
  }
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
      ) : item.Bombs && item.Bombs.length > 0 ? (
        <div className="SimpleWeapon-subWeapon-container">
          <SimpleWeapon item={item.Bombs[0]} num={item.Bombs.length} />
        </div>
      ) : (
        <div className="SimpleWeapon-subWeapon-container">
          {item.Missiles
            ? item.Missiles.map((item, idx) => (
                <SimpleWeapon item={item} key={item.Name + idx} />
              ))
            : item.Bombs
              ? item.Bombs.map((item, idx) => (
                  <SimpleWeapon item={item} key={item.Name + idx} />
                ))
              : item.MiningLaser
                ? item.MiningLaser.map((item, idx) => (
                    <SimpleWeapon item={item} key={item.Name + idx} />
                  ))
                : item.SalvageHead
                  ? item.SalvageHead.map((item, idx) => (
                      <SimpleWeapon item={item} key={item.Name + idx} />
                    ))
                  : item.Utility
                    ? item.Utility.map((item, idx) => (
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
