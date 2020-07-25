import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Layout,
} from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from '@reach/router';

import { AuthActions, PlaylistActions } from '../../app/redux/actions';
import getUrlHashAccessToken from '../../app/utils/hash';

import AdvancedFiltersComponent from '../../components/AdvancedFiltersComponent/AdvancedFiltersComponent';
import FeaturedPlaylists from '../../components/FeaturedPlaylists/FeaturedPlaylists';

const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialize = () => {
      const _token = getUrlHashAccessToken();
      if (_token) dispatch(AuthActions.saveAuthentication(_token));
      dispatch(PlaylistActions.getFeaturedPlaylists());
      dispatch(PlaylistActions.getPlaylistFilters());
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
          <Row
            className="home__header my-5"
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
                  className="home__logo__img"
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
              <h1 className="home__header__title">As playlists mais quentes estão bem aqui!</h1>
            </Col>
          </Row>


          <AdvancedFiltersComponent />

          <FeaturedPlaylists />

        </Col>
      </Row>
    </Content>
  );
};

export default Home;
