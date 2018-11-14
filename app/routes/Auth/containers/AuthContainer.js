import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { injectIntl } from 'react-intl';
import Auth from '../components/Auth';
import { setupToken, getAuthStore } from '../modules/AuthRedux';

function mapStateToProps(state) {
  return getAuthStore(state);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setupToken }, dispatch);
}

// redux
const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(Auth);
// injects intl from react-intl
const withIntl = injectIntl(reduxConnected);
// injects match and history props from react-router
const routed = withRouter(withIntl);

export default routed;
