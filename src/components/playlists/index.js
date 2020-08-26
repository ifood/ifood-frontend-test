import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Playlists({ list, title }) {
    return (
        <>
            <S.Text>{title}</S.Text>
            {list.map((item, index) => (
                <S.Title key={index}>{ item.name }</S.Title>
            ))}
        </>
    );
}

Playlists.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default Playlists;