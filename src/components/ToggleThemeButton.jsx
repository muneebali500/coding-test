import { useContext } from "react";

////////////// IMPORTING CONTEXT /////////////////////
import { ThemeContext } from "../context/ThemeContext";

///////////// IMPORTING IMAGES ////////////////////
import sunIcon from "/images/sun.png";
// import moonIcon from "/images/moon.png";

///////////// IMPORTING CUSTOM STYLES /////////////////
import "../../public/css/ToggleThemeButton.css";

const ThemeToggleButton = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <>
      {darkTheme ? (
        <i
          className={`theme-icon fa-regular ${darkTheme && "fa-moon"}`}
          onClick={() => setDarkTheme(!darkTheme)}
        />
      ) : (
        <img
          className="theme-icon"
          src={sunIcon}
          alt="Sun Icon"
          loading="lazy"
          onClick={() => setDarkTheme(!darkTheme)}
        />
      )}
    </>
  );
};

export default ThemeToggleButton;
