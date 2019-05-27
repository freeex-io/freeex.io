import React from 'react';
import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <nav className="menu">
      <div className="menu-link">
        <button>about</button>
        <button>contact us</button>
      </div>
      <div className="nav-logo">
        <span className="logo-link">
          <img src={logo} alt="" />
        </span>
      </div>
    </nav>
  );
};

export default Nav;