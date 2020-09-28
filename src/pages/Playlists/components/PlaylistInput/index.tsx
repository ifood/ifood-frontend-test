import React, { memo } from "react";
import { PlaylistInputContainer } from "./styles";
import { usePlaylists } from "../../../../hooks/usePlaylists";
import TextInput from "../../../../components/Inputs/TextInput";

const PlaylistInput: React.FC = () => {

  const { setSearch } = usePlaylists();

  const handleChange = ({ target }: React.ChangeEvent<{ value: unknown }>) => {
    const value = target.value as string;
    setSearch(value);
  };

  return (
    <PlaylistInputContainer>
      <TextInput
        name="Insert your favorite playlist"
        size="small"
        onChange={ handleChange }
      />
    </PlaylistInputContainer>
  );
}

export default memo(PlaylistInput);
