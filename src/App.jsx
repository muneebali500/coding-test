import { useContext } from "react";

///////////////// IMPORTING CUSTOM STYLES ///////////////////
import "../public/css/App.css";

///////////////// IMPORTING IMAGES ////////////////////
import bgDark from "../public/images/bg-dark.png";
import bgLight from "../public/images/bg-light.png";

///////////////// IMPORTING CUSTOM COMPONENTS /////////////////
import ThemeToggleButton from "./components/ToggleThemeButton";
import LoginForm from "./components/LoginForm";

import { AuthContext } from "./context/AuthContext";

/////////////// IMPORTIG DATA //////////////////
import { footerData } from "./data";

//////////////// START OF MAIN FUNCTION ////////////////
function App() {
  const { darkTheme, userName, loggedIn } = useContext(AuthContext);

  /////////////////// JSX ///////////////////
  return (
    <div className="login-page">
      {loggedIn ? (
        <h2 className={`login-user ${darkTheme && "dark"}`}>
          hi {userName.toUpperCase()} you are log in
        </h2>
      ) : (
        <>
          <div className="left-side">
            <figure className="left-side__background">
              <img
                src={darkTheme ? bgDark : bgLight}
                alt="Bg Image"
                loading="lazy"
              />
            </figure>

            <div className="left-side__text">
              <h3 className={`left-side__text--heading ${darkTheme && "dark"}`}>
                One Stop, Many Solution
              </h3>
              <p
                className={`left-side__text--description ${
                  darkTheme && "dark"
                }`}
              >
                One Solution that Speed up your Device Reports and Make
                Efficient way to organize your data.
              </p>
            </div>
          </div>

          <div className="right-side">
            <div className="theme-container">
              <ThemeToggleButton />
            </div>

            <LoginForm />

            <footer className="right-side__footer">
              <ul className="right-side__footer-nav">
                {footerData.map((item, index) => (
                  <li key={index} className="right-side__footer-nav--item">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
