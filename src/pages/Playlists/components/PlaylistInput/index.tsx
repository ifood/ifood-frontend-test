import React, { memo } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlaylistInputContainer } from "./styles";

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
  }
}));

const PlaylistInput: React.FC = () => {
  const classes = useStyles()

  return (
    <PlaylistInputContainer>
      <TextField
        id="playlist-search"
        className={ classes.textField }
        label="Insert your favorite playlist"
        variant="outlined"
        size="small"
      />
    </PlaylistInputContainer>
  );
}

export default memo(PlaylistInput);
