import React from "react";
import PropTypes from "prop-types";

import { isAuthenticated } from "services/api";

import { Main, Container } from "components/core/Grid";
import Header from "components/core/Header";

const Layout = ({ children, userName }) => (
  <>
    {isAuthenticated() && <Header userName={userName} />}
    <Main>
      <Container authScreen={isAuthenticated()}>{children}</Container>
    </Main>
  </>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  userName: PropTypes.string,
};

Layout.defaultProps = {
  userName: "",
};

export default Layout;
