import React, { useState, useEffect } from 'react';
// import constructRequest from '../../helpers/fetch';
// import styles from './filter.module.css';
import fetch from 'unfetch';
import Input from '../../shared/Input'
import Select from '../../shared/Select'
import shortid from 'shortid'
// import Multiple from '../../shared/Multiple'

const filterApiUrl = process.env.REACT_APP_FILTER_API_URL;

const FieldContainer = ({ name = '', children }) => (
  <div className="form-group">
    { name && <label>{ name }</label> }
    { children }
  </div>
)

const FieldsContainer = ({ fields = [] }) => {
  if (!fields.length) return null;
  return fields.map(field => {
    const filterItem = field.values ?
      <Select id={field.id} values={field.values} /> :
      <Input id={field.id} type={field.validation.primitiveType} />;
    return (
      <FieldContainer name={field.name} key={shortid()}>
        { filterItem }
      </FieldContainer>
    )
  });
}

const Filter = (props) => {

  const playlistName = '';
  const [apiFields, setApiFields] = useState([]);

  useEffect(() => {
    async function fetchApiFields() {
      const result = await fetch(filterApiUrl, { method: 'GET' });
      const { filters = [] } = await result.json();
      setApiFields(filters);
    }
    fetchApiFields();
  }, [])

  const onFilterSubmit = (ev) => {
    ev.preventDefault();
    console.log('enviando...')
  }

  return (
    <form onSubmit={onFilterSubmit}>
      <h3>Buscar playlist</h3>
      <FieldContainer name="Buscar por nome...">
        <Input type="text" name="playlistName" value={playlistName} />
      </FieldContainer>
      <FieldsContainer fields={apiFields} />
      <FieldContainer>
        <button className="btn btn-outline-primary">
          Filtrar
        </button>
      </FieldContainer>
    </form>
  )
}

export default Filter;