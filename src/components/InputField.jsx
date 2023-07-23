import { useContext } from "react";

///////////// IMPORTING CUSTOM STYLES /////////////////
import "../../public/css/InputField.css";

import { AuthContext } from "../context/AuthContext";

const InputField = ({ type, placeholder, value, onChange, iconSrc, alt }) => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <div className="login-form__input-group">
      <input
        className={`input-field ${darkTheme && "dark"}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <img className="input-icon" src={iconSrc} alt={alt} loading="lazy" />
    </div>
  );
};

export default InputField;
