/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  Row, Col,
} from 'antd';
import { useSelector } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import { PlaylistSelectors, LoadingSelectors } from '../../app/redux/reducers';
import { removeHtmlTagsFromDescription } from '../../app/utils/string';

import Loading from '../shared/Loading';
import './FeaturedPlaylists.less';

const FeaturedPlaylists = () => {
  const loading = useSelector((state) => LoadingSelectors.getLoading(state));
  const featuredPlaylists = useSelector((state) => PlaylistSelectors.getPlaylists(state));
  const featuredPlaylistsFiltered = useSelector((state) => PlaylistSelectors.getPlaylistsFiltered(state));

  const renderPlaylists = () => {
    let data = null;

    if (featuredPlaylistsFiltered && featuredPlaylistsFiltered && featuredPlaylistsFiltered.length > 0) {
      data = featuredPlaylistsFiltered;
    } else if (featuredPlaylists && featuredPlaylists.playlists && featuredPlaylists.playlists.items) {
      data = featuredPlaylists && featuredPlaylists.playlists && featuredPlaylists.playlists.items;
    }

    return data && data.map((item, index) => (
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
    ));
  };
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
          <h5 className="header__title">
            {I18n.t('components.featuredPlaylists.content.empty')}
          </h5>
          )}
        </Col>
      </Row>

      <Row type="flex">
        {renderPlaylists()}

        {!featuredPlaylists && loading !== 0 && (<Loading />)}
      </Row>
    </>
  );
};

export default FeaturedPlaylists;
