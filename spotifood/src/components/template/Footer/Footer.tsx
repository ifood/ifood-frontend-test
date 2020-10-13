import React from 'react';
import './Footer.scss';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
        <span>
            © Copyright 2020 <i className="fa fa-heart text-danger"></i>
            <strong className="red"> Pedro Duarte</strong>
        </span>
    </footer>
  );
}

export default Footer;