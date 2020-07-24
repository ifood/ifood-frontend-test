import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Layout,
  Card,
  Spin,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import { Link } from '@reach/router';
import { LoadingOutlined } from '@ant-design/icons';

import { AuthActions, PlaylistActions } from '../../app/redux/actions';
import { AuthSelectors, PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';

import getUrlHashAccessToken from '../../app/utils/hash';

const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => LoadingSelectors.getLoading(state));
  const featuredPlaylists = useSelector((state) => PlaylistSelectors.getPlaylists(state));

  useEffect(() => {
    const initialize = () => {
      const _token = getUrlHashAccessToken();
      if (_token) dispatch(AuthActions.saveAuthentication(_token));
      dispatch(PlaylistActions.getFeaturedPlaylists());
    };

    initialize();
  }, [dispatch]);

  return (
    <Content className="home">
      <Row
        type="flex"
        justify="center"
      >
        <Col
          span={20}
        >
          <Row className="home__header">
            <Col
              span={24}
              className="my-4"
            >
              <Link to="/">
                <img
                  alt="home logo"
                  className="home__logo__img"
                  src="/assets/img/logo.png"
                />
              </Link>
            </Col>
            <Col span={24}>
              <h1 className="home__header__title">As playlists mais quentes estão bem aqui!</h1>
            </Col>
          </Row>

          <Row
            className="home__container"
            justify="center"
          >
            {featuredPlaylists && featuredPlaylists.items && featuredPlaylists.items.map((item) => (
              <Col
                className="home__playlist"
                key={item.id}
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
              >
                <Card
                  hoverable
                  style={{ width: 250 }}
                  cover={item.images && item.images[0] && (
                    <img
                      alt="example"
                      src={item.images[0].url}
                    />
                  )}
                >
                  <strong className="home__playlist__item">{item.name}</strong>
                </Card>
              </Col>
            ))}
            {!featuredPlaylists && loading !== 0 && (
            <Col
              span={24}
              className="home__loading"
            >
              <Spin indicator={(
                <LoadingOutlined
                  style={{ fontSize: 50 }}
                  className="home__loading__spin"
                  spin
                />
              )}
              />
            </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default Home;
