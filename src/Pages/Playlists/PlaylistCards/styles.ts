import styled, { keyframes } from 'styled-components';

interface IShimmerProps {
  loaded: boolean;
}

export const shimmerAnimation = keyframes`
  to {
    left: 100%;
    transform: translateX(0);
  }
`;

export const Container = styled.a<IShimmerProps>`
  position: relative;
  display: block;
  border-radius: 14px;
  overflow: hidden;
  min-height: 130px;

  background-color: rgba(0, 0, 0, .1);

  &::before {
    content: '';
    
    display: ${({ loaded }) => (loaded ? 'none' : 'block')};

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    width: 48px;
    background-color: rgba(255, 255, 255, .24);
    animation: ${shimmerAnimation} 500ms linear infinite;
    transform: translateX(-100%);
  }
`;

export const Image = styled.img<IShimmerProps>`
  max-width: 100%;
  display: ${({ loaded }) => (loaded ? 'block' : 'none')};
`;

export const InfoText = styled.div`
  color: #ffffff;
  opacity: 0;
  z-index: 2;
  position: relative;
  padding: 16px;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: 50%;
    background-color: #EA1D2C;
    transition: 180ms ease-in-out;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(2);
    }

    ${InfoText} {
      transition: 180ms 100ms ease-in-out;
      opacity: 1;
    }
  }
`;

export const Name = styled.div`
  font-size: 16px;
`;

export const Description = styled.div`
  font-size: 12px;
  margin-top: 6px;
  
  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

