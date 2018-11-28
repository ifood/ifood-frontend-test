import * as api from '../../api/filter';
import * as actions from './actions';
// import locale2 from 'locale2'; TODO: get default locale

export function getConfig() {
  return async dispatch => {
    try {
      const config = await api.getFilterConfig();
      dispatch(actions.fetchFilterConfig(config));
    } catch (err) {
      console.warn('Could not fetch configs. Using default values'); // tslint:disable-line no-console
    }
  };
}
