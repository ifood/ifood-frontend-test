import React, { useEffect, useState } from 'react';
import api from '../../services/api/filters';
import { IFilter } from '../../_models';
import Input from '../Input';
import Select from '../Select';
import { Container } from './styles';

const Filters = () => {
  const [fields, setFields] = useState([] as IFilter[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const {
        data: { filters = [] },
      } = await api.get('/');
      setLoading(false);
      setFields(filters);
    };

    fetchData();
  }, []);

  const handleInputChange = ({ target: { value = '' } }) => {
    console.log('Event Change', value);
    // TODO dispatch
  };
  return (
    <Container>
      {loading && <div>loading...</div>}
      {fields &&
        fields.map(field => {
          if (field.values) {
            return (
              <div key={field.id}>
                <Select
                  label={field.name}
                  onChange={handleInputChange}
                  options={field.values}
                ></Select>
              </div>
            );
          }
          return (
            <div key={field.id}>
              <Input label={field.name} onChange={handleInputChange}></Input>
            </div>
          );
        })}
    </Container>
  );
};

export default Filters;
