import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    background-image: url(https://wallpaperaccess.com/full/1295555.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`

const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Spotifood</title>
        </Helmet>
        <main>{children}</main>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;