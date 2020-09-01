import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Select({ defaultValue, id, mountParam, values }) {
    return (
        <S.Select defaultValue={defaultValue} id={id} onChange={mountParam}>
            <S.Option value={defaultValue} disabled hidden>{defaultValue}</S.Option>
            {values.map((option) => (
                <S.Option key={option.value} value={option.value}>{option.name}</S.Option>
            ))}
        </S.Select>
    );
}

Select.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    mountParam: PropTypes.func.isRequired,
    values: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Select;