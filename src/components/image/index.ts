import styled from 'styled-components';

interface IImage {
  width?: string;
  height?: string;
}

export const Image = styled.img<IImage>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
