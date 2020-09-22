import React from "react";
import { Background, MusicImage, Playlist } from "./styles";
import cellphone from '../../assets/img/svg/cellphone.svg';

const HomePage: React.FC = () => {

  return (
    <Background>
      <Playlist>
        qwe
      </Playlist>
      <MusicImage
        src={cellphone}
      />
    </Background>
  )
}

export default HomePage;
