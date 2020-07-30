export default {
  application: {
    name: 'Spotifood',
    shortDescription: 'spotifood',
    title: 'Spotifood - As melhores playlists dos nossos clientes',
    version: {
      title: 'Versão',
      number: '1.0.0',
    },
    footer: {
      poweredBy: 'Powered by',
      poweredByBrand: 'Gabriel Longatti',
      poweredByBrandUrl: 'https://www.linkedin.com/in/glongatti/',
    },
  },
  components: {
    header: {
      title: 'As playlists mais quentes estão bem aqui!',
    },
    advancedFilter: {
      placeholders: {
        searchByName: 'Buscar por nome',
      },
    },
    featuredPlaylists: {
      content: {
        empty: 'Nenhum resultado encontrado, altere os filtros e tente novamente.',
      },
    },
  },
  routes: {
    login: {
      url: '/login',
      pageTitle: 'Seja bem-vindo ao Spotifood, aqui você encontrará as melhores playlists,'
      + ' faça o seu acesso para continuar',
      spotifyButton: 'Login com Spotify',
    },
    home: {
      url: '/',
      pageTitle: 'As playlists em destaque, estão aqui!',
      spotifyButton: 'Login com Spotify',
    },
  },
};
