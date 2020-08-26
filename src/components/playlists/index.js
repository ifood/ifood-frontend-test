import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

import * as S from './styles';

function Playlists({ list, title }) {
    return (
        <S.Container>
            <S.Text>{title}</S.Text>
            {list.map((item) => (
                <Card 
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    href={item.external_urls.spotify}
                />
            ))}
        </S.Container>
    );
}

Playlists.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default Playlists;