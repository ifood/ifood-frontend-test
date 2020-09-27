import { defineMessage } from 'react-intl';

const messages = {
  validating: {
    id: 'auth.validating',
    defaultMessage: 'Validating Spotify authentication...',
  },

  errors: {
    unknown: {
      id: 'auth.error.unknown',
      defaultMessage: 'An error ocurred! Try login again!',
    },
  },
};

export default defineMessage(messages);
