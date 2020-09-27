import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpinnerNext, SIZE } from 'baseui/spinner';

import { colors } from '../../styles/theme';

const LoadingSpinner = ({ size }) => (
  <StyledSpinnerNext $size={SIZE[size]} color={colors.action.primary} />
);

LoadingSpinner.propTypes = {
  size: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  size: 'medium',
};

export default LoadingSpinner;
