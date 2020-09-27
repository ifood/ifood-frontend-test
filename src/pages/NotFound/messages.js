import { defineMessage } from 'react-intl';

const messages = {
  error: {
    id: 'notFound.error',
    defaultMessage: 'Error',
  },

  message: {
    id: 'notFound.errorMessage',
    defaultMessage: 'An error ocurred. Please try again later.',
  },

  backButton: {
    id: 'notFound.backButton',
    defaultMessage: 'Back to Home',
  },
};

export default defineMessage(messages);
