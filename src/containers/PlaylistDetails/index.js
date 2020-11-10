import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { H1, H3, H6 } from "baseui/typography";
import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import ArrowLeft from "baseui/icon/arrow-left";
import { getPlaylistTracks, getPlaylistDetails } from "services/api";
import { Tag, VARIANT } from "baseui/tag";
import { StyledSpinnerNext } from "baseui/spinner";
import TrackListItem from "components/TrackListItem";
import messages from "./messages";

export default function PlaylistDetails({ match }) {
  const history = useHistory();
  const [details, setDetails] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [totalTracks, setTotalTracks] = useState(-1);
  const [isLoading, setLoading] = useState(true);

  const loadDetails = async () => {
    try {
      setLoading(true);
      const [detailsResp, tracksResp] = await Promise.all([
        getPlaylistDetails(match.params.id),
        getPlaylistTracks(match.params.id),
      ]);

      setDetails(detailsResp.data);
      setTracks(tracksResp.data.items);
      setTotalTracks(tracksResp.data.total);
    } catch (e) {
      console.log(e);
      // TODO: Show error message on screen
    }
    setLoading(false);
  };

  useEffect(() => {
    loadDetails();
  }, []);

  if (isLoading) {
    return (
      <div className="playlist-details__loading">
        <StyledSpinnerNext size="60px" color="#EA1D2C" />
      </div>
    );
  }

  const { description, name, images, followers, external_urls } = details;

  const renderTracks = () => {
    return tracks.map((item) => (
      <TrackListItem key={item.track.id} track={item.track} />
    ));
  };

  return (
    <div className="playlist-details">
      <div className="playlist-details__top-layer">
        <Button
          shape={SHAPE.pill}
          kind={KIND.primary}
          size={SIZE.mini}
          startEnhancer={() => <ArrowLeft size={24} />}
          onClick={() => {
            history.push("/");
          }}
        >
          <FormattedMessage {...messages.backButtonText} />
        </Button>
        <div className="playlist-details__content-wrapper">
          <div className="playlist-details__content">
            <div className="playlist-details__header">
              <img
                alt={name}
                className="playlist-details__cover"
                src={images[0] ? images[0].url : ""}
              />
              <div className="playlist-details__info">
                <H1>{name}</H1>
                <H6>{description}</H6>
                <p className="playlist-details__total">
                  <Tag closeable={false} variant={VARIANT.solid}>
                    {totalTracks}
                  </Tag>
                  <span>
                    <FormattedMessage {...messages.tracksLabel} />
                  </span>
                </p>
                <p className="playlist-details__followers">
                  <Tag closeable={false} variant={VARIANT.solid}>
                    {followers.total}
                  </Tag>
                  <span>
                    <FormattedMessage {...messages.followersLabel} />
                  </span>
                </p>
                {external_urls && external_urls.spotify && (
                  <Button
                    shape={SHAPE.pill}
                    kind={KIND.primary}
                    size={SIZE.default}
                    $as="a"
                    href={external_urls.spotify}
                    target="_blank"
                  >
                    <FormattedMessage {...messages.openAtSpotify} />
                  </Button>
                )}
              </div>
            </div>
            <div className="playlist-details__tracks-wrapper">
              <H3>
                <FormattedMessage {...messages.tracksTitle} />
              </H3>
              <div className="playlist-details__tracks">{renderTracks()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="playlist-details__bg-layer">
        <img
          tabIndex={-1}
          alt="" // ignored by assistive technologies
          className="playlist-details__bg"
          src={images[0] ? images[0].url : ""}
        />
      </div>
    </div>
  );
}
