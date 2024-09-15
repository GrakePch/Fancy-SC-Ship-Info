import en_us from "../assets/i18n/en_us.json";
import zh_cn from "../assets/i18n/zh_cn.json";

function I18n({ text, langOver }) {
  if (typeof text === "object" && text !== null) text = Object.values(text)[0];
  const lang = localStorage.getItem("lang");
  if ((langOver == "zh_cn" || lang == "zh_cn") && zh_cn[text]) {
    return zh_cn[text];
  }
  if (en_us[text]) {
    return en_us[text];
  }
  return text;
}

export default I18n;
