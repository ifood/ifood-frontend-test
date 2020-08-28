import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as FilterService from '../../services/filter';

import * as S from './styles';

function Filter({ playlists, setFilteredPlaylist }) {
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const _getDataFilter = async () => {
          const response = await FilterService.getFilters();
          setFilters(response.filters);
        }

        _getDataFilter();
    }, []);

    const findPlaylist = (termToFind) => {
        const foundItem = playlists.filter((playlist) =>
            playlist.name.toLowerCase().includes(termToFind.toLowerCase())
        );
        setFilteredPlaylist(foundItem);
    }

    const handleChange = (event) => {
        findPlaylist(event.target.value);
    };

    return (
        <S.Menu>
            <S.Search 
                id="search" 
                name="search" 
                onChange={handleChange}
                placeholder="O que você deseja ouvir?"
                type="search" 
            />
        </S.Menu>
    );
}

Filter.propTypes = {
    playlists: PropTypes.array.isRequired,
    setFilteredPlaylist: PropTypes.func.isRequired,
};

export default Filter;