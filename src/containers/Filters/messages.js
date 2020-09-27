import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'filters.title',
    defaultMessage: 'Filter by:',
  },

  fields: {
    locale: {
      id: 'filters.fields.locale',
      defaultMessage: 'Locale',
    },
    country: {
      id: 'filters.fields.country',
      defaultMessage: 'Country',
    },
    timestamp: {
      id: 'filters.fields.timestamp',
      defaultMessage: 'Date',
    },
    limit: {
      id: 'filters.fields.limit',
      defaultMessage: 'Limit',
    },
    offset: {
      id: 'filters.fields.offset',
      defaultMessage: 'Offset',
    },
  },
};

export default defineMessage(messages);
