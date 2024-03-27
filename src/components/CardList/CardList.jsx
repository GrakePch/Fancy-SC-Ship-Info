/* eslint-disable react/prop-types */
import "./CardList.css";
import icons from "../../assets/icons";
import I18n from "../I18n";

function CardList({ infoObj }) {
  return (
    infoObj && (
      <div className="card-list font-slim">
        {Object.keys(infoObj).map((item) => (
          <div className="card-list-item" key={item}>
            <div>{icons[item] && icons[item]}</div>
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
