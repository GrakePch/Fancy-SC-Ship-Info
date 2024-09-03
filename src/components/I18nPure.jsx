import en_us from "../assets/i18n/en_us.json";
import zh_cn from "../assets/i18n/zh_cn.json";

function I18nPure(text, lang) {
  if (typeof text === "object" && text !== null) text = Object.values(text)[0];
  if (lang == "zh" && zh_cn[text]) {
    return zh_cn[text];
  }
  if (en_us[text]) {
    return en_us[text];
  }
  return text;
}

export default I18nPure;
