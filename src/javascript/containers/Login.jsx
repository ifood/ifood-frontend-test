import { connect } from "react-redux";
import spotifyActions from "../actions/spotify";
import Login from "../components/Login";

function mapStateToProps(state) {
  return {
    accessToken: state.spotify.accessToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAccessToken: token => dispatch(spotifyActions.setAccessToken(token)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
