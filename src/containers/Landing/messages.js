import { defineMessages } from "react-intl";

export const scope = "containers.Landing";

export default defineMessages({
  permissionDenied: {
    id: `${scope}.permissionDenied`,
    defaultMessage: "Permission denied :(",
  },
  sessionExpired: {
    id: `${scope}.sessionExpired`,
    defaultMessage: "Your session expired",
  },
  unexpectedError: {
    id: `${scope}.sessionExpired`,
    defaultMessage: "An unexpected error occurred",
  },
  instruction: {
    id: `${scope}.instruction`,
    defaultMessage: "Spotify needs your permission to access your playlists",
  },
  buttonText: {
    id: `${scope}.buttonText`,
    defaultMessage: "Allow at Spotify.com",
  },
});
