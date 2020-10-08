import styled from 'styled-components'; //eslint-disable-line

interface IWrapper {
  height?: string;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height : '100vh')};
  padding: 20px;
`;
