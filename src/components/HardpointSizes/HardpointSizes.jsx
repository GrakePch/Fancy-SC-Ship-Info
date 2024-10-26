/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import icons from "../../assets/icons";

function HardpointSizes({ components }) {
  const [numsOfSizes, setNumsOfSizes] = useState([]);

  useEffect(() => {
    if (components) {
      let temp = [];
      for (let i = 0; i <= 12; ++i) {
        temp.push(0);
      }
      for (let i = 0; i < components.length; ++i) {
        temp[components[i].Size || components[i].MaxSize] +=
          Number(components[i]._Quantity) || 1;
      }
      setNumsOfSizes(temp);
    }
  }, [components]);
  return (
    <div>
      {numsOfSizes.map((i, size) =>
        i <= 0 ? null : i == 1 ? (
          <span
            key={size}
            style={{
              display: "inline-block",
              width: "1.5rem",
              height: "1.5rem",
              verticalAlign: "top",
            }}
          >
            {icons["s" + size] || size}
          </span>
        ) : (
          <span key={size}>
            <span
              style={{
                display: "inline-block",
                width: "1.5rem",
                height: "1.5rem",
                verticalAlign: "top",
              }}
            >
              {icons["s" + size] || size}
            </span>
            ×{i}
          </span>
        ),
      )}
      {numsOfSizes.reduce((a, b) => a + b, 0) == 0 && (
        <span
          style={{
            // marginRight: ".25rem",
            opacity: 0.5,
          }}
        >
          {"∅"}
        </span>
      )}
    </div>
  );
}

export default HardpointSizes;
