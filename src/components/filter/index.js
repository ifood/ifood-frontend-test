import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';


function Filter({ elements }) {
    return (
        <S.Menu>
            {elements.map((item) => (
                <S.Text key={item.id}>{item.name}</S.Text>
            ))}
        </S.Menu>
    );
}

Filter.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default Filter;