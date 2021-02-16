import React from "react";
import {NavbarItems} from "./NavbarItems"

function Nav() {
    
    return (
        <ul class="nav">
            {NavbarItems.map((item, index) => {
                  return(
                    <li key={index} class="nav-item">
                    <a className={item.cName} href={item.url}>{item.title}</a>
                  </li>
                  )
            })}
        
      </ul>
    );
  }
  
  export default Nav;