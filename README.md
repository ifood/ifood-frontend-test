# Introdução

Esse é um projeto que foi feito para o teste de front-end do ifood. O app é uma página web que chama Spotifood, que consome a API do Spotify para listar as playlists preferidas dos clientes do ifood e podendo ser filtradas para melhor busca.

## Solução
Para construir a página da web, foi utilizado React e utlizando o template de Typescript do create-react-app na versão 16.13.1, utilização dos hooks pra ter uma performace melhor e styled components pra uma melhor componentizacao do CSS e dos elementos da tela.

# Rodar projeto localmente

- Clonar repositório com o comando **https://github.com/JonasTeixeira42/ifood-frontend-test.git**

- Entrar na pasta com o comando **cd cd ifood-frontend-test**

- Instalar aplicação com o comando **yarn install**

- Requisições na API do Spotify requer um token, só que ele possui duração de uma hora, como não conseguir atualizar o token automaticamente, vai ser necessário gerar um novo.

- Parar gerar um token, rodar o comando:
**curl -X "POST" -H "Authorization: Basic YTQ0NWE2MWIwNzY0NGEwNmE2MzIzNzAyYzgyMWFjNDY6YWNkNDQ2MWNjMzVlNGE1YzgwNDU0Y2FkYmQxZDU3NWI=" -d grant_type=client_credentials https://accounts.spotify.com/api/token**

- O comando retorna um JSON como a estrutura abaixo:
```json
{
   "access_token": "NgCXRKc...MzYjw",
   "token_type": "bearer",
   "expires_in": 3600,
}
```

- Copiar o conteúdo do access_token

- Colar no arquivo [API](src/services/api.ts) como valor de **Authorization**

- Rodar projeto com o comando **yarn start**

## Ferramentas utilizadas

- Typescript
- Date-fns
- Styled-components
- axios
- polished
- react-springs
- uuidv4
