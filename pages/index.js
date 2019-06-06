import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'

import './styles.styl'
import '../styles/colors.styl'

function App() {
  const getToken = () =>
    window.open(
      `https://accounts.spotify.com/authorize?response_type=token&client_id=f91142b372684b12a2239395f7468fe1&scopes=playlist-read-private+user-library-read+playlist-modify-private&redirect_uri=${
        location.origin
      }`,
      '_self',
    )

  const [userToken, setUserToken] = useState(false)

  useEffect(() => {
    if (location.hash) {
      setUserToken(location.hash.split('=')[1].split('&')[0])
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('mytoken', userToken)
    if (userToken) {
      window.location.hash = ''
      Router.push('/playlist')
    }
  }, [userToken])

  return (
    <div className='login f-vh flex column justify-center align-center'>
      <Head>
        <title>Spotifood</title>
      </Head>
      <header className='pb-2 login__header'>
        <h1 className='tx-light title uppercase'>bem vindo ao spootifood</h1>
      </header>
      <h3 className='login__text tx-light'>
        Para os <strong>FoodLovers</strong>, sempre uma playlist atualizada para
        você ouvir enquanto degusta ou aguarda seu pedido.
      </h3>
      <button onClick={getToken} className='btn mt-3'>
        conectar
      </button>
    </div>
  )
}

export default App
