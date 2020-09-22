import styled from 'styled-components'

export const Background = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.bomJour };

  display: flex;
`;

export const MusicImage = styled.img`
  width: 30vw;
  margin 0 auto;

  @media screen and (max-width: 900px) {
      display: none;
  }
`

export const Playlist = styled.aside`
  background-color: #fff;
  width: 60vw;

  @media screen and (max-width: 900px) {
    margin: 0 auto;
    width: 90vw;
  }
`;


