import React, { useState, useEffect } from 'react';
import FeaturedPlaylists from './components/FeaturedPlaylists/FeaturedPlaylists';
import Filter from './components/Filter/Filter';
import fetch from 'unfetch';
import WithLoader from './components/shared/WithLoader';

const FilterWithLoader = WithLoader(Filter);
const FeaturedPlaylistsWithLoader = WithLoader(FeaturedPlaylists);

const filterApiUrl = process.env.REACT_APP_FILTER_API_URL;
const playlistsBaseUrl = process.env.REACT_APP_PLAYLISTS_API_URL;

const filterListToObj = filters => filters.reduce((acc, curr) => ({
  ...acc,
  [curr.id]: ''
}), {})

// Fake delay
async function sleep (ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve() }, ms)
  })
}

function App() {

  // Filter state
  const [formData, setFormData] = useState({});
  const [loadingApiFields, setLoadingApiFields] = useState(false);
  const [apiFields, setApiFields] = useState([]);

  // Playlist state
  const [featuredPlaylist, setFeaturedPlaylists] = useState({});
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);

  useEffect(() => {
    async function fetchApiFields() {
      setLoadingApiFields(true);
      const result = await fetch(filterApiUrl, { method: 'GET' });
      const { filters = [] } = await result.json();
      // await sleep(3000);
      setApiFields(filters);
      setFormData({
        ...filterListToObj(filters),
        playlistName: ''
      });
      setLoadingApiFields(false);
    }

    fetchApiFields();
  }, [])

  const onSubmit = async (ev) => {
    ev.preventDefault();
    console.log('buscando playlists... %o', formData);

    let playlistsUrl = playlistsBaseUrl;
    let firstParam = true;

    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        if (firstParam) {
          firstParam = false;
          playlistsUrl += `?${key}=${formData[key]}`;
        }
        playlistsUrl += `&${key}=${formData[key]}`;
      }
    });

    setLoadingPlaylists(true);
    const playlistResponse = await fetch(playlistsUrl, {
      method: 'GET'
    });
    const { result = {} } = await playlistResponse.json();
    setFeaturedPlaylists(result);
    setLoadingPlaylists(false);
  }

  const onFieldChange = ev => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    });
  }

  return (
    <div className="container">
      <div className="row">
        <aside className="col-3">
          <FilterWithLoader
            apiFields={apiFields}
            onFieldChange={onFieldChange}
            onSubmit={onSubmit}
            formData={formData}
            loading={loadingApiFields}
          />
        </aside>
        <div className="col-9">
          <FeaturedPlaylistsWithLoader
            featuredPlaylist={featuredPlaylist}
            loading={loadingPlaylists}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
