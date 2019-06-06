import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Router from 'next/router'

import Card from '../components/card'
import Aside from '../components/aside'
import Header from '../components/header'
import Loader from '../components/loader'
import './styles.styl'
import '../styles/colors.styl'

import { getPlaylist, getUserData } from '../services/api'

function App() {
  const [userData, setUserData] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [now, setNow] = useState('')
  const [filter, setFilter] = useState('')

  const callApi = () => {
    setIsLoading(true)
    getPlaylist({
      filter: now,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('mytoken')}`,
      },
    })
      .then(results => {
        setResults(results.data.playlists.items)
      })
      .catch(er => {
        if (er.response) {
          er.response.data.error.message === 'The access token expired'
            ? Router.replace('/')
            : console.error(' What´s wrong? =/ ', er)
        }
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    callApi()
    getUserData({
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('mytoken')}`,
      },
    }).then(x => setUserData(x.data))
    setInterval(() => callApi(), 30000)
  }, [])

  useEffect(() => {
    const u = results.filter(elem => RegExp(searchTerm, 'gi').test(elem.name))
    setFilter(u)
  }, [searchTerm])
  useEffect(() => {
    now ? callApi() : setResults([])
  }, [now])

  const Playlist = () => {
    if (results.length > 0) {
      return searchTerm
        ? filter.map((item, id) => <Card key={id} data={item} />)
        : results.map((item, id) => <Card key={id} data={item} />)
    }
  }

  return (
    <div className='app bg-white'>
      <Head>
        <title>Spotifood</title>
      </Head>
      {isLoading && <Loader />}
      <Header search={setSearchTerm} />
      <Aside filteres={setNow} username={userData.display_name} />
      <main className='row flex wrap the-main pa-3 px-5'>{Playlist()}</main>
    </div>
  )
}

export default App
