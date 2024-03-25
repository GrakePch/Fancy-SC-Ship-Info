/* eslint-disable react/prop-types */
import "./CardList.css";
import icons from "../../assets/icons";

function CardList({ infoObj }) {
  return (
    infoObj && (
      <div className="card-list font-slim">
        {Object.keys(infoObj).map((item) => (
          <div className="card-list-item" key={item}>
            <div>{icons[item] && icons[item]}</div>
            <p>{item}</p>
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
