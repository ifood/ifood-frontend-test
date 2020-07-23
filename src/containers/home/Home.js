import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Layout,
  Card,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import { AuthActions } from '../../app/redux/actions';
import { AuthSelectors } from '../../app/redux/reducers';

import getUrlHashAccessToken from '../../app/utils/hash';
import Config from '../../app/config/app.config';

const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => AuthSelectors.getAuth(state));

  useEffect(() => {
    // if(auth) redirect
    const _token = getUrlHashAccessToken();
    if (_token) dispatch(AuthActions.saveAuthentication(_token));
  }, []);

  return (
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
                  {I18n.t('routes.home.pageTitle')}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col
                span={24}
                className="text-center"
              >
                {!auth && (
                <a
                  className="home__spotify-button"
                  href={`${Config.spotify.authEndpoint}?client_id=${Config.spotify.clientId}`
                  + `&redirect_uri=${Config.spotify.redirectUri}&scope=${Config.spotify.scopes.join(
                    '%20',
                  )}&response_type=token&show_dialog=true`}
                >
                  {I18n.t('routes.home.spotifyButton')}
                </a>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Home;
