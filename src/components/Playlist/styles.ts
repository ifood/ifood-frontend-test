import styled from 'styled-components';

const Container = styled.a`
  position: relative;
  display: block;
  border-radius: 14px;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  display: block;
`;

const InfoText = styled.div`
  color: #ffffff;
  opacity: 0;
  z-index: 2;
  position: relative;
  padding: 16px;
`;

const Info = styled.div`
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

const Name = styled.div`
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 12px;
  margin-top: 6px;
  
  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export {
  Container,
  Image,
  Info,
  InfoText,
  Name,
  Description,
};
