import React, { useState, useEffect } from 'react';
// import constructRequest from '../../helpers/fetch';
// import styles from './filter.module.css';
import fetch from 'unfetch';
import Input from '../../shared/Input'
import Select from '../../shared/Select'
// import Multiple from '../../shared/Multiple'

const filterApiUrl = process.env.REACT_APP_FILTER_API_URL;

const FieldContainer = ({ name = '', children }) => (
  <div className="form-group">
    { name && <label>{ name }</label> }
    { children }
  </div>
)

const DynamicFields = ({
  fields = [],
  onChange,
  formData
 }) => {
  if (!fields.length) return null;
  return fields.map(field => {
    const filterItem = field.values ?
      <Select
        values={field.values}
        name={field.id}
        onChange={onChange}
        selectedValue={formData[field.id]}
      /> :
      <Input
        validations={field.validation}
        type={field.validation.primitiveType}
        name={field.id}
        onChange={onChange}
        value={formData[field.id]}
      />;
    return (
      <FieldContainer name={field.name} key={field.id}>
        { filterItem }
      </FieldContainer>
    )
  });
}

const filterListToObj = filters => filters.reduce((acc, curr) => ({
  ...acc,
  [curr.id]: ''
}), {})

const Filter = (props) => {

  const [formData, setFormData] = useState({});
  const [apiFields, setApiFields] = useState([]);

  useEffect(() => {
    async function fetchApiFields() {
      const result = await fetch(filterApiUrl, { method: 'GET' });
      const { filters = [] } = await result.json();
      setApiFields(filters);
      const objFilters = filterListToObj(filters);
      setFormData({
        ...objFilters,
        playlistName: ''
      });
    }
    fetchApiFields();
  }, [])

  const onFilterSubmit = (ev) => {
    ev.preventDefault();
    console.log('enviando... %o', formData);
  }

  const onFieldChange = ev => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    });
  }

  return (
    <form onSubmit={onFilterSubmit}>
      <h3>Buscar playlist</h3>
      <FieldContainer name="Buscar por nome...">
        <Input
          type="text"
          name="playlistName"
          value={formData.playlistName}
          onChange={onFieldChange}
        />
      </FieldContainer>
      <DynamicFields
        fields={apiFields}
        onChange={onFieldChange}
        formData={formData}
      />
      <FieldContainer>
        <button className="btn btn-outline-primary">
          Filtrar
        </button>
      </FieldContainer>
    </form>
  )
}

export default Filter;