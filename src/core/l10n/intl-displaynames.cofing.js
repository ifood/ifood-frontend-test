/* eslint-disable global-require */

import { shouldPolyfill } from '@formatjs/intl-displaynames/should-polyfill';

if (shouldPolyfill()) {
  require('@formatjs/intl-displaynames/polyfill');
  require('@formatjs/intl-displaynames/locale-data/en');
}
