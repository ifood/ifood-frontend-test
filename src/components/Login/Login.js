import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'antd';
import { I18n } from 'react-redux-i18n';
import { CustomerServiceOutlined } from '@ant-design/icons';
import Config from '../../app/config/app.config';

const hrefButton = `${Config.spotify.authEndpoint}?client_id=${Config.spotify.clientId}`
+ `&redirect_uri=${Config.spotify.redirectUri}&scope=${Config.spotify.scopes.join('%20')}`
+ '&response_type=token&show_dialog=true';

const Login = () => (
  <Row
    type="flex"
    justify="center"
  >
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 8 }}
      xxl={{ span: 8 }}
    >
      <Card>
        <Row>
          <Col
            span={24}
            className="text-center"
          >
            <h1 className="login__logo__title">
              {I18n.t('routes.login.pageTitle')}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            className="text-center"
          >
            <Button
              type="primary"
              href={hrefButton}
            >
              {I18n.t('routes.login.spotifyButton')}
              <CustomerServiceOutlined className="login__btn-icon" />
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default Login;
