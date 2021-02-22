import React from "react";
import {NavbarItems} from "./NavbarItems";
import "./Nav.css";


function Nav() {
    
    return (

      <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
        <ul class="nav nav-fill w-100" >
            {NavbarItems.map((item, index) => {
                  return(
                    <li key={index} class="nav-item">
                    <a className={item.cName} href={item.url}>{item.title}</a>
                  </li>
                  )
            })}
        
      </ul>
      </div>
      </nav>
    );
  }
  
  export default Nav;