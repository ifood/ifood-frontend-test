import React from "react";
import {Aside} from './styles';

const AsideLeft: React.FC = () => {
  return (
    <Aside>
      <aside>
        <div>
          <header>
            <h2>Escolha uma musica enquanto espera sua comidar chegar</h2>
          </header>
          <footer>
            <strong>IFood</strong>
            <span> Sempre pensado em você !</span>
          </footer>
        </div>
      </aside>
    </Aside>
  );
};

export default AsideLeft;
