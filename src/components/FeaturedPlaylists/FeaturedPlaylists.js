import React, { useState, useEffect } from 'react';
// import constructRequest from '../../helpers/fetch';
import styles from './featured-playlists.module.css';
import fetch from 'unfetch';
// import Multiple from '../../shared/Multiple'

const playlistsUrl = process.env.REACT_APP_PLAYLISTS_API_URL;

const PlaylistItem = (props) => {
  
}

const FeaturedPlaylists = (props) => {

  const [result, setResult] = useState({});
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function fetchPlaylists() {
      setFetching(true);
      const response = await fetch(playlistsUrl, { method: 'GET' });
      const { result = {} } = await response.json();
      console.log(result);
      setResult(result);
      setFetching(false);
    }
    fetchPlaylists();
  }, [])

  // const onFilterSubmit = (ev) => {
  //   ev.preventDefault();
  //   console.log('enviando... %o', playlists);
  // }

  return (
    <div className="container">
      <div className="row">
      { fetching && <span>Carregando...</span> }
      { !fetching && Boolean(result.playlists) && result.playlists.items.map(item => (
        <div className="col-3">
          <h4 className={styles.title}>{ item.name }</h4>
          <img className={styles.image} src={item.images[0].url} alt={item.name} />
        </div>
      )) }
      </div>
    </div>
  )
}

export default FeaturedPlaylists;