import React, { useMemo, useState } from "react";
import { Container, Profile, Welcome, Message } from "./styles";

import emojis from "../../Utils/emojis";

import ButtonTheme from "./ButtonTheme";
import { useTheme } from "../../Hooks/themes";


const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [spotTheme, setSpotTheme] = useState(() =>
    theme.title === "Spotify" ? true : false
  );

  const handleChangeTheme = () => {
    setSpotTheme(!spotTheme);
    toggleTheme();
  }

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <ButtonTheme labelLeft="Ifood" labelRight="Spotify" checked={spotTheme} onChange={handleChangeTheme} />
      <Profile>
        <Welcome> Olá, {emoji} FoodLover!</Welcome>
        <Message> Que tal um pouco de música?</Message>
      </Profile>
    </Container>
  );
};

export default MainHeader;
