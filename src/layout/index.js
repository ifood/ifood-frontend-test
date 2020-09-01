import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet"

const Layout = ({ children }) => (
    <>
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