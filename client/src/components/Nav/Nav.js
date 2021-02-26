import React from "react";
import {NavbarItems} from "./NavbarItems";
import "./Nav.css";
// import AuthNav from "../auth-nav/auth-nav";
import LoginButton from "../login-button/login-button";
import LogoutButton from "../logout-button/logout-button";

const Nav = ({ loggedIn, setReload }) => {
    return (
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
          <ul class="nav nav-fill w-100" >
            {NavbarItems.map((item, index) => {
              return (<li key={index} class="nav-item">
                <a className={item.cName} href={item.url}>{item.title}</a>
              </li>)
            })}
          </ul>
          <div className="navbar-nav ml-auto">
            {loggedIn ? <LogoutButton setReload={setReload} /> : <LoginButton setReload={setReload} />}
          </div>
        </div>
      </nav>
    );
  }
  
  export default Nav;