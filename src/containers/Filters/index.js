import React, { useEffect, useState } from 'react';

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

  console.log('> filters', filters);
  console.log('> fields', fields);

  const handleFieldChange = (e) => {
    const field = e.target.getAttribute('id');
    const value = {};

    value[field] = e.target.value;
    dispatch({
      type: UPDATE,
      value: { ...filters, ...value },
    });
  };

  return (
    <>
      <p>
        <strong>Filters container</strong>
      </p>
      {fields.map((field) => (
        <div key={field.id} className="form-group">
          <label htmlFor={field.id}>{field.name}</label>
          <input type="text" id={field.id} onChange={handleFieldChange} />
        </div>
      ))}
    </>
  );
};

export default Filters;
