import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ setReload }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (event) => {
    if(!event) return; 
    loginWithRedirect();
    setReload(prevState => !prevState); // toggle reload
  }

  return (
    <button className="btn btn-primary btn-block" onClick={handleLogin} >Log In </button>
  );
};

export default LoginButton;