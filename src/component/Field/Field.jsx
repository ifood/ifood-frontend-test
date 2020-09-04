import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

function Field({ label, children, fieldId }) {
  return (
    <Form.Field>
      <label htmlFor={fieldId}>{label}</label>
      {children}
    </Form.Field>
  );
}

Field.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  fieldId: PropTypes.string,
};

export default Field;
