## Scripts

Para executar este projeto, é necessário ter o Yarn instalado. Caso utilize um macOS, basta executar o seguinte comando:
`brew install yarn`

Com o Yarn instalado, existem 2 comandos que podem ser utilizados dentro do diretório do projeto.

### `yarn && yarn start`

Instala todas as dependências e executa a aplicação em modo de desenvolvimento

### `yarn test`

Executa a rotina de testes feitas dentro da aplicação, mostrando quantos testes foram ou não executados com êxito

## Bibliotecas

Foram utilizadas as seguintes bibliotecas neste projeto:

- Styled Components

Biblioteca que mescla a utilização do ES6 com CSS na estilização dos componentes, muitas vezes nem sendo necessário criar um arquivo separado para isso.

- RecoilJS

Biblioteca de gerenciamento de estado. Funciona como um estado global da aplicação, facilitando com que diferentes partes do projeto possam interagir com seus 'atoms'

- Prop Types

Check de tipagens realizadas em tempo de execução. Utilizada para especificar oque um componente e/ou uma função espera quando chamados.

- Antd

Biblioteca de UI utilizada para criação de interfaces, com o objetivo de faciltar o processo de criação através da utilização de diferentes componentes de alta qualidade.

- React Testing Library

Biblioteca que auxilia no desenvolvimento de testes para componentes React, preocupando-se apenas em como ele deveria funcionar e não em como ele foi implementado
