import zh_cn from "../assets/i18n/zh_cn.json";
import en_us from "../assets/i18n/en_us.json";

function I18nPure(text, lang) {
  if (lang == "zh" && zh_cn[text]) {
    return zh_cn[text];
  }
  if (en_us[text]) {
    return en_us[text];
  }
  return text;
}

export default I18nPure;
