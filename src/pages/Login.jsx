import { useContext } from "react";

///////////////// IMPORTING CONTEXTS /////////////////
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

///////////////// IMPORTING CUSTOM COMPONENTS /////////////////
import ThemeToggleButton from "../components/ToggleThemeButton";
import LoginForm from "../components/LoginForm";

///////////////// IMPORTING IMAGES ////////////////////
import bgDark from "/images/bg-dark.png";
import bgLight from "/images/bg-light.png";

/////////////// IMPORTIG DATA //////////////////
import { footerData } from "../data";

///////////////// IMPORTING CUSTOM STYLES ///////////////////
import "../../public/css/LoginPage.css";

//////////////// START OF MAIN FUNCTION ////////////////
export default function Login() {
  const { userName, loggedIn } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);

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
