import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Card({
    title,
    description,
    href
 }) {
    return (
        <S.Container>
            <S.Title>{ title }</S.Title>
            <S.Description>{ description }</S.Description>
            <S.Anchor href={href} target="_blank">Click</S.Anchor>
        </S.Container>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Card;