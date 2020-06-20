import { GET_PLAYLISTS } from '../../src/Playlists'

export default {
  request: {
    query: GET_PLAYLISTS,
    variables: {
      search: 'HardRock',
      limit: undefined,
      offset: undefined,
      countries: undefined
    }
  },
  result: {
    "data":{
      "playlists":{
        "total":1,
        "items":[
          {
            "id":"236P5YpBS3V5AMqu66JnfE",
            "name":"HardRock",
            "description":"",
            "images":[
              {
                "url":"https://mosaic.scdn.co/640/ab67616d0000b2733469ef94acfa666fde83dec5ab67616d0000b273449b39efb3f857f936fcc305ab67616d0000b27365a7b0a6969f0efcde4b5acaab67616d0000b273e02589301e7f4b222312bed0",
                "__typename":"Image"
              },
              {
                "url":"https://mosaic.scdn.co/300/ab67616d0000b2733469ef94acfa666fde83dec5ab67616d0000b273449b39efb3f857f936fcc305ab67616d0000b27365a7b0a6969f0efcde4b5acaab67616d0000b273e02589301e7f4b222312bed0",
                "__typename":"Image"
              },
              {
                "url":"https://mosaic.scdn.co/60/ab67616d0000b2733469ef94acfa666fde83dec5ab67616d0000b273449b39efb3f857f936fcc305ab67616d0000b27365a7b0a6969f0efcde4b5acaab67616d0000b273e02589301e7f4b222312bed0",
                "__typename":"Image"
              }
            ],
            "externalLinks":null,
            "tracks":[
              {
                "id":"5RHG4SQ6iJ1qQJmt3EFJCX",
                "name":"We're Not Gonna Take It",
                "duration":219666,
                "album":{
                  "id":"0pYdfWiG4v5OhcC8LFvWrr",
                  "name":"Rhino Hi-Five: Twisted Sister",
                  "externalLinks":{
                    "spotify":"https://open.spotify.com/album/0pYdfWiG4v5OhcC8LFvWrr",
                    "__typename":"ExternalLinks"
                  },
                  "images":[
                    {
                      "url":"https://i.scdn.co/image/ab67616d0000b2732f80364ca495b67a8e1d35dd",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d00001e022f80364ca495b67a8e1d35dd",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d000048512f80364ca495b67a8e1d35dd",
                      "__typename":"Image"
                    }
                  ],
                  "__typename":"Album"
                },
                "artists":[
                  {
                    "id":"7b85ve82Sh36a3UAx74wut",
                    "name":"Twisted Sister",
                    "__typename":"Artist"
                  }
                ],
                "__typename":"Track"
              },
              {
                "id":"57bgtoPSgt236HzfBOd8kj",
                "name":"Thunderstruck",
                "duration":292880,
                "album":{
                  "id":"4vu7F6h90Br1ZtYYaqfITy",
                  "name":"The Razors Edge",
                  "externalLinks":{
                    "spotify":"https://open.spotify.com/album/4vu7F6h90Br1ZtYYaqfITy",
                    "__typename":"ExternalLinks"
                  },
                  "images":[
                    {
                      "url":"https://i.scdn.co/image/ab67616d0000b273449b39efb3f857f936fcc305",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d00001e02449b39efb3f857f936fcc305",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d00004851449b39efb3f857f936fcc305",
                      "__typename":"Image"
                    }
                  ],
                  "__typename":"Album"
                },
                "artists":[
                  {
                    "id":"711MCceyCBcFnzjGY4Q7Un",
                    "name":"AC/DC",
                    "__typename":"Artist"
                  }
                ],
                "__typename":"Track"
              },
              {
                "id":"7990Xs9HQx7FXVIDVPEwj9",
                "name":"Rock And Roll All Nite",
                "duration":168733,
                "album":{
                  "id":"2hMjDSywkwY2HxjmWObpoI",
                  "name":"Dressed To Kill (Remastered Version)",
                  "externalLinks":{
                    "spotify":"https://open.spotify.com/album/2hMjDSywkwY2HxjmWObpoI",
                    "__typename":"ExternalLinks"
                  },
                  "images":[
                    {
                      "url":"https://i.scdn.co/image/ab67616d0000b273f33dfb2da14d313d36ecdaa5",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d00001e02f33dfb2da14d313d36ecdaa5",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d00004851f33dfb2da14d313d36ecdaa5",
                      "__typename":"Image"
                    }
                  ],
                  "__typename":"Album"
                },
                "artists":[
                  {
                    "id":"07XSN3sPlIlB2L2XNcTwJw",
                    "name":"KISS",
                    "__typename":"Artist"
                  }
                ],
                "__typename":"Track"
              },
              {
                "id":"2SiXAy7TuUkycRVbbWDEpo",
                "name":"You Shook Me All Night Long",
                "duration":210173,
                "album":{
                  "id":"6mUdeDZCsExyJLMdAfDuwh",
                  "name":"Back In Black",
                  "externalLinks":{
                    "spotify":"https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh",
                    "__typename":"ExternalLinks"
                  },
                  "images":[
                    {
                      "url":"https://i.scdn.co/image/ab67616d0000b273e02589301e7f4b222312bed0",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d00001e02e02589301e7f4b222312bed0",
                      "__typename":"Image"
                    },
                    {
                      "url":"https://i.scdn.co/image/ab67616d00004851e02589301e7f4b222312bed0",
                      "__typename":"Image"
                    }
                  ],
                  "__typename":"Album"
                },
                "artists":[
                  {
                    "id":"711MCceyCBcFnzjGY4Q7Un",
                    "name":"AC/DC",
                    "__typename":"Artist"
                  }
                ],
                "__typename":"Track"
              }
            ],
            "__typename":"Playlist"
          }
        ],
        "__typename":"PlayListInfo"
      }
    }
  }
}
