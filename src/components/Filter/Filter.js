import React from 'react';
import style from './filter.module.css';
import DynamicFields from '../shared/DynamicFields';
import FieldContainer from '../shared/FieldContainer';
import Input from '../shared/Input';

const Filter = ({
  onSubmit,
  onFieldChange,
  formData,
  onNameChange,
  playlistName,
  apiFields
}) => {
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <h3 className={style.title}>Buscar playlist</h3>
      <FieldContainer name="Nome">
        <Input
          type="text"
          name="playlistName"
          value={playlistName}
          onChange={onNameChange}
          placeholder="Digite o nome"
        />
      </FieldContainer>
      <DynamicFields
        fields={apiFields}
        onChange={onFieldChange}
        formData={formData}
      />
    </form>
  )
}

export default Filter;