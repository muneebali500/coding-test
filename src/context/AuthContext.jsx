import { useState, useContext, createContext, useEffect } from "react";
import { userData } from "../data";

const AuthContext = createContext();

//////////////// START OF MAIN FUNCTION ////////////////
function AuthProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  ////////////////// FUNCTION TOGGLES BODY BACKGROUND BASED ON THEME STATE
  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = "#131b15";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  }, [darkTheme]);

  //////// FUNCTION SUBMITS LOGIN DATA AND CHANGES THE LOGIN STATE
  function handleSubmit(e) {
    e.preventDefault();

    const user = userData.find(
      (user) => user.userName === userName.trim() && user.password === password
    );

    if (!user) {
      return alert("Wrong Credentials");
    }

    setLoggedIn(true);
  }

  /////////////////// JSX ///////////////////
  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        password,
        setPassword,
        loggedIn,
        darkTheme,
        setDarkTheme,
        handleSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
