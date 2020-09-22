import styled from 'styled-components';

interface LogoImageProps {
  width: string;
}

const LogoImage = styled.img<LogoImageProps>`
  width: ${({ width }) => width};
`;

export default LogoImage;
