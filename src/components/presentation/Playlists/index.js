import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Columns } from "components/core/Grid";
import { SubTitle, Paragraph } from "components/core/Typography";
import Loading from "components/core/Loading";

import * as S from "./styles";

const Playlists = ({ isLoading, playlists, error }) => {
  return (
    <Loading isLoading={isLoading}>
      <Wrapper>
        {!!error && (
          <S.Error>
            <Paragraph>{error}</Paragraph>
          </S.Error>
        )}

        <Columns>
          {playlists.map((playlist, index) => (
            <S.Playlist key={`${index}-{name}`} img={playlist.images[0].url}>
              <SubTitle fontSize="3rem" margin="2rem 0">
                {playlist.name}
              </SubTitle>

              <Paragraph>{playlist.description}</Paragraph>

              <S.WrapperPlay
                href={playlist.external_urls.spotify}
                target="_blank"
              >
                <S.IconPlay />
              </S.WrapperPlay>
            </S.Playlist>
          ))}
        </Columns>
      </Wrapper>
    </Loading>
  );
};

Playlists.propTypes = {
  isLoading: PropTypes.bool,
  playlists: PropTypes.array,
  error: PropTypes.string,
};

Playlists.defaultProps = {
  isLoading: false,
  playlists: [],
  error: "",
};

export default Playlists;
