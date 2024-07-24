import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { mdiGithub, mdiViewGridOutline } from "@mdi/js";
import Icon from "@mdi/react";

import icons from "../../assets/icons";
import themes from "../../assets/themes";
import LangContext from "../../contexts/LangContext";
import I18n from "../I18n";
import "./Docker.css";

function Docker() {
  const [lang, setLang] = useContext(LangContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setLang(searchParams.get("lang"));
  }, [searchParams, setLang]);

  useEffect(() => {
    let theme = searchParams.get("theme") == "light" ? "light" : "dark";
    document.documentElement.style.setProperty(
      "--color-bg",
      themes[theme].colorBg,
    );
    document.documentElement.style.setProperty(
      "--color-bg-a",
      themes[theme].colorBgA,
    );
    document.documentElement.style.setProperty(
      "--color-bg-light",
      themes[theme].colorBgLight,
    );
    document.documentElement.style.setProperty(
      "--color-bg-light-a",
      themes[theme].colorBgLightA,
    );
    document.documentElement.style.setProperty(
      "--color-bg-lighter",
      themes[theme].colorBgLighter,
    );
    document.documentElement.style.setProperty(
      "--color-bg-lighter-a",
      themes[theme].colorBgLighterA,
    );
    document.documentElement.style.setProperty(
      "--color-text",
      themes[theme].colorText,
    );
    document.documentElement.style.setProperty(
      "--color-primary-bg",
      themes[theme].colorPrimaryBg,
    );
    document.documentElement.style.setProperty(
      "--color-primary-text",
      themes[theme].colorPrimaryText,
    );
    document.documentElement.style.setProperty(
      "--color-primary-sat",
      themes[theme].colorPrimarySat,
    );
    document.documentElement.style.setProperty(
      "--color-primary-dim",
      themes[theme].colorPrimaryDim,
    );
    document.documentElement.style.setProperty(
      "--color-primary-dimmer",
      themes[theme].colorPrimaryDimmer,
    );
  });

  if (searchParams.get("hide") == 1) {
    document.body.classList.add("queryHide");
    return null;
  } else {
    document.body.classList.remove("queryHide");
  }

  return (
    <div className="Docker-container">
      <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() =>
            setSearchParams((prev) => {
              prev.delete("s");
              return prev;
            })
          }
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
            setSearchParams((prev) => {
              prev.set("lang", newValue);
              return prev;
            });
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
