import { connect } from "react-redux";
import FeaturedPlaylists from "../components/FeaturedPlaylists";
import spotifyActions from "../actions/spotify";

function mapStateToProps(state) {
  return {
    accessToken: state.spotify.accessToken,
    playlists: state.spotify.playlists,
    filters: state.filters.values,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFeaturedPlaylists: (accessToken, filters) =>
      dispatch(spotifyActions.fetchFeaturedPlaylists(accessToken, filters)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedPlaylists);
