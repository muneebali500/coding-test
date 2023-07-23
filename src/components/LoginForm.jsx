import { useContext } from "react";

///////////// IMPORTING CUSTOM STYLES /////////////////
import "../../public/css/LoginForm.css";

///////////////// IMPORTING IMAGES ////////////////////
import companyLogoDark from "../../public/images/logo-dark.png";
import companyLogoLight from "../../public/images/logo-light.png";
import userIconDark from "../../public/images/user-dark.png";
import userIconLight from "../../public/images/user.png";
import eyeIconDark from "../../public/images/eye-dark.png";
import eyeIconLight from "../../public/images/eye.png";

///////////////// IMPORTING COMPONENTS /////////////////
import InputField from "./InputField";
import { AuthContext } from "../context/AuthContext";

//////////////// START OF MAIN FUNCTION ////////////////
const LoginForm = () => {
  const {
    darkTheme,
    userName,
    setUserName,
    password,
    setPassword,
    handleSubmit,
  } = useContext(AuthContext);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
