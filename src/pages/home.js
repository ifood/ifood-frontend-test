/**
 * IMPORTS
 */
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useAlert} from 'react-alert';
import {useSelector} from 'react-redux';
import {Display} from '../components/display.js';
import {Search} from '../components/search.js';
import {Sidebar} from '../components/sidebar.js';
import {spotifyApi} from '../utility/api.js';
import {stringfyFilters} from '../utility/stringfyFilters.js';
import {useInterval} from '../utility/useInterval.js';


/**
 * STYLES
 */
import './styles/home.css';


/**
 * CODE
 */
function Home () {
    // component alert
    const alert = useAlert();

    // page data state
    const [data, setData] = useState(null);

    // filters state
    const filters = useSelector(state => state.filters, data);

    // page is loading state
    const [hasError, setHasError] = useState(false);

    // page is loading state
    const [isLoading, setIsLoading] = useState(false);

    // function to fetch data
    async function fetchData () {
        // set state to show spinner
        setIsLoading(true);
        
        // get filter query string
        const filterString = stringfyFilters(filters);
        
        // API call
        spotifyApi.get('browse/featured-playlists' + filterString)
        .then((response) => {
            // save playlists to data
            setData(response.data.playlists);

            // set no error on fetching data
            setHasError(false);

            // finish loading
            setIsLoading(false);
        })
        .catch((error) => {
            // set error on fetching data
            setHasError(true);

            // finish loading
            setIsLoading(false);

            // user is not authorized: show alert and redirect
            if (error.response.status === 400) {
                // show alert
                alert.error('Token de autorização não encontrado, você será redirecionado para a página inicial', {
                onClose: () => {
                    // redirect to welcome page
                    window.history.pushState({urlPath: '/' }, '', '/');
                    window.location.reload();
                }
              });
            }

            // token is expired: show alert and redirect
            if (error.response.status === 401) 
            {
                // show alert
                alert.error('A sessão expirou, você será redirecionado para a página inicial', {
                onClose: () => {
                    // redirect to welcome page
                    window.history.pushState({urlPath: '/' }, '', '/');
                    window.location.reload();
                }
              });
            }
        });
    }

    // effect to fetch data every time filters change 
    useEffect(() => {
        fetchData();
    }, [filters]);

    // effect to fetch data every 30 seconds
    useInterval(() => {
        fetchData();
    }, 30000);

    return (
        <div className="homepage">
            <Sidebar />
            <div className="right">
                <Search />
                <Display hasError={hasError}
                         isLoading={isLoading}
                         playlists={data} />
            </div>
        </div>
    )
}

/**
 * EXPORTS
 */
export {Home};
