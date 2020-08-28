import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Filter({ handleChange }) {
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
    handleChange: PropTypes.func.isRequired,
};

export default Filter;