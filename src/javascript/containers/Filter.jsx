import { connect } from "react-redux";
import filterActions from "../actions/filters";
import spotifyActions from "../actions/spotify";
import Filter from "../components/Filter";

function mapStateToProps(state) {
  return {
    accessToken: state.spotify.accessToken,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFilters: () => dispatch(filterActions.getFilters()),
    setFilter: (field, value) =>
      dispatch(filterActions.setFilter(field, value)),
    fetchPlaylists: (accessToken, filters) =>
      dispatch(spotifyActions.fetchFeaturedPlaylists(accessToken, filters)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
