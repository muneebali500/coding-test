import { useContext } from "react";

///////////////// IMPORTING COMPONENTS /////////////////
import InputField from "./InputField";

///////////////// IMPORTING CONTEXTS /////////////////
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

///////////////// IMPORTING IMAGES ////////////////////
import companyLogoDark from "/images/logo-dark.png";
import companyLogoLight from "/images/logo-light.png";
import userIconDark from "/images/user-dark.png";
import userIconLight from "/images/user.png";
import eyeIconDark from "/images/eye-dark.png";
import eyeIconLight from "/images/eye.png";

///////////// IMPORTING CUSTOM STYLES /////////////////
import "../../public/css/LoginForm.css";

//////////////// START OF MAIN FUNCTION ////////////////
const LoginForm = () => {
  const { userName, setUserName, password, setPassword, handleLogin } =
    useContext(AuthContext);

  const { darkTheme } = useContext(ThemeContext);

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <figure className={`company-logo ${darkTheme && "dark"}`}>
        <img
          src={darkTheme ? companyLogoDark : companyLogoLight}
          alt="Company Logo"
          loading="lazy"
        />
      </figure>

      <h4 className={`login-form__heading ${darkTheme && "dark"}`}>
        Sign in to your account
      </h4>

      <InputField
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        iconSrc={darkTheme ? userIconDark : userIconLight}
        alt="User Icon"
        darkTheme={darkTheme}
      />

      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        iconSrc={darkTheme ? eyeIconDark : eyeIconLight}
        alt="Password Icon"
        darkTheme={darkTheme}
      />

      <div className={`login-remember__wrapper ${darkTheme && "dark"}`}>
        <label>
          <input type="checkbox" /> <span>remember me</span>
        </label>
        <h5>forgot password?</h5>
      </div>

      <button className={`login-btn ${darkTheme && "dark"}`}>Login</button>
    </form>
  );
};

export default LoginForm;
