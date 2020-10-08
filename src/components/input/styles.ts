import styled from 'styled-components';
import colors from 'common/colors';

interface IInput {
  heigth?: string;
}

export const Input = styled.input<IInput>`
  width: 100%;
  height: ${(props) => (props.heigth ? props.heigth : '50px')};
  background: #ffffff;
  border: 2px solid ${colors.GRAY_LIGHT};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px 20px;
`;
