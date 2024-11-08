import icons from "../../../assets/icons";
import I18n from "../../../components/I18n";

const PortEditable = ({ data, name, icon }) => {
  return data ? (
    <div className="PortEditable-container">
      <div className="port">
        {data.InstalledItem ? (
          <div className="item">
            <p className="item-name"><I18n text={"item_Name" + data.InstalledItem.ClassName} hanhua/></p>
          </div>
        ) : (
          <p>EMPTY</p>
        )}
      </div>
      <div className="title">
        {icon}
        <p><I18n text={name}/></p>
        {icons["s" + data.MaxSize]}
      </div>
    </div>
  ) : (
    <div className="PortEditable-container invalid">
      <div className="port">
        <p>N/A</p>
      </div>
      <div className="title">
        <I18n text={name} />
      </div>
    </div>
  );
};

export default PortEditable;
