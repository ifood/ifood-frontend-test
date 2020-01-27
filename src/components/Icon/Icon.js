import React from 'react'

/* */

const Icon = (({ className, glyph }) => {

    return (

        <svg className={ className }>

            <use href={ `#${glyph}` }></use>

        </svg>

    )

})

export default Icon
