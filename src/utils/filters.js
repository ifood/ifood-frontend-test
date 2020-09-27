import { createIntl, createIntlCache } from 'react-intl';

import intlService from '../services/i18n';

const cache = createIntlCache();
const intl = createIntl(intlService, cache);

export const getFiltersIntl = (filters, messages) => {
  const { fields } = messages;

  return filters.map((item) => {
    const filter = item;

    if (fields[filter.id]) {
      filter.name = intl.formatMessage(fields[filter.id]);
    }

    return filter;
  });
};

export const getValidFilters = (filters) => {
  const result = {};

  Object.keys(filters).forEach((key) => {
    if (filters[key].length) {
      result[key] = filters[key];
    }
  });

  return result;
};
