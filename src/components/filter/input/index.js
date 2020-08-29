import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Input({ defaultValue, id, max, min, mountParam, type }) {
    return (
        <S.Input 
            defaultValue={defaultValue}
            id={id}
            max={max}
            min={min}
            name={id}
            onChange={mountParam}
            type={type}
        />
    );
}

Input.propTypes = {
    defaultValue: PropTypes.number,
    id: PropTypes.string.isRequired,
    max: PropTypes.number,
    min: PropTypes.number,
    mountParam: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

Input.defaultProps = {
    min: 0,
};

export default Input;