import { useState, createContext } from "react";
import { userData } from "../data";

const AuthContext = createContext();

//////////////// START OF MAIN FUNCTION ////////////////
function AuthProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  //////// FUNCTION SUBMITS LOGIN DATA AND CHANGES THE LOGIN STATE
  function handleLogin(e) {
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
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
