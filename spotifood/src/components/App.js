// Global
import React, { useEffect, useState } from 'react';
// Components
import List from './List';
// Api
import { getPlaylists } from '../api';
// Stylesheets
import './App.scss';

function App() {
    const [list, setList] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await getPlaylists();
            const data = response.playlists.items;

            setList(data);
        }

        fetchData();
    }, []);

    return(
        <div className='page'>
            <List data={list} />
        </div>
    )
}

export default App;