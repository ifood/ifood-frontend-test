import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const FormPlaylist = () => {
    const [locale, setLocale] = useState([]);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        api.get('5a25fade2e0000213aa90776').then(response => {
          setLocale(response.data.filters[0].values);
          setCountry(response.data.filters[1].values);
        })
      }, []);
    
      
    console.log(locale);  
    return (
        <section className="logo">
            <form>
                <div className="form-group">
                    <select className="form-control" id="selectLocale">
                        {locale.map((item: any, index) => (
                            <option key={index} value={item.value}>
                            {item.name}
                            </option>
                        ))}
                    </select>
                    <select className="form-control" id="selectLocale">
                        {country.map((item: any, index) => (
                            <option key={index} value={item.value}>
                            {item.name}
                            </option>
                        ))}
                    </select>  
                    <label htmlFor="formControlRange">Exemplo de input range</label>
                    <input type="range" className="form-control-range" id="formControlRange"></input>
                </div>  
            </form>
        </section>
    );
}

export default FormPlaylist;