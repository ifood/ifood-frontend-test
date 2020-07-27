import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Layout,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSelectors } from '../../app/redux/reducers';
import { AuthActions } from '../../app/redux/actions';
import getUrlHashAccessToken from '../../app/utils/hash';

import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Login from '../../components/Login';
import AdvancedFiltersComponent from '../../components/AdvancedFiltersComponent/AdvancedFiltersComponent';
import FeaturedPlaylists from '../../components/FeaturedPlaylists/FeaturedPlaylists';

const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => AuthSelectors.getAuth(state));

  useEffect(() => {
    const accessToken = getUrlHashAccessToken();
    if (accessToken) dispatch(AuthActions.saveAuthentication(accessToken));
  }, [dispatch]);

  return (
    <Content className="home">
      <Row
        type="flex"
        justify="center"
      >
        <Col
          span={20}
          style={{ marginBottom: '80px' }}
        >
          <Header />
          {auth
            ? (
              <>
                <AdvancedFiltersComponent />
                <FeaturedPlaylists />
              </>
            )
            : (
              <Login />
            )}
        </Col>
      </Row>
      <Footer />
    </Content>
  );
};

export default Home;
