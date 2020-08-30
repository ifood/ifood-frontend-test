// Global
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import { Input, Dropdown, Grid } from 'semantic-ui-react'
// Api
import { getFilters } from '../../api';

const Filters = ({ filters, errors, search, onChange, onSearch }) => {
    const [locale, setLocale] = useState();
    const [countrys, setCountrys] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await getFilters();
            const data = response.filters;

            setLocale(data[0]);
            setCountrys(data[1]);
        }

        fetchData();
    }, []);

    const localeValues = locale ? locale.values.map((local, index) => ({ text: local.name, value: local.value, key: index })) : null;
    const countryValues = countrys ? countrys.values.map((country, index) => ({ text: country.name, value: country.value, key: index })) : null;

    return(
        <Grid>
            <Grid.Row columns='1' stretched style={{ padding: '1rem ', top: '1rem' }}>
                <Grid.Column stretched>
                    <Input
                        placeholder='Buscar'
                        type='text'
                        icon='search'
                        value={search}
                        onChange={onSearch}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='2' style={{ padding: '1rem 1rem 0 1rem' }}>
                <Grid.Column>
                    <Dropdown
                        options={localeValues}
                        onChange={onChange('locale')}
                        value={filters['locale']}
                        error={errors['localeError']}
                        placeholder='Locale'
                        selection
                        fluid
                    />
                </Grid.Column>
                <Grid.Column>
                    <Dropdown
                        options={countryValues}
                        onChange={onChange('country')}
                        value={filters['country']}
                        error={errors['countryError']}
                        placeholder='País'
                        selection
                        fluid
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='1' style={{ padding: '1rem 1rem 0 1rem' }}>
                <Grid.Column stretched width='16'>
                    <Input
                        type='datetime-local'
                        step='1'
                        value={filters['timestamp']}
                        error={errors['timestampError']}
                        onChange={onChange('timestamp')}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='2' style={{ padding: '1rem 1rem 0 1rem' }}>
                <Grid.Column width='8' stretched>
                    <label>Página</label>
                    <Input
                        type='number'
                        value={filters['offset']}
                        error={errors['offsetError']}
                        onChange={onChange('offset')}
                        min={1}
                    />
                </Grid.Column>
                <Grid.Column width='8' stretched>
                    <label>Quantidade</label>
                    <Input
                        type='number'
                        value={filters['limit']}
                        error={errors['limitError']}
                        onChange={onChange('limit')}
                        min={1}
                        max={50}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

Filters.propTypes = {
    filters: PropTypes.object,
    errors: PropTypes.object,
    search: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
};

export default Filters;
