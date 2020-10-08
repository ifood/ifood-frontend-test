import styled from 'styled-components';
import colors from 'common/colors';
import breakpoints from 'common/breakpoints';

export const Button = styled.button`
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${colors.RED};
  border-radius: 4px;
  border: none;
  font-weight: 600;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${colors.RED};
    color: ${colors.RED};
    background-color: white;
  }

  @media (${breakpoints.LARGE}) {
    cursor: pointer;
  }
`;
