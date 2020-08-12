/**
 * IMPORTS
 */
import React from 'react';
import Loader from 'react-loader-spinner';
import {useSelector} from 'react-redux';
import {Playlist} from './playlist.js';


/**
 * STYLES
 */
import './styles/display.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


/**
 * CODE
 */
function Display (props) {
    // get is loading state from father
    const {hasError} = props;
    
    // get is loading state from father
    const {isLoading} = props;

    // get search value from store
    const search = useSelector(state => state.search);
    const {searchValue} = search;

    // initialize list of playlists
    const selectedPlaylists = [];

    // playslist data is not null: filter playlists
    if (props.playlists !== null)
    {
        for (const p of props.playlists.items)
        // filter playslist and show only those that match the search value as substring
        if (p.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1)
            selectedPlaylists.push(p);
    }
    
    return (
        <div>
            <h1 className="displaytitle">Playlists</h1>
            {/*component is loading: render spinner */}
            {isLoading === true && (<Loader color="#F04C2A"
                                            height={50}
                                            type="Oval"
                                            width={50} />)}

            {/*component is not loading and has error: render error msg */}
            {hasError && !isLoading && (<div></div>)}
            
            {/*component is not loading and has no error: render playlists */}
            {!hasError && !isLoading && (
                <div className="display">
                    {selectedPlaylists.map(p => {
                        return <Playlist key={p.name} playlist={p} ></Playlist>
                    })}
                </div>
            )}
        </div>
    )
}

/**
 * EXPORTS
 */
export {Display};
