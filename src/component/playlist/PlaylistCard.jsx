/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Person } from '@material-ui/icons';

const UserContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 8px;
`;
const BoldText = styled.span`
  font-weight: 700;
`;

function PlaylistCard(props) {
  const { playlist } = props;

  if (playlist == null) {
    return null;
  }

  const {
    id,
    name,
    description,
    images,
    owner,
    tracks,
    external_urls,
  } = playlist;

  function handleClickCard() {
    if (external_urls?.spotify != null) {
      window.open(external_urls.spotify);
    }
  }

  /* eslint-disable-next-line react/no-danger */
  const dangerHtml = <span dangerouslySetInnerHTML={{ __html: description }} />;

  return (
    <Card key={id} onClick={handleClickCard}>
      <CardActionArea onClick={handleClickCard}>
        <CardMedia
          component="img"
          alt={name}
          image={images?.[0]?.url}
          title={name}
        />
        <CardContent>
          <Tooltip title={name} aria-label="description">
            <Typography variant="h5" noWrap>
              <BoldText>{name}</BoldText>
            </Typography>
          </Tooltip>
          <Typography variant="caption" gutterBottom>
            {`${tracks.total} tracks`}
          </Typography>
          <Tooltip title={dangerHtml} aria-label="description">
            <Typography
              variant="subtitle2"
              color="textSecondary"
              gutterBottom
              noWrap>
              {dangerHtml}
            </Typography>
          </Tooltip>
        </CardContent>
        <Divider light />
        <CardActions>
          <UserContainer>
            <Person color="secondary" style={{ paddingRight: '8px' }} />
            <Typography variant="subtitle2" color="textSecondary">
              {owner.display_name}
            </Typography>
          </UserContainer>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

PlaylistCard.propTypes = {
  playlist: PropTypes.object,
};

export default PlaylistCard;
