import React, { useState, useEffect } from 'react';
import FeaturedPlaylists from './components/FeaturedPlaylists/FeaturedPlaylists';
import Filter from './components/Filter/Filter';
import fetch from 'unfetch';
import WithLoader from './components/shared/WithLoader';
import style from './app.module.css';

const FilterWithLoader = WithLoader(Filter);
const FeaturedPlaylistsWithLoader = WithLoader(FeaturedPlaylists);

const filterApiUrl = process.env.REACT_APP_FILTER_API_URL;
const playlistsBaseUrl = process.env.REACT_APP_PLAYLISTS_API_URL;

const filterListToObj = filters => filters.reduce((acc, curr) => ({
  ...acc,
  [curr.id]: ''
}), {})

const getUrlParams = formData => {
  let firstParam = true;
  let params;
  Object.keys(formData).forEach(key => {
    if (formData[key]) {
      if (firstParam) {
        firstParam = false;
        params = `?${key}=${formData[key]}`;
      } else {
        params += `&${key}=${formData[key]}`;
      }
    }
  });
  return params;
}

const intervalTime = 30000;
const debounceTime = 500;
let timeoutId = null;

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

  useEffect(() => {

    let intervalId;
    const hasAnyFormValue = Object.keys(formData).some(key => Boolean(formData[key]));

    if (!hasAnyFormValue) {
      return () => clearInterval(intervalId);
    }

    // if able to fetch again, clear previous timeout
    // to avoid multiple calls to api
    clearInterval(timeoutId);

    async function fetchPlaylists() {
      const playlistsUrl = `${playlistsBaseUrl}${getUrlParams(formData)}`;

      setLoadingPlaylists(true);
      const playlistResponse = await fetch(playlistsUrl, { method: 'GET' });
      const { result = {}} = await playlistResponse.json();
      setFeaturedPlaylists(result);
      setLoadingPlaylists(false);
      // clear previous interval
      clearInterval(intervalId);
      // create a new interval
      // intervalId = setInterval(() => {
      //   fetchPlaylists()
      // }, intervalTime);
    }

    // debounce control
    timeoutId = setTimeout(() => {
      fetchPlaylists();
    }, debounceTime);

    // always unset interval when unmounting
    return () => clearInterval(intervalId);
  }, [formData])

  const onSubmit = async (ev) => {
    ev.preventDefault();
    console.log('buscando playlists... %o', formData);  }

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
          loading={loadingApiFields}
        />
      </aside>
      <section className={style.playlistContainer}>
        <FeaturedPlaylistsWithLoader
          featuredPlaylist={featuredPlaylist}
          loading={loadingPlaylists}
        />
      </section>
    </div>
  );
}

export default App;
