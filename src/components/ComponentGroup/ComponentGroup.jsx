/* eslint-disable react/prop-types */
import classToColor from "../../assets/classToColor";
import component_zh_name from "../../assets/component_zh_name.json";
import icons from "../../assets/icons";
import sizeToColor from "../../assets/sizeToColor";
import I18n from "../I18n";
import I18nPure from "../I18nPure";
import "./ComponentGroup.css";

const Component = ({ type, obj }) => {
  let maxSize = obj.Size;
  let size = obj.Size;
  let name = obj.Name;
  let itemClass = obj.Class;
  let grade = obj.Grade;
  if (obj.BaseLoadout) {
    let ld = obj.BaseLoadout;
    maxSize = obj.MaxSize;
    size = obj.MaxSize;
    name = ld.Name;
    itemClass = ld.Class;
    grade = ld.Grade;
  }

  return (
    <div
      className="panel-components-group-item"
      style={{
        border: `2px solid ${sizeToColor[maxSize]}`,
        boxShadow: `var(--acrylic-edge), var(--shadow-2), 0 0 2rem ${sizeToColor[maxSize]}40`,
      }}
    >
      <div
        className="icon-wrapper"
        style={{ backgroundColor: sizeToColor[size] }}
      >
        {icons["s" + size]}
      </div>
      <div className="panel-components-group-item-name-size">
        <p>
          {name
            ? component_zh_name[name] ||
              component_zh_name[name?.toLowerCase()] ||
              name ||
              "未知"
            : "无"}
        </p>
      </div>
      <p
        className="panel-components-group-item-grade"
        style={{
          color: classToColor[itemClass],
          backgroundColor: classToColor[itemClass] + "20",
        }}
      >
        {(itemClass || grade) &&
          I18nPure(classToColor[itemClass] ? itemClass.trim() : "?", "en") +
            " - " +
            (grade ? String.fromCharCode(64 + grade) : "?")}
      </p>
    </div>
  );
};

const ComponentGroup = ({ type, title, icon, objList }) => {
  return (
    <div className="panel-components-group">
      <div className="panel-components-group-icon-title">
        {icons[icon]}
        <I18n text={title} />
      </div>
      <div className="panel-components-group-list">
        {objList.map((obj, idx) => (
          <Component key={obj.PortName + idx} type={type} obj={obj} />
        ))}
      </div>
    </div>
  );
};

export default ComponentGroup;
