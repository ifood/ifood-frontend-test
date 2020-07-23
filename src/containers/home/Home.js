import React from 'react';
import {
  Row,
  Col,
  Layout,
  Card,
} from 'antd';

const { Content } = Layout;

const Home = () => (
  <Content className="home__container">
    <Row
      type="flex"
      justify="center"
    >
      <Col
        span={6}
      >
        <Row className="home__logo">
          <Col>
            <img
              alt="home logo"
              className="home__logo__img"
              src="/assets/img/LogoAug.png"
            />
          </Col>
        </Row>
        <Card>
          <Row>
            <Col
              span={24}
              className="text-center"
            >
              <h1 className="home__logo__title">
                Seja bem-vindo ao Spotifood, aqui você encontrará as melhores playlists,
                faça o seu acesso para continuar
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              className="text-center"
            >
              <a
                className="home__spotify-button"
                href="#"
              >
                Login com Spotify
              </a>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </Content>
);

export default Home;
