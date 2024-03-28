/* eslint-disable react/prop-types */
import "./CardList.css";
import icons from "../../assets/icons";
import I18n from "../I18n";

function CardList({ title, infoObj, iconOverrides }) {
  return (
    infoObj && (
      <div className="card-list">
        <h2>
          <I18n text={title} />
        </h2>
        {Object.keys(infoObj).map((item, idx) => (
          <div className="card-list-item font-slim" key={item}>
            {iconOverrides && iconOverrides[idx] ? (
              <div>
                {icons[iconOverrides[idx]] && icons[iconOverrides[idx]]}
              </div>
            ) : (
              <div>{icons[item] && icons[item]}</div>
            )}

            <p>
              <I18n text={item} />
            </p>
            <p>
              {infoObj[item] instanceof Array
                ? `${infoObj[item][0]} ${infoObj[item][1]}`
                : infoObj[item]}
            </p>
          </div>
        ))}
      </div>
    )
  );
}

export default CardList;
