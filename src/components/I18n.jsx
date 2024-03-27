import { useContext } from "react";
import zh_cn from "../assets/i18n/zh_cn.json";
import LangContext from "../contexts/LangContext";

function I18n({ text }) {
  const lang = useContext(LangContext)[0];
  return lang == "zh" && zh_cn[text] ? zh_cn[text] : text;
}

export default I18n;
