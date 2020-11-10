import { defineMessages } from "react-intl";

export const scope = "containers.PlaylistDetails";

export default defineMessages({
  backButtonText: {
    id: `${scope}.backButtonText`,
    defaultMessage: "Back",
  },
  tracksLabel: {
    id: `${scope}.tracksLabel`,
    defaultMessage: "tracks",
  },
  followersLabel: {
    id: `${scope}.followersLabel`,
    defaultMessage: "followers",
  },
  openAtSpotify: {
    id: `${scope}.openAtSpotify`,
    defaultMessage: "Open at Spotify.com",
  },
  tracksTitle: {
    id: `${scope}.tracksTitle`,
    defaultMessage: "Tracks",
  },
});
