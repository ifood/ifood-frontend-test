import styled from 'styled-components';
import { Media } from '../../component/Layout/LayoutConstants';

const Text = styled.h2`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const BannerContainer = styled.div`
  flex-basis: 50%;
  display: none;

  @media (min-width: ${Media.MEDIUM}) {
    display: initial;
  }
`;

const TextContent = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  @media (min-width: ${Media.MEDIUM}) {
    flex-basis: 50%;
  }
`;

export { Text, Image, LoginWrapper, BannerContainer, TextContent };
