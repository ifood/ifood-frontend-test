// Global
import React, { useState, useEffect, memo } from 'react';
// Components
import Card from './Card';
// Api
import { getPlaylists } from '../../api'
// Stylesheets
import './index.scss';


function List() {
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
        <div className='list'>
            {list && list.map((item, index) => {
                return(
                    <Card 
                        key={index}
                        name={item.name} 
                        description={item.description}
                        imageUrl={item.images[0].url}
                        owner={item.owner.display_name}
                        tracks={item.tracks.total}
                    />
                )
            })}
        </div>
    );
}

export default memo(List);