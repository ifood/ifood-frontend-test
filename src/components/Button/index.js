import React from 'react';
import PropTypes from 'prop-types';
import { Button as UIButton, SHAPE, SIZE } from 'baseui/button';

const Button = ({ type, value, onClick, loading, startEnhancer }) => (
  <UIButton
    type={type}
    onClick={onClick}
    shape={SHAPE.pill}
    size={SIZE.large}
    isLoading={loading}
    startEnhancer={startEnhancer}
  >
    {value}
  </UIButton>
);

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  startEnhancer: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  loading: false,
  startEnhancer: null,
};

export default Button;
