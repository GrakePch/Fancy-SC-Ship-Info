import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  mdiBrightness4,
  mdiBrightness7,
  mdiGithub,
  mdiPistol,
  mdiViewGridOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

import icons from "../../assets/icons";
import themes from "../../assets/themes";
import I18n from "../I18n";
import "./Docker.css";

function Docker() {
  const lang = localStorage.getItem("lang");
  const theme = localStorage.getItem("theme") !== "light" ? "dark" : "light";
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    let paramLang = searchParams.get("lang");
    if (paramLang) localStorage.setItem("lang", paramLang);
    searchParams.delete("lang");
    setSearchParams(searchParams, { replace: true });

    let paramTheme = searchParams.get("theme");
    if (paramTheme)
      localStorage.setItem("theme", paramTheme === "light" ? "light" : "dark");
    searchParams.delete("theme");
    setSearchParams(searchParams, { replace: true });
  }, [searchParams]);

  useEffect(() => {
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
  }, [theme]);

  if (searchParams.get("hide") == 1) {
    document.body.classList.add("queryHide");
    return null;
  } else {
    document.body.classList.remove("queryHide");
  }

  return (
    <div className="Docker-container">
      <span className="Docker-tooltip">
        <button className="Docker-btns" onClick={() => navigate("/")}>
          {icons.nav_ships_info}
        </button>
        <p>
          <I18n text="nav-ship-index" />
        </p>
      </span>
      {/* <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() => {
            navigate("/c");
          }}
        >
          <Icon path={mdiViewGridOutline} size={1} />
        </button>
        <p>
          <I18n text="nav-component-index" />
        </p>
      </span> */}
      <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() => {
            navigate("/PW");
          }}
        >
          <Icon path={mdiPistol} size={1} />
        </button>
        <p>
          <I18n text="nav-personal-weapon-index" />
        </p>
      </span>
      <hr />
      <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() => {
            let newValue = lang === "zh_cn" ? "en_us" : "zh_cn";
            setSearchParams(
              (prev) => {
                prev.set("lang", newValue);
                return prev;
              },
              { replace: true },
            );
          }}
        >
          {lang == "zh_cn" ? "EN" : "简中"}
        </button>
        <p>{lang == "zh_cn" ? "Switch to English" : "切换到简体中文"}</p>
      </span>
      <span className="Docker-tooltip">
        <button
          className="Docker-btns"
          onClick={() => {
            let newValue = theme === "dark" ? "light" : "dark";
            setSearchParams(
              (prev) => {
                prev.set("theme", newValue);
                return prev;
              },
              { replace: true },
            );
          }}
        >
          {theme === "dark" ? (
            <Icon path={mdiBrightness7} size={1} />
          ) : (
            <Icon path={mdiBrightness4} size={1} />
          )}
        </button>
        <p>
          <I18n
            text={
              theme === "dark"
                ? "nav-switch-light-theme"
                : "nav-switch-dark-theme"
            }
          />
        </p>
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
