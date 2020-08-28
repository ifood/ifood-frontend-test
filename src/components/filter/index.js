import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Filter({ setFilteredPlaylist, playlists }) {
    const findPlaylist = (term) => {
        const foundItem = playlists.filter((playlist) =>
            playlist.name.toLowerCase().includes(term.toLowerCase())
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