import RSISizeToNumber from "../assets/RSISizeToNumber";

const formatRSI = (listRSI) => {
  let formatList = [];
  for (let i = 0; i < listRSI.length; ++i) {
    let obj = listRSI[i];
    for (let q = 0; q < Number(obj.quantity); ++q)
      formatList.push({
        Size: RSISizeToNumber[obj.size],
      });
  }
  return formatList;
};

export default formatRSI;
