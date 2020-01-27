import React from 'react'
import { shallow, mount } from 'enzyme-config'

/* */

import Cover from './Cover'

/* */

let itemPlaylist = {

    id   : "37i9dQZF1DXbiYDjc6fn8m",
    title: "Gold BPM",
    img  : "https://pl.scdn.co/images/pl/default/3564fc54ef63114ac4f6ed5650cea4986e5bcca4",
    owner: "Spotify",
    uri  : "spotify:playlist:37i9dQZF1DXbiYDjc6fn8m",
    type : "playlist"

}

let itemAlbum = {

    id   : "5viPP49Um9voYXzDfuGmN6",
    title: "Evoluiu, Pt. 2 (ao Vivo)",
    img  : "https://i.scdn.co/image/c53e6dd40aed775aa7d4d158ce591052ca0ca2e6",
    owner: "MC Kevin o Chris",
    uri  : "spotify:album:5viPP49Um9voYXzDfuGmN6",
    type : "album"

}

let itemCategory = {

    id   : "toplists",
    title: "Top Lists",
    owner: "Spotify",
    img  : "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
    uri  : "https://api.spotify.com/v1/browse/categories/toplists",
    type : "category"

}

/* */

describe('Cover.js', () => {

    it('Renderiza as informações de playlist corretamente', () => {

        const component = shallow(<Cover data={ itemPlaylist } />)

        expect(component.find('.CoverImg').prop('alt')).toBe(`Imagem de capa da playlist "${itemPlaylist.title}" de ${itemPlaylist.owner}`)
        expect(component.find('.CoverOverlayPlay').prop('title')).toBe(`Tocar playlist "${itemPlaylist.title}" de ${itemPlaylist.owner}`)

    })

    it('Renderiza as informações de álbum corretamente', () => {

        const component = shallow(<Cover data={ itemAlbum } />)

        expect(component.find('.CoverImg').prop('alt')).toBe(`Imagem de capa do álbum "${itemAlbum.title}" de ${itemAlbum.owner}`)
        expect(component.find('.CoverOverlayPlay').prop('title')).toBe(`Tocar álbum "${itemAlbum.title}" de ${itemAlbum.owner}`)

    })

    it('Renderiza as informações de categoria corretamente', () => {

        const component = shallow(<Cover data={ itemCategory } />)

        expect(component.find('.CoverImg').prop('alt')).toBe(`Imagem de capa da playlist "${itemCategory.title}" de ${itemCategory.owner}`)
        expect(component.find('.CoverOverlayPlay').prop('title')).toBe(`Tocar playlist "${itemCategory.title}" de ${itemCategory.owner}`)

    })

})
