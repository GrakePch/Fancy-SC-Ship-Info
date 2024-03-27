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
        temp[components[i].Size] += 1;
      }
      console.log(temp);
      setNumsOfSizes(temp);
    }
  }, [components]);
  return (
    <>
      {numsOfSizes.map(
        (i, size) =>
          i > 0 && (
            <>
              {i}×
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
            </>
          )
      )}
    </>
  );
}

export default HardpointSizes;
