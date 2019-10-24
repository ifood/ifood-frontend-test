import React, { useState, useEffect, useRef } from 'react';
import FeaturedPlaylists from './components/FeaturedPlaylists/FeaturedPlaylists';
import Filter from './components/Filter/Filter';
import { mountUrlParams } from './helpers/url';
import request from './helpers/request';
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

  const [loadingApiFields, setLoadingApiFields] = useState(false);
  const [apiFields, setApiFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [playlistName, setPlaylistName] = useState('');

  const [playlists, setPlaylists] = useState({ items: [] });
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);

  const debounceHandler = useRef(null);
  const intervalHandler = useRef(null);

  useEffect(() => {
    async function fetchApiFields() {
      setLoadingApiFields(true);
      const { filters = [] } = await request(filterApiUrl, 'GET');
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
      const { result = {}} = await request(playlistsUrl, 'GET');

      setPlaylists(result.playlists);
      setLoadingPlaylists(false);

      clearInterval(intervalHandler.current);
      intervalHandler.current = setInterval(() => {
        fetchPlaylists()
      }, INTERVAL_TIME);
    }

    debounceHandler.current = setTimeout(() => {
      fetchPlaylists();
    }, DEBOUNCE_TIME);

    return () => clearInterval(intervalHandler.current);
  }, [formData])

  const onSubmit = ev => {
    ev.preventDefault();
  }

  const onNameChange = ev => {
    clearInterval(debounceHandler.current);
    setPlaylistName(ev.target.value);
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
