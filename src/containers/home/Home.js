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
// const removeHtmlTagsFromDescription = (text) => {
//   if (!text) return '';
//   return text.replace(/<\/?[^>]+(>|$)/g, '');
// };
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
            justify="center"
            align="middle"
          >
            <Col span={3}>
              <Link to="/">
                <img
                  alt="home logo"
                  className="home__logo__img"
                  src="/assets/img/logo.png"
                />
              </Link>
            </Col>
            <Col span={20}>
              <h1 className="home__header__title">As playlists mais quentes estão bem aqui!</h1>
            </Col>
          </Row>

          <Row>
            <AdvancedFiltersComponent />
          </Row>
          <Row>
            <FeaturedPlaylists />
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default Home;
