import React from 'react';

const FieldContainer = ({ name = '', children }) => (
  <div className="form-group">
    { name && <label>{ name }</label> }
    { children }
  </div>
);

export default FieldContainer;