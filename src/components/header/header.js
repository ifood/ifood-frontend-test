import React, { Fragment } from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Header = () => {
  return (
    <Fragment>
      <Navbar className="header-space" color="light" light expand="md">
        <NavbarBrand><h4 id="title">SpotiFood</h4></NavbarBrand>
      </Navbar>
    </Fragment>
  );
}

export default Header;