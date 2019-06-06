import React from 'react'
import './style.styl'
export default () => (
  <div className='loader'>
    <div className='outer' />
    <div className='middle' />
    <div className='inner' />
    <span className='caption-loader'>carregando...</span>
  </div>
)
