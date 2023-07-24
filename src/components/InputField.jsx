import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

///////////// IMPORTING CUSTOM STYLES /////////////////
import "../../public/css/InputField.css";

const InputField = ({ type, placeholder, value, onChange, iconSrc, alt }) => {
  const { darkTheme } = useContext(ThemeContext);

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
