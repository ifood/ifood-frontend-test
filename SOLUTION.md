# Acesse o [Spotifood](https://spotifood.douglasselias.vercel.app) ↗

## Tecnologias usadas:

### [React](https://reactjs.org)

**Obrigatório para o desafio**

React é atualmente uma das mais populares frameworks para desenvolvimento web. Facilita a sincronização entre o estado da aplicação e a interface do usuário.

### [Jest](https://jestjs.io)

Framework simples e poderoso para testes automatizados.

### [TypeScript](https://www.typescriptlang.org)

Um _superset_ do JavaScript que adiciona tipagem estática, com isso melhora a experiência de desenvolvimento por avisar sobre erros e quais os tipos de argumentos uma função aceita.

### [Lodash Debounce](https://lodash.com/docs/4.17.15#debounce)

Uma função para postergar a execução de uma função, especialmente útil em campos de pesquisa que faz uma requisição no servidor.

### [Ant Design](https://ant.design)

Componentes bonitos e fáceis de usar

### [Next.js](https://nextjs.org)

Framework para o React que esconde a complexidade de configurar um projeto React do zero e ainda fornece uma boa estrutura para pastas.

### [Vercel](https://vercel.com)

Hospedagem simples e rápida para sites.

## Estrutura das pastas

### `/pages`

Pasta obrigatória para o Next.js. Contém a página inicial (`index.tsx`) e outros dois arquivos para configurar a tag `head`.

O `index.tsx` tem o estado principal da aplicação. Ele cuida da verificação do usuário logado e renderiza o login ou as playlists.

### `/components`

`FeaturedPlaylists.tsx` recebe um _array_ de playlists para exibir o nome, descrição e imagem de capa. Ao clicar no nome abre uma nova aba no Spotify com a playlist selecionada.

`FilterPlaylists.tsx` contém toda lógica para filtragem das playlists. Utiliza o `useReducer` para controlar o estado dos campos de filtros.
Faz uso do `debounce` na requisição das playlists com tempo de espera baseado no [Limite de Doherty](https://lawsofux.com/doherty-threshold).

Extrai da url o token de acesso e evita fazer requisições que alteram o estado da aplicação caso não tenha o token, evitando assim um vazamento de memória. Para as requisições intervaladas de 30 segundos foi necessário usar o `useRef` para guardar o id do `setInterval` possibilitando o cancelamento da requisição defasada ao alterar um campo de filtro.

`InvaliTokenAlert.tsx` exibe um alerta para o usuário realizar o login no Spotify.

`LoginSpotify.tsx` exibe um link para o usuário realizar o login no Spotify. Cuida também da verificação do ambiente da aplicação para redirecionar a url correta.

`SpotifoodLogo.tsx` logo feito por mim no [Inkscape](https://inkscape.org), utilizando uma mescla dos logos do Spotify e iFood.

### `/data`

`fetchURL.ts` embrulha o método `fetch` e faz um tratamento de erro simples de código 400 e 401.

`playlistFilter.ts` contém o método para requisição dos valores dos filtros e métodos para transformação desses valores para serem exibidos na interface. Aplica também um _patch_ no [valor do país.](https://github.com/ifood/ifood-frontend-test/issues/18)

`playlists.ts` contém o método para requisição das playlists e um método para filtragem por nome das playlists.

### `/utils`

Todos os arquivos nesta pasta contém testes.

`accessToken.ts` contém o método que extrai o token de acesso de uma url.

`queryParams.ts` contém o método que transforma um objeto em _query string_ para ser usado na url.

`timestamp.ts` contém dois métodos para lidar com os dois valores de data e hora da interface e transformar em _timestamp_ para a requisição das playlists.

### `/.github`

`main.yml` configuração do Github Actions. Executa os testes ao fazer um _push_ na master ou ao fazer um _merge_ na master.

## Executar o código

- Clone o repositório.
- Execute `npm i` para instalar as dependências.
- Execute `npm start` para iniciar o servidor de desenvolvimento.
- Abra no navegador essa url: http://localhost:3000
- Opcional: Execute `npm test` para ver os testes
