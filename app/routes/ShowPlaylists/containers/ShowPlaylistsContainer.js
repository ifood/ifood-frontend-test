import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import ShowPlaylistsPage from '../components/ShowPlaylistsPage';
import { getAuthStore } from '../../Auth/modules/AuthRedux';

function mapStateToProps(state) {
  const auth = getAuthStore(state);
  const token = auth ? auth.token : '';

  return {
    token,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {

//     },
//     dispatch,
//   );
// }

// redux
const reduxConnected = connect(mapStateToProps, null)(ShowPlaylistsPage);
// injects intl from react-intl
const withIntl = injectIntl(reduxConnected);

export default withIntl;
