import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab, faLinkedin, faDev, faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.css';
import { Container } from '../Grid';
// Add all icons to the library so you can use it in your page
library.add(fas, far, fab, faLinkedin, faDev, faGithub)

function Footer(){
  return (
    <footer className="main-footer">
      <Container className="footer">
        <div className="footer-bottom">
         <div className="footer-info">Copyright © 2021 | <a className="footer-link" href=".">Memory Games</a> |
           <a className="footer-info" href="https://github.com/jrobi133/memory-games"> Github</a>

           <a className="creators" href="https://github.com/jrobi133"> John Robinson </a>  | 
           <a className="creators1" href="https://github.com/coatsey"> Logan Coates</a> |  
           <a className="creators2" href="https://github.com/Twmwayne"> Travis Mendenhall </a> | 
           <a className="creators3" href="https://github.com/Dirk44"> Derrick DeVilliers </a>
           
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;