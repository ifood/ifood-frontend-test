import React, { memo } from "react";
import { PlaylistFiltersContainer } from "./styles";

type Props = {
  isOpen: boolean;
}

const PlaylistFilters: React.FC<Props> = ({ isOpen }) => {

  return (
    <PlaylistFiltersContainer isOpen={ isOpen }>

    </PlaylistFiltersContainer>
  );
}

export default memo(PlaylistFilters);
