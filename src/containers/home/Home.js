import React from 'react';
import {
  Row,
  Col,
  Layout,
} from 'antd';

import Header from '../../components/shared/Header';
import AdvancedFiltersComponent from '../../components/AdvancedFiltersComponent/AdvancedFiltersComponent';
import FeaturedPlaylists from '../../components/FeaturedPlaylists/FeaturedPlaylists';

const { Content } = Layout;

const Home = () => (
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

export default Home;
