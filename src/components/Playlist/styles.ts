import styled from 'styled-components';

interface CardProps {
  image?: string;
}

export const PlaylistContainer = styled.section`
  width: 100;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  flex: 1;

  h1 {
    letter-spacing: 1.5px;
    text-align: center;
    font-size: min(40px, 5vw);
  }
`;

export const PlaylistCard = styled.article<CardProps>`
  cursor: pointer;
  width: 320px;
  height: 500px;
  background: transparent;
  margin: 0 10px 20px 10px;
  perspective: 1000px;
  clip-path: polygon(38% 0, 100% 0, 100% 88%, 62% 100%, 0 100%, 0 12%);
  transition: clip-path 0.3s 0.1s;

  div.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transform-style: preserve-3d;
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 62% 100%, 0 100%, 0 12%);

    div.card-inner {
      transform: rotateY(180deg);
    }
  }
`;

export const CardFront = styled.div<CardProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #1e1926;
  padding: 0 20px;
  color: white;
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2,
  p {
    letter-spacing: 1.5px;
    text-align: center;
    font-family: 'Saira';
    color: #3fbea8;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 25px;
  }

  p {
    font-size: 25px;
    font-weight: 700;
  }
`;
