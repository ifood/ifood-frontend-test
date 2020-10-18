/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Amount from './Amount';
import DatePicker from './DatePicker';
import Page from './Page';
import SelectCountry from './SelectCountry';
import SelectLocale from './SelectLocale';

const locale = (props, setFilter) => (
  <SelectLocale {...props} onChange={setFilter} />
);
const timestamp = (props, setFilter) => (
  <DatePicker {...props} onChange={setFilter} />
);
const offset = (props, setFilter) => <Page {...props} onChange={setFilter} />;

const country = (props, setFilter) => (
  <SelectCountry {...props} onChange={setFilter} />
);
const limit = (props, setFilter) => <Amount {...props} onChange={setFilter} />;

export default { locale, timestamp, offset, country, limit };
