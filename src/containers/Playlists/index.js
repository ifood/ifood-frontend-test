import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import { useIntl } from 'react-intl';

import FormInput from '../../components/FormInput';
import Playlist from '../../components/Playlist';
import { Wrapper } from './styles';
import messages from './messages';

import { useStateValue } from '../../stores';
import { spacing, colors } from '../../styles/theme';

const Playlists = () => {
  const [{ data }, refetchPlaylists] = useAxios('/featured-playlists', {
    manual: true,
  });
  const intl = useIntl();
  const [{ filters }] = useStateValue();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const updatePlaylists = async () => {
      await refetchPlaylists({ params: filters });
    };
    updatePlaylists();

    const interval = setInterval(updatePlaylists, 30000);
    return () => clearInterval(interval);
  }, [refetchPlaylists, filters]);

  const handleSearchInput = ({ value }) => setSearch(value);

  const getPlaylistsFiltered = () => {
    return data.playlists.items.filter((item) => {
      return item.name.toLowerCase().search(search.toLowerCase()) > -1;
    });
  };

  return (
    <div className="container">
      <Wrapper>
        <FormInput
          id="search"
          value={search}
          placeholder={intl.formatMessage(messages.search)}
          clearable
          onChange={handleSearchInput}
          backgroundColor={colors.base.white}
        />

        {data && (
          <div className="row">
            {getPlaylistsFiltered().map((playlist) => (
              <div
                key={playlist.id}
                className="col-md-6 col-lg-4 col-xl-3"
                style={{ marginTop: spacing.s3 }}
              >
                <a
                  href={playlist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Playlist data={playlist} />
                </a>
              </div>
            ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Playlists;
