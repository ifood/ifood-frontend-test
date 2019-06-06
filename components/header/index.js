import React from 'react'
import './style.styl'
export default props => {
  const searchInput = React.createRef()
  const clear = () => {
    searchInput.current.value = ''
    props.search('')
  }
  return (
    <header className='the-header'>
      <input
        placeholder='Pesquisa'
        ref={searchInput}
        className='search tx-24 tx-primary fw-bold py-2 px-3 f-wp bg-dark'
        onChange={e => props.search(e.target.value)}
        type='text'
        inputMode='text'
        alt='buscar'
      />
      <i onClick={clear} className='icon-clear' role='clear' />
    </header>
  )
}
