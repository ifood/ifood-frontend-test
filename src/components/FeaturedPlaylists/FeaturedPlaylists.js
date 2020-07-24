import React from 'react';
import { Col, Card, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import { PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';

import './FeaturedPlaylists.less';

const FeaturedPlaylists = ({ data }) => {
  const loading = useSelector((state) => LoadingSelectors.getLoading(state));
  const featuredPlaylists = useSelector((state) => PlaylistSelectors.getPlaylists(state));

  return (
    <>
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
              alt="playlist"
              src={item.images[0].url}
            />
            )}
          >
            <span className="home__playlist__item">
              <strong className="home__playlist__item">{item.name}</strong> <br />
            </span>
          </Card>
        </Col>
      ))}

      {!data && loading !== 0 && (
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
    </>
  );
};

export default FeaturedPlaylists;
