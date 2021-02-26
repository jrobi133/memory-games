import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LoginButton from "../login-button/login-button";
import LogoutButton from "../logout-button/logout-button";

function Navbar({ loggedIn, setReload }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Memory Games 
            <i class='fas fa-gamepad' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/highscores'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                High Scores
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/game-manager'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Game Manager
              </Link>
            </li>

            <li>
              <Link className='nav-links'>
                  {loggedIn ? <LogoutButton setReload={setReload} /> : <LoginButton setReload={setReload} />}
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          {/* {loggedIn ? <LogoutButton setReload={setReload} /> : <LoginButton setReload={setReload} />} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
