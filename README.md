# SpotiFood

Create a web application called Spotifood used to display the preferred playlists from customers. The web application has only one page:

- A page that lists the featured playlists at Spotify according to some criteria.

## Business rules

- The page is composed of two components:
  - One list of featured playlists
  - One filter component with API filter fields and one local search text input to filter the playlists by "name".
- The filter component should be used to filter the elements displayed by the list of featured playlists.
- The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]** (http://www.mocky.io/v2/5a25fade2e0000213aa90776)
- The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]** (https://developer.spotify.com/web-api/get-list-featured-playlists/)
- Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
- Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.

## Hints or Constraints

We will use one API from Spotify Web API. You should follow the Spotify guide in order to create a token needed to access Spotify's API.
To mount the API filter fields on the filter component, you **must** consume the API that provides the metadata about the fields (Link 1).
You could use Material UI, Bootstrap or any other toolkit to accelerate your resolution. We will not provide any UI prototype or design.

## Non functional requirements

As this application will be a worldwide success, it must be prepared to be accessible, responsive, fault tolerant and resilient.
We **strongly recommend** using React to build the application.
Also, briefly elaborate on your solution architecture details, choice of patterns and frameworks.
Fork this repository and submit your code.

### DEV Notes

Todos os pontos do desafio proposto foram implementados.
Abaixo falarei um pouco sobre o desenvolvimento.

<!-- show case/gif section -->
<p align="center">
    <img alt="login.gif" height="450" src="https://media.giphy.com/media/1ZkJudCIp2CFQSQkGa/giphy.gif" />
    <img alt="filter.gif" height="450" src="https://media.giphy.com/media/RJhdOA2Ua8nMqJrOuw/giphy.gif" />
    <img alt="invalid-access.gif" height="450" src="https://media.giphy.com/media/5txxSZL2FSgw8H12xQ/giphy.gif" />
</p>
<!-- show case/gif section END -->

### Versão do node e npm utilizada?

| name | version |
| :--- | :-----: |
| node | 8.10.0  |
| npm  |  5.6.0  |

## Tech Stack

- [React](https://reactjs.org/)

## Libs usadas

- [react-router-dom](https://reacttraining.com/react-router/)
- > Nota: Navegação entre as páginas da aplicação.
- [redux](https://redux.js.org/)
- > Nota: Gerenciamento de estado da aplicação
- [react-redux](https://react-redux.js.org/)
- > Nota: Para conectar o React com o Redux permitindo que os componentes leiam e mandem ações para modificar o estado da aplicação
- [react-bootstrap](https://react-bootstrap.github.io/)
- > Nota: Permite a utilização de componentes do Bootstrap na aplicação
- [moment](https://momentjs.com/)
- > Nota: Para manipulação de data e tempo

### Rodando o projeto localmente

- `git clone https://github.com/pedrojsn96/ifood-frontend-test.git`
- `npm i`
- `npm start`
  <br/>

### Demo

http://spotifood-p.herokuapp.com/

<br/>

> Nota: Problemas? Vamos fazer juntos então 😄! pjsn@cin.ufpe.br 📧.

<br/>

<!-- about me -->
