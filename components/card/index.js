import React from 'react'
import './style.styl'
export default ({
  data: {
    external_urls: { spotify },
  },
  data: { name },
  data: { images },
}) => {
  return (
    <a href={spotify} target='_blank'>
      <figure className='flex card my-1 align-center'>
        <img className='max-size' src={images[0].url} alt={name} />
        <figcaption className='caption fw-bold px-2'>{name}</figcaption>
      </figure>
    </a>
  )
}
