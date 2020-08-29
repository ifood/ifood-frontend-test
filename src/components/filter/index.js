import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as FilterService from '../../services/filter';

import * as S from './styles';

import Select from './select';
import Input from './input';

function Filter({ parameters, playlists, setFilteredPlaylist, setParameters }) {
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const _getDataFilter = async () => {
          const response = await FilterService.getFilters();
          setFilters(response.filters);
        }

        _getDataFilter();
    }, []);

    const _findPlaylist = (termToFind) => {
        const foundItem = playlists.filter((playlist) =>
            playlist.name.toLowerCase().includes(termToFind.toLowerCase())
        );
        setFilteredPlaylist(foundItem);
    }

    const _handleChange = (event) => {
        _findPlaylist(event.target.value);
    };

    const mountParam = (event) => {
        let property = event.target.id;
        let value = event.target.value;

        if(parameters.includes(property)) {
            return setParameters(parameters.replace(/[a-z]*=(\w+)/g, `${property}=${value}`));
        }

        setParameters(`${parameters}&${property}=${value}`);
    };

    const resetParameters = () => {
        setParameters(`?`);
    };

    return (
        <S.Menu>
            <S.Search 
                id="search" 
                name="search" 
                onChange={_handleChange}
                placeholder="O que você deseja ouvir?"
                type="search" 
            />

            {filters.length > 0 && filters.map((item) => (
                <S.Filter key={item.id}>
                    <S.Name>{item.name}</S.Name>

                    {item.values && (
                        <Select 
                            defaultValue="Selecionar"
                            id={item.id}
                            mountParam={mountParam}
                            values={item.values}
                        />
                    )}

                    {item.validation && (
                        <Input
                            defaultValue={item.id !== 'timestamp' ? 1 : null}
                            id={item.id}
                            max={item.validation.max}
                            min={item.validation.min}
                            mountParam={mountParam}
                            type={item.validation.primitiveType === 'INTEGER' ? 'number' : 'datetime-local'}
                        />
                    )}
                </S.Filter>
            ))}
            <S.ResetButton onClick={resetParameters}>Resetar Filtros</S.ResetButton>
        </S.Menu>
    );
}

Filter.propTypes = {
    parameters: PropTypes.string.isRequired,
    playlists: PropTypes.array.isRequired,
    setFilteredPlaylist: PropTypes.func.isRequired,
    setParameters: PropTypes.func.isRequired,
};

export default Filter;
