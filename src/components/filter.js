/**
 * IMPORTS
 */
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import Loader from 'react-loader-spinner';
import {useDispatch} from 'react-redux';
import {api} from '../utility/api.js';
import * as actions from '../actions/filteractions.js';


/**
 * STYLES
 */
import './styles/filter.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


/**
 * CODE
 */
function Filter () {
    // component dispatch
    const dispatch = useDispatch();

    // component has error state
    const [hasError, setHasError] = useState(false);

    // component is loading state
    const [isLoading, setIsLoading] = useState(false);

    // component country filter state
    const [country, setCountry] = useState(null);

    // component limit filter state
    const [limit, setLimit] = useState(null);

    // component locale filter state
    const [locale, setLocale] = useState(null);

    // component offset filter state
    const [offset, setOffset] = useState(null);

    // component timestamp filter state
    const [timestamp, setTimestamp] = useState(null);

    // component data state
    const [data, setData] = useState(null);

    // effect to be runned only once
    useEffect(() => {
        // function to fetch filter data
        async function fetchData() {
            // set state to show spinner
            setIsLoading(true);

            // API call
            api.get()
            .then((res) => {
                // save filter data on data state
                setData(res.data.filters);

                // set no error on fetching data
                setHasError(false);

                // finish loading
                setIsLoading(false);
            })
            .catch(() => {
                 // set error on fetching data
                 setHasError(true);

                 // finish loading
                 setIsLoading(false);
            });
        }
        
        // fetch filter data
        fetchData();
    }, []);

    // function to handle click on button
    function handleClick() {
        let filters = {country, limit, locale, offset, timestamp}

        // user trying to set null limit: correct it
        if (limit === ''){
            filters = {...filters, limit: null};
        }

        // user trying to set limit less than minimum value: correct it
        else if (Number(limit) < 1 && limit !== null) {
            document.getElementById('limit').value = '1';
            filters = {...filters, limit: '1'};
        }

        // user trying to set limit higher than maximum value: correct it
        else if (Number(limit) > 50) {
            document.getElementById('limit').value = '50';
            filters = {...filters, limit: '50'};
        }

        // user trying to set null offset: correct it
        if (offset === '') {
            filters = {...filters, offset: null};
        }

        // user trying to set offset less than minimum value: correct it
        else if (Number(offset) < 1 && limit !== null) {
            document.getElementById('off').value = '1';
            filters = {...filters, offset: '1'}
        }

        //dispatching action
        dispatch(actions.setFilter(filters));
    }

    // function to handle country change
    function handleCountryChange(event) {
        event.preventDefault();
        
        if (event.target.value === 'Escolha um país') {
            setCountry(null);
            return
        }
        setCountry(event.target.value);
    }

    // function to handle limit change
    function handleLimitChange(event) {
        event.preventDefault();
        if (event.target.value === '') {
            setLimit(null);
            return
        }
        setLimit(event.target.value);
    }

    // function to handle locale change
    function handleLocaleChange(event) {
        event.preventDefault();
        if (event.target.value === 'Escolha uma localidade') {
            setLocale(null);
            return
        }
        setLocale(event.target.value);
    }

    // function to handle offset change
    function handleOffsetChange(event) {
        event.preventDefault();
        if (event.target.value === '') {
            setOffset(null);
            return
        }
        setOffset(event.target.value);
    }

    // function to handle timestamp change
    function handleTimestampChange(event) {
        event.preventDefault();
        setTimestamp(event.target.value + ':00');
    }

    return (
        <div className="filterblock">
            <p>Filtros</p>
            {/*component is loading: render spinner */}
            {isLoading && (<Loader color="#F04C2A"
                                   height={50}
                                   type="Oval"
                                   width={50} />)}

            {/*component is not loading and has error: render error msg */}
            {hasError && !isLoading && (<div>Erro ao carregar filtros...</div>)}
            
            {/*component is not loading and has no error: render filters */}
            {!hasError && !isLoading && data !== null && (
                <div>
                    <div className="row">
                        <div className="group">
                            <label>País</label>
                            <select className="select"
                                    onChange={handleCountryChange}>
                                <option>Escolha um país</option>
                                {data[1].values.map(c => {
                                    return <option key={c.value}
                                                value={c.value}>{c.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="group">
                            <label>Localidade</label>
                            <select className="select"
                                    onChange={handleLocaleChange}>
                                <option>Escolha uma localidade</option>
                                {data[0].values.map(c => {
                                    return <option key={c.value}
                                                value={c.value}>{c.name}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="nrow">
                        <div className="group">
                            <label>Quantidade</label>
                            <input className="numeric"
                                   id="limit"
                                   max="50"
                                   min="1"
                                   onChange={handleLimitChange}
                                   placeholder="1"
                                   type="number" />
                        </div>
                        <div className="group">
                            <label>Página</label>
                            <input className="numeric"
                                   id="off"
                                   min="1"
                                   name="offset"
                                   onChange={handleOffsetChange}
                                   placeholder="1"
                                   type="number"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="group">
                            <label>Data e Horário</label>
                            <input className="date"
                                   onChange={handleTimestampChange}
                                   type="datetime-local" />
                        </div>
                    </div>
                    <button className="filter" onClick={handleClick}>FILTRAR</button>
    
                </div>
                )}
        </div>
    )
}

/**
 * EXPORTS
 */
export {Filter};
