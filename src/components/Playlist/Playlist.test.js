import React from 'react'
import { shallow, mount } from 'enzyme-config'

/* */

import PlaylistList from './PlaylistList'

/* */

let dataEmpty = {

    loading : false,
    message: 'Lorem ipsum dolor sit amet',
    items : []

}

let dataList = {

    message: "O dia foi intenso? Relaxe com muita música",
    loading: false,
    items: [

        {

        },
        {
        "id":"37i9dQZF1DX8mWv7JDZ0Ht",
        "title":"Pop Leve",
        "img":"https://i.scdn.co/image/ab67706f0000000260af4bb93321b261784032eb",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DX8mWv7JDZ0Ht",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DXaImRpG7HXqp",
        "title":"Calming Acoustic",
        "img":"https://i.scdn.co/image/ab67706f0000000290b31bdc0f3a0ae203242fbc",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DXaImRpG7HXqp",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DX7nC9vdKqBZ5",
        "title":"Desplugado",
        "img":"https://i.scdn.co/image/ab67706f0000000254429c22e178ed8d0b1e69f1",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DX7nC9vdKqBZ5",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DWTf69iQOGkD2",
        "title":"Rap Acústico",
        "img":"https://i.scdn.co/image/ab67706f00000002c2c2b7cbc28a3ca674b7938f",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DWTf69iQOGkD2",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DWY5LGZYBBHHz",
        "title":"Calma",
        "img":"https://pl.scdn.co/images/pl/default/6f02a5bd762eed8ce1da898d262bfd8f8b9940a6",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DWY5LGZYBBHHz",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DX2d27idkCNWu",
        "title":"Pop Acústico",
        "img":"https://pl.scdn.co/images/pl/default/e0204dc2b182aa3f88a7a5449ccc7d23730223b3",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DX2d27idkCNWu",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DX78yU2od6grb",
        "title":"Corra numa Boa",
        "img":"https://i.scdn.co/image/ab67706f0000000286e2870743c37d0f386ab578",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DX78yU2od6grb",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DX4AyFl3yqHeK",
        "title":"Bossa Nova",
        "img":"https://i.scdn.co/image/ab67706f00000002f86c91b7abdedf87698aad66",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DX4AyFl3yqHeK",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DX5v2FFZSCfVW",
        "title":"Sertanejo Acústico",
        "img":"https://pl.scdn.co/images/pl/default/a4c742d41e9c0eda5d38680f9a6e3f3eebba25cf",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DX5v2FFZSCfVW",
        "type":"playlist"
        },
        {
        "id":"37i9dQZF1DWTo2LqahHGYj",
        "title":"Acústico MPB",
        "img":"https://pl.scdn.co/images/pl/default/0d61cc9db785d57f85661d37255567bba4d46897",
        "owner":"Spotify",
        "uri":"spotify:playlist:37i9dQZF1DWTo2LqahHGYj",
        "type":"playlist"
        }

    ],
    viewport: 1263

}

/* */

describe('PlaylistList.js', () => {

    it('Verifica se o tamanho das capas diminui de acordo com o tamanho do viewport', () => {

        const large = shallow(<PlaylistList viewport={ 1280 } data={ dataEmpty } />)

        expect(large.instance().getSlideStepWidth()).toBe(250)

        /* */

        const medium = shallow(<PlaylistList viewport={ 800 } data={ dataEmpty } />)

        expect(medium.instance().getSlideStepWidth()).toBe(210)

        /* */

        const small = shallow(<PlaylistList viewport={ 500 } data={ dataEmpty } />)

        expect(small.instance().getSlideStepWidth()).toBe(160)

    })

    it('Verifica se o título é renderizado corretamente', () => {

        const component = shallow(<PlaylistList viewport={ 1280 } data={ dataEmpty } />)

        expect(component.find('h1.PlaylistTitle').text()).toBe(dataEmpty.message)

    })
})
