import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Layout,
} from 'antd';
import { useDispatch } from 'react-redux';

import { AuthActions, PlaylistActions } from '../../app/redux/actions';
import getUrlHashAccessToken from '../../app/utils/hash';

import Header from '../../components/shared/Header';
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
          <Header />
          <AdvancedFiltersComponent />
          <FeaturedPlaylists />
        </Col>
      </Row>
    </Content>
  );
};

export default Home;
