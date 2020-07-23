export default {
  header: {
    basic: 'NzI0NjE0ZjBjODU4ZmQ1ZDNmNDYwZjYxZTRlNWE3YzM6ZTBjMmU4YjE4MmRiZjQ5Nzg1ZDY4MjU1Zjc4YWQzOTY2Nzg1OTM1MzFlMGI4Y2Y0YThhZTllZDg3YTc2NTM2OA==', // eslint-disable-line
    platform: 'web',
    version: '1.0.0',
  },
  timezone: 'America/Sao_Paulo',
  language: 'pt-br',
  spotify: {
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: 'cb35234f6d744330bd6d0316848519a3',
    redirectUri: 'http://localhost:3000/',
    scopes: [
      'user-read-currently-playing',
      'user-read-playback-state',
    ],
  },
};
