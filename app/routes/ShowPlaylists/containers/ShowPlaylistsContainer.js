import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import ShowPlaylistsPage from '../components/ShowPlaylistsPage';

// function mapStateToProps(state) {
//   return {

//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {

//     },
//     dispatch,
//   );
// }

// redux
const reduxConnected = connect(null, null)(ShowPlaylistsPage);
// injects intl from react-intl
const withIntl = injectIntl(reduxConnected);

export default withIntl;
