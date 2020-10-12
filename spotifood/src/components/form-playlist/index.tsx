import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const FormPlaylist = () => {
    const [locale, setLocale] = useState([]);
    const [country, setCountry] = useState([]);
    const [title, setTitle] = useState('');
    const [resLocale, setResLocale] = useState('');
    const [resCountry, setResCountry] = useState('');

    const data = { 
        limit : 3, 
        offset: 1, 
        country: resCountry, 
        locale: resLocale, 
        timestamp:'2014-10-23T09:00:00' 
    }

    console.log(data);

    useEffect(() => {
        api.get('5a25fade2e0000213aa90776').then(response => {
          setLocale(response.data.filters[0].values);
          setCountry(response.data.filters[1].values);
        })
    }, []);
    
    return (
        <section className="logo">
            <form>
                <div className="form-group">
                    <input 
                        placeholder="Pesquisar"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <select 
                        className="form-control" 
                        id="selectLocale" 
                        onChange={e => setResLocale(e.target.value)}
                    >
                        {locale.map((item: any, index) => (
                            <option key={index} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <select 
                        className="form-control" 
                        id="selectCountry" 
                        onChange={e => setResCountry(e.target.value)}
                    >
                        {country.map((item: any, index) => (
                            <option key={index} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>  
                </div>  
            </form>
        </section>
    );
}

export default FormPlaylist;