import React from "react";

import Wrapper from "components/Wrapper";
import PlaylistCard from "components/PlaylistCard";

import * as S from "./styled";

const PlaylistsList = () => {
  return (
    <Wrapper>
      <S.PlaylistsList>
        {Array.from(Array(10), (_, i) => (
          <PlaylistCard
            key={i}
            link="/"
            image="https://i.scdn.co/image/ab67706f00000003aba1f07094bd3e98cd0122de"
            title="Today's hits"
            author="spotify"
            label="Listen on spotify"
          />
        ))}
      </S.PlaylistsList>
    </Wrapper>
  );
};

export default PlaylistsList;
