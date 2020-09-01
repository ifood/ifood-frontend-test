import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Card({
    background,
    description,
    href,
 }) {
    const _openPlaylist = () => (
        window.open(href, '_blank')
    );

    return (
        <S.Container onClick={_openPlaylist}>
            <S.Banner src={background} />
            <S.Description>{ description }</S.Description>
        </S.Container>
    );
}

Card.propTypes = {
    background: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Card;