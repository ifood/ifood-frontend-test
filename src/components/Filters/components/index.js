/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Amount from './Amount';
import DatePicker from './DatePicker';
import Page from './Page';
import SelectCountry from './SelectCountry';
import SelectLocale from './SelectLocale';

const locale = (props) => <SelectLocale {...props} />;
const timestamp = (props) => <DatePicker {...props} />;
const offset = (props = {}) => <Page {...props} />;
const country = (props) => <SelectCountry {...props} />;
const limit = (props) => <Amount {...props} />;

export default { locale, timestamp, offset, country, limit };
