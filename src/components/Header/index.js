import React, { useState } from "react";

import spotifood from "../../assets/images/ifood-smile.svg";
import filter from "../../assets/images/filter.svg";
import { Container, Brand, Image, Title, FilterButton } from "./styles.js";
import FilterPlaylist from "../FilterPlaylist";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <Container>
        <Brand>
          <Image src={spotifood} alt="Spotifood" />
          <Title>Spotifood</Title>
        </Brand>

        <FilterButton
          aria-label={isVisible ? "Fechar Filtro" : "Abrir Filtro"}
          src={filter}
          alt="filter image"
          role="button"
          tabIndex="0"
          title="Filtro"
          onClick={() => setIsVisible(!isVisible)}
          active={isVisible}
        />
      </Container>

      {isVisible && (
        <FilterPlaylist active={isVisible} setIsVisible={setIsVisible} />
      )}
    </div>
  );
};

export default Header;
