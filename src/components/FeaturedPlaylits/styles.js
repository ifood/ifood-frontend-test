import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 4rem;
  margin-top: 80px;

  @media (max-width: 330px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding-bottom: 4rem;
`;

export const FilterByName = styled.input`
  color: #000;
  padding: 2rem;
  height: 40px;
  width: 50%;
  border: 0;
  border-radius: 8px;
  text-overflow: ellipsis;
  outline: none;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  justify-self: center;

  @media(max-width: 450px){
    width: 100%;
  }
}
`;

export const Playlists = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 28rem));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
`;

export const PLaylistImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const PlayerImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
`;

export const Playlist = styled.li`
  list-style-type: none;
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
  box-shadow: 1px 1px 16px -2px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  :hover ${PLaylistImage} {
    opacity: 0.4;
    transition: 0.3s ease;
  }

  :hover ${PlayerImage} {
    transition: all 0.3s ease;
    opacity: 1;
  }
`;
