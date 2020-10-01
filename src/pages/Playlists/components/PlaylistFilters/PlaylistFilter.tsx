import React from 'react';
import { IFilters } from '../../../../types';

import './PlaylistFilter.scss';

const PlaylistFilter = ({ filters }: any) => {
  return (
    <div className="playlist-filter">
      <input placeholder="Pesquisar..."></input>
      {filters.map((f: IFilters) => (
        <div className="playlist-filter__item" key={f.id}>
          {f.values ? (
            <select>
              <option value="">Selecione...</option>
              {f.values.map((op, i) => (
                <option key={i} value={op.value}>{op.name}</option>
              ))}
            </select>
          ) : (
            <input placeholder={f.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PlaylistFilter;
