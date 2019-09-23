import React, { PureComponent } from "react";
import logo from "../../static/images/logo.png";

export class Header extends PureComponent {
  render() {
    return (
      <div className="header-container">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
