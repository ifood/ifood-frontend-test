## SpotiFood

### Como iniciar o projeto

- Rode no terminal `npm install` para instalar as dependências (caso não tenha feito)
- Rode no terminal `npm start`
- Aproveite :)

A aplicação estará rodando em localhost na porta `3000` e o servidor do token estará rodando em paralelo na porta `8888`.

### Aplicação

Foi criado um pequeno servidor de HTTP com Node.js para fazer a requisição ao Spotify e retornar o token de acesso aos dados das APIs.

A aplicação, ao ser inicializada, faz uma requisição ao servidor do token. Esse token quando retornado é gravado no estado e usado nas requisições subsequentes para a Spotify API que retorna os seguintes dados:

- Playlists em destaque
- Lançamentos em destaque
- Categorias de gêneros

A cada 30 segundos, caso não haja nenhuma interação do usuário com a aplicação, uma nova requisição é realizada repetindo todos os passos acima, para atualizar as informações.

Na visualização, cada capa de album, playlist ou categoria possui um link para abrir o Spotify possibilitando tocar as musicas dos albuns e playlists ou visualizar as playlists de uma determinada categoria.

Todas os dados retornados pelas requisições, ficam disponíveis na busca no cabeçalho. Essa busca possibilita a localização de dados por palavra chave e relevância dos termos em cada registro (Ex. Caso a busca seja por "maria", serão exibidos todos os resultados que possuam a palavra "maria", porém se a busca for por "maria bethania", serão exibidos todos os resultados que possuam as palavras "maria" e "bethania" na mesma sequencia ou vice versa)

No cabeçalho, ao lado da imagem de usuário, existe um botão de "Preferências", onde é possível alterar as opções de filtro da API, além de alterar o tema da aplicação para versões clara e escura com ou sem alto contraste..
