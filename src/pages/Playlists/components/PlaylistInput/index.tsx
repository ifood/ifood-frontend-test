import React, { ChangeEvent, memo, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlaylistInputContainer } from "./styles";
import { usePlaylists } from "../../../../hooks/usePlaylists";

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
  }
}));


const PlaylistInput: React.FC = () => {
  const classes = useStyles();

  const { setSearch } = usePlaylists();

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    if (setSearch) {
      setSearch(target.value);
    }
  }, [setSearch]);

  return (
    <PlaylistInputContainer>
      <TextField
        id="playlist-search"
        className={ classes.textField }
        label="Insert your favorite playlist"
        variant="outlined"
        size="small"
        onChange={handleChange}
      />
    </PlaylistInputContainer>
  );
}

export default memo(PlaylistInput);
