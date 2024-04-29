import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { mdiGithub, mdiViewGridOutline } from "@mdi/js";
import Icon from "@mdi/react";

import icons from "../../assets/icons";
import LangContext from "../../contexts/LangContext";
import I18n from "../I18n";
import "./Docker.css";

function Docker() {
  const lang = useContext(LangContext)[0];
  const setSearchParams = useSearchParams()[1];

  return (
    <div className="Docker-container">
      <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() => setSearchParams({ s: null, lang: lang })}
        >
          {icons.nav_ships_info}
        </button>
        <p>
          <I18n text="nav-ship-index" />
        </p>
      </span>
      <span className="Docker-tooltip">
        <button className="Docker-btns">
          <Icon path={mdiViewGridOutline} size={1} />
        </button>
        <p>
          <I18n text="nav-component-index" />
        </p>
      </span>
      <hr />
      <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() => {
            let newValue = lang == "zh" ? "en" : "zh";
            setSearchParams((prev) => ({ s: prev.get("s"), lang: newValue }));
          }}
        >
          {lang == "zh" ? "EN" : "中"}
        </button>
        <p>{lang == "zh" ? "Switch to English" : "切换到简体中文"}</p>
      </span>
      <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() =>
            window.open(
              "https://github.com/GrakePch/Fancy-SC-Ship-Info/blob/main/README.md",
              "_blank",
            )
          }
        >
          <Icon path={mdiGithub} size={1} />
        </button>
        <p>
          <I18n text="nav-about" />
        </p>
      </span>
    </div>
  );
}

export default Docker;
