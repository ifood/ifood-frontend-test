import React, { useEffect, useState } from 'react';

import FilterField from '../../components/FilterField';

import { getFilters } from '../../services/filter';
import { UPDATE } from '../../stores/reducers/filters';
import { useStateValue } from '../../stores';

const Filters = () => {
  const [{ filters }, dispatch] = useStateValue();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      const response = await getFilters();
      setFields(response);
    };

    fetchFilters();
  }, []);

  const handleFieldChange = ({ field, value }) => {
    const values = {};
    values[field] = value;
    dispatch({
      type: UPDATE,
      value: { ...filters, ...values },
    });
  };

  return (
    <>
      <p>
        <strong>Filters container</strong>
      </p>
      {fields.map((field) => (
        <FilterField
          key={field.id}
          field={field}
          value={filters[field.id]}
          onChange={handleFieldChange}
        />
      ))}
    </>
  );
};

export default Filters;
