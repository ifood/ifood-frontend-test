// Global
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns'
// Components
import List from './List';
import Filters from './Filters';
// Api
import { getPlaylists } from '../api';
// Redux
import { list, search as searchAction } from '../redux/actions/playslist.action';
// Stylesheets
import './App.scss';

const App = () => {
    const [filters, setFilters] = useState({
        locale: 'pt_BR',
        country: 'BR',
        offset: 0,
        limit: 20,
        timestamp: format(new Date(), 'yyyy-MM-dd') + 'T' + format(new Date(), 'HH:mm:ss'),
    });
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState('');
    
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const response = await getPlaylists(filters);
            const data = response.playlists.items;

            dispatch(list(data));
            setVisible(true);
        }
        
        fetchData();
        const timer = setInterval(fetchData, 30000);
        return () => clearInterval(timer);
    }, [filters, dispatch]);

    const onChangeFilter = field => async (e, target) => {
        const { value } = target || e.target;

        if (field === 'limit') {
            filters[field] = field === 'limit' && (value < 1 || value > 50) ? filters.limit : value;
        } else if ('offset') {
            filters[field] = field === 'offset' && value < 0 ? filters.offset : value;
        } else {
            filters[field] = value;
        }

        const response = await getPlaylists(filters);
        const data = response.playlists.items;

        dispatch(list(data));
        setVisible(true);
        setFilters(filters);
    }

    const callSearch = term => dispatch(searchAction(term));

    const onChangeSearch = (e, { value }) => {
        setSearch(value);
        callSearch(value);
    }

    const lists = useSelector(state => state.filter.data);

    return(
        <div className='page'>
            <Filters 
                visible={visible} 
                filters={filters} 
                search={search} 
                onChange={onChangeFilter} 
                onSearch={onChangeSearch} 
            />
            <List 
                data={lists} 
            />
        </div>
    );
}

export default App;
