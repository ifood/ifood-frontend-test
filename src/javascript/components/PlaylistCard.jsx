import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import _ from "lodash";

const playlistImage = playlist => _.get(playlist, "images[0].url", "");
const playlistName = playlist => _.get(playlist, "name", "");
const playlistOwner = playlist => _.get(playlist, "owner.display_name", "");
const playlistLink = playlist => _.get(playlist, "external_urls.spotify", "");

const PlaylistCard = props => {
  const { playlist } = props;
  return (
    playlist && (
      <div className="playlists-container">
        <Card body inverse className="playlist-card">
          <CardImg
            top
            width="100%"
            src={playlistImage(playlist)}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{playlistName(playlist)}</CardTitle>
            <CardSubtitle>{playlistOwner(playlist)}</CardSubtitle>
            <Button
              onClick={() => window.open(playlistLink(playlist), "_blank")}
              variant="primary"
            >
              Go to playlist
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  );
};

export default PlaylistCard;
