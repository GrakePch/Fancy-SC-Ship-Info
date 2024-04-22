/* The formula to calculate quantum travel time is derived from 
https://gitlab.com/Erecco/a-study-on-quantum-travel-time */

function qtTime(d, v_max, a1, a2) {
  let temp = (2 * a1 + a2) / (3 * (a1 + a2) ** 2);
  let d_a = 2 * v_max ** 2 * temp;
  if (2 * d_a <= d) {
    let t = (4 * v_max) / (a1 + a2) + d / v_max - 4 * v_max * temp;
    return t;
  } else {
    let temp2 =
      (3 * (a2 - a1) ** 2 * (a1 + a2) ** 2 * d) / (8 * a1 ** 3 * v_max ** 2);
    let t =
      ((4 * a1 * v_max) / (a2 ** 2 - a1 ** 2)) *
      (2 * Math.cos((1 / 3) * Math.acos(temp2 - 1)) - 1);
    return t;
  }
}

export default qtTime;
