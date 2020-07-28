/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  Row, Col,
} from 'antd';
import { useSelector } from 'react-redux';

import { PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';
import { removeHtmlTagsFromDescription } from '../../app/utils/string';

import Loading from '../shared/Loading';
import './FeaturedPlaylists.less';

const FeaturedPlaylists = () => {
  const loading = useSelector((state) => LoadingSelectors.getLoading(state));
  const featuredPlaylists = useSelector((state) => PlaylistSelectors.getPlaylists(state));

  return (
    <>
      <Row
        type="flex"
        justify="space-between"
      >
        <Col span={20}>
          {featuredPlaylists && (
            <h3 className="header__title">{featuredPlaylists.message}</h3>
          )}
          {!featuredPlaylists && loading === 0 && (
            <h5 className="header__title">Nenhum resultado encontrado, altere os filtros e tente novamente.</h5>
          )}
        </Col>
      </Row>

      <Row type="flex">
        {featuredPlaylists && featuredPlaylists.playlists && featuredPlaylists.playlists.items.map((item, index) => (
          <Col
            className="playlist"
            key={item.id}
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 4 }}
          >
            <div
              className="playlist__item"
              style={{
                backgroundImage: `url(${item.images[0].url})`,
              }}
              onClick={() => window.open(item.external_urls.spotify)}
              role="button"
              tabIndex={index}
            >
              <div className="playlist__item__info">
                <p>{removeHtmlTagsFromDescription(item.description)}</p>
              </div>
            </div>
          </Col>
        ))}

        {!featuredPlaylists && loading !== 0 && (<Loading />)}
      </Row>
    </>
  );
};

export default FeaturedPlaylists;
