import { defineMessages } from "react-intl";

export const scope = "containers.Playlists";

export default defineMessages({
  hideFilters: {
    id: `${scope}.hideFilters`,
    defaultMessage: "Hide filters",
  },
  expandFilters: {
    id: `${scope}.expandFilters`,
    defaultMessage: "Expand filters",
  },
  contentAriaLAbel: {
    id: `${scope}.contentAriaLAbel`,
    defaultMessage: "Playlist explorer",
  },
});
