import React from 'react';
import style from './filter.module.css';
import DynamicFields from './DynamicFields';
import FieldContainer from '../shared/FieldContainer';
import Input from '../shared/Input';

const Filter = ({
  onSubmit,
  onFieldChange,
  formData,
  apiFields
}) => {
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <h3 className={style.title}>Buscar playlist</h3>
      <FieldContainer name="Nome">
        <Input
          type="text"
          name="playlistName"
          value={formData.playlistName}
          onChange={onFieldChange}
          placeholder="Digite o nome"
        />
      </FieldContainer>
      <DynamicFields
        fields={apiFields}
        onChange={onFieldChange}
        formData={formData}
      />
      <FieldContainer>
        <button className="btn btn-primary">
          Filtrar
        </button>
      </FieldContainer>
    </form>
  )
}

export default Filter;