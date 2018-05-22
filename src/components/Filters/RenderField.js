import React from 'react';

import {
  locale,
  country,
  timestamp,
  limit,
} from '../../constants/filters';

const RenderField = ({ id, values, validation }) => {
  switch (id) {
    case locale:
    case country:
      return ((
        <select>
          {
            values.map(option => ((
              <option key={option.value} value={option.value}>{option.name}</option>
            )))
          }
        </select>
      ));
    case timestamp:
      return ((
        <input type="date" />
      ));
    case limit:
      return ((
        <input type="number" min={validation.min} max={validation.max} />
      ));
    default:
      return null;
  }
};

export default RenderField;
