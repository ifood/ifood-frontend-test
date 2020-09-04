import QueryString from 'query-string';

import {
  SPOTIFY_AUTHORIZATION_PARAMS,
  SPOTIFY_STATE_KEY,
} from '../../Constants';
import { generateRandomString } from '../../utils/StringUtils';

function authorize() {
  const { SPOTIFY_AUTH_RESOURCE, ...params } = SPOTIFY_AUTHORIZATION_PARAMS;
  const state = generateRandomString(16);
  const search = QueryString.stringify({ ...params, state });
  localStorage.setItem(SPOTIFY_STATE_KEY, state);
  window.location.href = `${SPOTIFY_AUTH_RESOURCE}?${search}`;
}

export { authorize };
