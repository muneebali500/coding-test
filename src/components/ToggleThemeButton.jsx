import { useContext } from "react";

///////////// IMPORTING CUSTOM STYLES /////////////////
import "../../public/css/ToggleThemeButton.css";

///////////// IMPORTING IMAGES ////////////////////
import sunIcon from "../../public/images/sun.png";
// import moonIcon from "../../public/images/moon.png";

////////////// IMPORTING CONTEXT /////////////////////
import { AuthContext } from "../context/AuthContext";

const ThemeToggleButton = () => {
  const { darkTheme, setDarkTheme } = useContext(AuthContext);

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
