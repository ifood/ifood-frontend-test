import React from 'react'
import { shallow, mount } from 'enzyme-config'

/* */

import MediaCard from './MediaCard'

/* */

let item = {

    id   : "37i9dQZF1DXbiYDjc6fn8m",
    title: "Gold BPM",
    img  : "https://pl.scdn.co/images/pl/default/3564fc54ef63114ac4f6ed5650cea4986e5bcca4",
    owner: "Spotify",
    uri  : "spotify:playlist:37i9dQZF1DXbiYDjc6fn8m",
    type : "playlist"

}

/* */

describe('MediaCard.js', () => {

    it('Renderiza as informações de playlist corretamente', () => {

        const component = mount(<MediaCard data={ item } />)

        expect(component.find('.cardTitle').text()).toBe(item.title)
        expect(component.find('.cardOwner').text()).toBe('de ' + item.owner)

        expect(component.find('.CoverImg').prop('alt')).toBe(`Imagem de capa da playlist "${item.title}" de ${item.owner}`)
        expect(component.find('.CoverOverlayPlay').prop('title')).toBe(`Tocar playlist "${item.title}" de ${item.owner}`)
        expect(component.find('.CoverOverlayPlay').prop('href')).toBe(item.uri)

    })

})
