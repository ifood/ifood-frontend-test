// Global
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInterval } from 'use-interval';
import useDarkMode from 'use-dark-mode'
import { format } from 'date-fns'
// Components
import List from './List';
import Filters from './Filters';
import { Loader, Button, Icon, Label } from 'semantic-ui-react';
// Api
import { getPlaylists } from 'api';
// Redux
import { list, peding, search as searchAction } from 'redux/actions/playslist.action';
// Utils
import { isEmpty, isValid } from 'utils';
// Stylesheets
import './App.scss';

const App = () => {
    const [locale, setLocale] = useState('pt_BR');
    const [country, setCountry] = useState('BR');
    const [timestamp, setTimestamp] = useState(format(new Date(), 'yyyy-MM-dd') + 'T' + format(new Date(), 'HH:mm:ss'));
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(1);
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(0);
    let [fontSize, setFontSize] = useState(100);

    const [localeError, setLocaleError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [timestampError, setTimestampError] = useState(false);
    const [limitError, setLimitError] = useState(false);
    const [offsetError, setOffsetError] = useState(false);
    
    const dispatch = useDispatch();
    const fetchData = useCallback(async () => {
        if (!localeError && !limitError && !timestampError && !countryError && !offsetError) {
            dispatch(peding());
            const response = await getPlaylists({ locale, country, timestamp, limit, offset: (offset - 1) });
            const data = response.playlists.items;

            dispatch(list(data));
        }
    }, [localeError, limitError, timestampError, countryError, offsetError, locale, country, timestamp, limit, offset, dispatch]);

    useInterval(() => {
        if (count === 0) {
            fetchData();
        }
        setCount(count + 1);
    }, 1000);
    
    useEffect(() => {
        if (count === 30) {
            setCount(0);
        }
    }, [count]);

    const onChangeFilter = field => async (e, target) => {
        const { value } = target || e.target;

        if (isValid(field, value)){
            if (field === 'locale') {
                setLocale(value);
                setLocaleError(false);
            } else if (field === 'country') {
                setCountry(value);
                setCountryError(false);
            } else if (field === 'timestamp') {
                setTimestamp(value);
                setTimestampError(false);
            } else if (field === 'limit') {
                setLimit(value);
                setLimitError(false);
            } else if (field === 'offset') {
                setOffset(value);
                setOffsetError(false);
            }
            setCount(0);
        } else {
            if (field === 'locale') {
                setLocale(value);
                setLocaleError(true);
            } else if (field === 'country') {
                setCountry(value);
                setCountryError(true);
            } else if (field === 'timestamp') {
                setTimestamp(value);
                setTimestampError(true);
            } else if (field === 'limit') {
                setLimit(value);
                setLimitError(true);
            } else if (field === 'offset') {
                setOffset(value);
                setOffsetError(true);
            }
        }
    }

    const callSearch = term => dispatch(searchAction(term));

    const onChangeSearch = (e, { value }) => {
        setSearch(value);
        callSearch(value);
    }

    const changeFontSize = action => () => {
        const body = document.querySelector('body');
        
        if (action === 'increase') {
            if (fontSize < 120) {
                fontSize = fontSize + 10;
                setFontSize(fontSize);
                body.style.fontSize = fontSize + '%';
            }
        } else {
            if (fontSize > 100) {
                fontSize = fontSize - 10;
                setFontSize(fontSize);
                body.style.fontSize = fontSize + '%';
            }
        }
    }

    const lists = useSelector(state => state.playlist.filter.data);
    const loading = useSelector(state => state.playlist.loading);
    const darkMode = useDarkMode(false);
    return(
        <div className='page'>
            <div className='header'>
                <h1 className='title'>
                    Spotifood
                </h1>
                <div className='acessibility-container'>
                    <Button 
                        className='acessibility-container__button'
                        size='mini'
                        onClick={changeFontSize('increase')}
                    >
                        <span className='acessibility-container__button-text'>+ A</span>
                    </Button>
                    <Button
                        className='acessibility-container__button'
                        size='mini'
                        onClick={changeFontSize('decrease')}
                    >
                        <span className='acessibility-container__button-text'>- A</span>
                    </Button>
                    
                    <Label className='acessibility-container__dark-mode' onClick={darkMode.toggle}>
                        <Icon name={darkMode.value ? 'lightbulb' : 'lightbulb outline'} />
                    </Label>
                </div>
            </div>
            <Filters 
                filters={{ locale, country, timestamp, limit, offset }}
                errors={{ localeError, countryError, timestampError, limitError, offsetError }}
                search={search} 
                onChange={onChangeFilter}
                onSearch={onChangeSearch} 
            />
            {!isEmpty(lists) 
            ? <List data={lists} /> 
            : <div className='empty-list'>
                <Loader active={loading} size='massive' inverted={darkMode.value} className='loader' />
                {!loading && 'Nenhuma playlist encontrada'}
            </div>}
            </div>
    );
}

export default App;
