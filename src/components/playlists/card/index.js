import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Card({
    key,
    title,
    description,
    href
 }) {
    return (
        <S.Container id={key}>
            <S.Title>{ title }</S.Title>
            <S.Description>{ description }</S.Description>
            <S.Anchor href={href} target="_blank">Click</S.Anchor>
        </S.Container>
    );
}

Card.propTypes = {
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Card;