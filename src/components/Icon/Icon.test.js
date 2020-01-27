import React from 'react'
import { mount } from 'enzyme-config'

/* */

import Icon from './Icon'
import Icons from './Icons'

/* */

let

iconGlyph = 'logo-play-button',
iconPath = 'M163 66.6a6 6 0 10-6.4 10.2 22 22 0 010 37.7l-98.4 61.3a22 22 0 01-22.5.6A22 22 0 0124.2 157V34.3a22 22 0 0111.5-19.4 22 22 0 0122.5.5l57.3 35.8a6 6 0 006.3-10.2L64.5 5.2a33.8 33.8 0 00-34.7-.8 33.8 33.8 0 00-17.6 29.9V157a34.2 34.2 0 0052.3 29l98.4-61.4c10.1-6.2 16.1-17 16.1-29s-6-22.7-16-29z'

/* */

describe('Icon.js', () => {

    it('Renderiza o ícone corretamente', () => {

        const component = mount((

            <div>

                <Icons />
                <Icon glyph={ iconGlyph } />

            </div>

        ))

        expect(component.find(`#${iconGlyph} path`).prop('d')).toBe(iconPath)
        expect(component.find('use').prop('href')).toBe(`#${iconGlyph}`)

    })

})
