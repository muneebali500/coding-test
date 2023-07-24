import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

//////////////// START OF MAIN FUNCTION ////////////////
function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  ////////////////// FUNCTION TOGGLES BODY BACKGROUND BASED ON THEME STATE
  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = "#131b15";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  }, [darkTheme]);

  /////////////////// JSX ///////////////////
  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
