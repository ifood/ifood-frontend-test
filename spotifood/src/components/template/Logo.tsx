import React from 'react';
import './Logo.css';
import logo from '../../assets/img/logo.png';

function Logo() {
    return (
        <aside className="logo">
            <img src={logo} alt="logo" />
      </aside>
    );
}

export default Logo;