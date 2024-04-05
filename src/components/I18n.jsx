import { useContext } from "react";
import zh_cn from "../assets/i18n/zh_cn.json";
import en_us from "../assets/i18n/en_us.json";
import LangContext from "../contexts/LangContext";

function I18n({ text, langOver }) {
  const lang = useContext(LangContext)[0];
  if ((langOver == "zh" || lang == "zh") && zh_cn[text]) {
    return zh_cn[text];
  }
  if (en_us[text]) {
    return en_us[text];
  }
  return text;
}

export default I18n;
