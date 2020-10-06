import React from 'react';
import Loader from '../../../../components/Loader/Loader';
import { IFilters } from '../../../../types';
import './PlaylistFilter.scss';

const PlaylistFilter = ({ filters, loading, onChangeFilters, onChangeInputFilters, onSearch }: any) => {
  if (loading) {
    return <Loader />
  }

  return (
    <div className="playlist-filter">
      <input placeholder="Busque pelo nome..." data-testid="search" onChange={(ev) => onSearch(ev.target.value)} ></input>
      {filters.map((f: IFilters) => (
        <div className="playlist-filter__item" key={f.id}>
          {f.values ? (
            <select data-testid={`select-${f.id}`} onChange={(ev) => onChangeFilters(f.id, ev.target.value)}>
              <option value="">Selecione...</option>
              {f.values.map((op, i) => (
                <option key={i} value={op.value}>{op.name}</option>
              ))}
            </select>
          ) : (
            <input
              placeholder={f.name}
              type={f.validation?.primitiveType === 'INTEGER' ? 'number' : 'datetime-local'}
              max={f.validation?.primitiveType === 'INTEGER' ? f.validation?.max : ''}
              min={f.validation?.primitiveType === 'INTEGER' ? f.validation?.min || 1 : ''}
              onChange={(ev) => onChangeInputFilters(f.id, ev.target.value)}
              data-testid={`input-${f.id}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PlaylistFilter;
