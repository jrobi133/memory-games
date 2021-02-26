import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({ setReload }) => {
  const { logout } = useAuth0();

  const handleLogout = (event) => {
    if(!event) return; 

    logout({
      returnTo: window.location.origin,
    })

    setReload(prevState => !prevState); // toggle reload
  }

  return (
    <button className="btn btn-danger btn-block" onClick={handleLogout} >
      Log Out
    </button>
  );
};

export default LogoutButton;