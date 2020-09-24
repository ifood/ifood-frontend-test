import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styles';

const Button = ({ type, value, onClick }) => (
  <ButtonWrapper type={type} onClick={onClick}>
    {value}
  </ButtonWrapper>
);

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
};

export default Button;
