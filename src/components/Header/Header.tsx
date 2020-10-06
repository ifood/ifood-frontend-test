import React from 'react';
import Logo from '../../assets/images/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={Logo} alt="Logo"/>
        <h1>Spotifood</h1>
      </div>
    </div>
  )
};

export default Header;
