import React from 'react';
import { Row, Col } from 'antd';
import { Link } from '@reach/router';

import './Header.less';

const Header = () => (
  <Row
    className="header my-5"
    type="flex"
    align="middle"
  >
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 7 }}
      lg={{ span: 8 }}
      xl={{ span: 4 }}
      xxl={{ span: 4 }}
    >
      <Link to="/">
        <img
          alt="home logo"
          className="header__logo__img"
          src="/assets/img/logo.png"
        />
      </Link>
    </Col>
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 17 }}
      lg={{ span: 16 }}
      xl={{ span: 20 }}
      xxl={{ span: 20 }}
    >
      <h1 className="header__title">As playlists mais quentes estão bem aqui!</h1>
    </Col>
  </Row>
);
export default Header;
