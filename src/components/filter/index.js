import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as FilterService from '../../services/filter';

import * as S from './styles';

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

    const _mountParam = (event) => {
        _concatParams(`&`+ event.target.id + `=` + event.target.value);
    };

    const _concatParams = (result) => {
        setParameters(parameters.concat(result));
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
            {filters.length > 0 && filters.map((item) => item.values && (
                <S.Filter key={item.id}>
                    <S.Name>{item.name}</S.Name>
                    <S.Select id={item.id} onChange={_mountParam} defaultValue="Selecionar">
                        <S.Option value="Selecionar" disabled hidden>Selecionar</S.Option>
                        {item.values.map((option) => (
                            <S.Option key={option.value} value={option.value}>{option.name}</S.Option>
                        ))}
                    </S.Select>
                </S.Filter>
            ))}
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