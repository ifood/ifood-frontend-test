import React, { useState, useEffect, useRef } from 'react';
import FeaturedPlaylists from './components/FeaturedPlaylists/FeaturedPlaylists';
import Filter from './components/Filter/Filter';
import fetch from 'unfetch';
import { mountUrlParams } from './helpers/url';
import WithLoader from './components/shared/WithLoader';
import style from './app.module.css';

const FilterWithLoader = WithLoader(Filter);
const FeaturedPlaylistsWithLoader = WithLoader(FeaturedPlaylists);

const filterApiUrl = process.env.REACT_APP_FILTER_API_URL;
const playlistsBaseUrl = process.env.REACT_APP_PLAYLISTS_API_URL;

const filterListToObj = filters =>
  filters.reduce((acc, curr) => ({ ...acc, [curr.id]: '' }), {})

const INTERVAL_TIME = 30000;
const DEBOUNCE_TIME = 300;

function App() {

  // Filter state
  const [loadingApiFields, setLoadingApiFields] = useState(false);
  const [apiFields, setApiFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [playlistName, setPlaylistName] = useState('');

  // Playlist state
  const [playlists, setPlaylists] = useState({ items: [] });
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);

  const debounceHandler = useRef(null);
  const intervalHandler = useRef(null);

  useEffect(() => {
    async function fetchApiFields() {
      setLoadingApiFields(true);
      const result = await fetch(filterApiUrl, { method: 'GET' });
      const { filters = [] } = await result.json();
      setApiFields(filters);
      setFormData(filterListToObj(filters));
      setLoadingApiFields(false);
    }

    fetchApiFields();
  }, [])

  useEffect(() => {
    const hasAnyFormValue = Object.keys(formData).some(key => Boolean(formData[key]));

    if (!hasAnyFormValue) {
      setPlaylists({ items: []});
      return;
    }

    clearInterval(debounceHandler.current);

    async function fetchPlaylists() {
      const playlistsUrl = `${playlistsBaseUrl}${mountUrlParams(formData)}`;

      setLoadingPlaylists(true);
      const response = await fetch(playlistsUrl, { method: 'GET' });
      const { result = {}} = await response.json();
      setPlaylists(result.playlists);
      setLoadingPlaylists(false);
      // clear previous interval
      clearInterval(intervalHandler.current);
      // create a new interval
      intervalHandler.current = setInterval(() => {
        fetchPlaylists()
      }, INTERVAL_TIME);
    }

    debounceHandler.current = setTimeout(() => {
      fetchPlaylists();
    }, DEBOUNCE_TIME);

    // always unset interval when unmounting
    return () => clearInterval(intervalHandler.current);
  }, [formData])

  const onSubmit = ev => {
    ev.preventDefault();
  }

  const onNameChange = ev => {
    clearInterval(debounceHandler.current);
    setPlaylistName(ev.target.value);

    // debounceHandler.current = setTimeout(() => {
    //   console.log(value);
    // }, DEBOUNCE_TIME);
  }

  const onFieldChange = ev => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    });
  }

  return (
    <div className={style.container}>
      <aside className={style.filterContainer}>
        <FilterWithLoader
          apiFields={apiFields}
          onFieldChange={onFieldChange}
          onSubmit={onSubmit}
          formData={formData}
          onNameChange={onNameChange}
          playlistName={playlistName}
          loading={loadingApiFields}
        />
      </aside>
      <section className={style.playlistContainer}>
        <FeaturedPlaylistsWithLoader
          nameFilter={playlistName}
          playlists={playlists}
          loading={loadingPlaylists}
        />
      </section>
    </div>
  );
}

export default App;
