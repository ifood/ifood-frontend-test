import React, { useState, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

import AppContext from '../../context/AppContext';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Box, Typography, FormControl, Select } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 16,
      paddingLeft: 0,
      paddingRight: 0
    },
    margin: {
      margin: '8px auto'
    },
    input: {
      width: 'calc(100% - 48px)'
    },
    button: {
        marginLeft: 8,
        padding: 8
    },
    filters: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    pages: {
        maxWidth: 64
    },
    alignRight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: 24
    }
});

export const Filter = () => {
    const classes = useStyles();
    const appContext = useContext(AppContext);
    const token = useProtectedRoute();

    const [ requestMessage, setRequestMessage ] = useState(false);
    
    const [ openFilters, setOpenFilters ] = useState(false);
    const [ filters, setFilters ] = useState([]);

    const [ inputSearch, setInputSearch ] = useState("");
    const [ selectLocale, setSelectLocale ] = useState("en_US");
    const [ selectCountry, setSelectCountry ] = useState("en_US");
    const [ inputDate, setInputDate ] = useState(moment().format("YYYY-MM-DD HH:mm:ss"));
    const [ inputLimit, setInputLimit ] = useState(10);
    const [ limit, setLimit ] = useState(10);
    const [ offset, setOffset ] = useState(0);

    const handleInputSearchChange = e => {
        setInputSearch(e.target.value)
    }

    const handleInputDate = e => {
        setInputDate(e.target.value)
    }
    
    const handleSelectLocale = e => {
        setSelectLocale(e.target.value)
    }
    
    const handleSelectCountry = e => {
        setSelectCountry(e.target.value)
    }
    
    const handleLimit = e => {
        const value = Number(e.target.value)
        setInputLimit(value)

        if(value < 10) {
            setLimit(10)
        } else if(value > 50) {
            setLimit(50)
        } else {
            setLimit(value)
            handlefilters()
        }
    }
    
    const handleSearch = async() => {
      
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search?q=${inputSearch}&type=playlist`, axiosConfig)
            
            appContext.dispatch({ type: "GET_PLAYLISTS", playlists: response.data.playlists.items });
            setRequestMessage("")
    
        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("Você deve digitar algum termo no campo.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

    const handlefilters = async() => {

        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

        let country = "";

        if(selectCountry === "en_US") {
            country = "US"
        } else {
            country = selectCountry
        }

        const filters = {
            country: country || "US",
            locale: selectLocale || "en_us",
            timestamp: moment(inputDate, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DDTHH:mm:ss").replace(':', '%3A').replace(':', '%3A'),
        }

        try {
            const response = await axios.get(`https://api.spotify.com/v1/browse/featured-playlists?country=${filters.country}&locale=${filters.locale}&timestamp=${filters.timestamp}&limit=${inputLimit}&offset=${offset}`, axiosConfig)

            console.log(`https://api.spotify.com/v1/browse/featured-playlists?country=${filters.country}&locale=${filters.locale}&timestamp=${filters.timestamp}&limit=${limit}&offset=${offset}`, axiosConfig)
            

            appContext.dispatch({ type: "GET_PLAYLISTS", playlists: response.data.playlists.items });
            
            setRequestMessage("")

        } catch(err) {
            setRequestMessage(err.message)
        }
    }

    const getfilters = async() => {
        
        setOpenFilters(!openFilters);

        try {
        const response = await axios.get("http://www.mocky.io/v2/5a25fade2e0000213aa90776")

        setFilters(response.data.filters)

        } catch(err) {
            setRequestMessage(err.requestMessage)
        }
    }

    const handleNextPage = () => {
        setOffset(offset + inputLimit);
        handlefilters();
    };

    const handlePreviousPage = () => {
        setOffset(offset - inputLimit);
        handlefilters();
    };
    
    return (
        <Container maxWidth="lg">
            <TextField 
                className={classes.input}
                id="outlined-basic" 
                label="Busque pelo nome da playlist" 
                variant="outlined"
                name="search"
                value={inputSearch}
                onChange={handleInputSearchChange}
            />
            <Search className={classes.button} onClick={handleSearch}/>
            <Box className={classes.center}>
                {!openFilters ? <Button 
                    color="primary" 
                    variant="contained" 
                    onClick={getfilters} 
                    className={classes.margin}
                >
                    Mostrar filtros
                </Button> :
                <Box className={classes.filters} >
                    <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={getfilters} 
                        className={classes.margin}
                    >
                        Ocultar filtros
                    </Button>
                    <FormControl variant="outlined" className={classes.margin}>
                        <Select
                        native
                        value={selectLocale}
                        onChange={handleSelectLocale}
                        >
                        { filters.length !== 0 && filters[0].values.map( item => {
                            return <option value={item.value}>{item.name}</option>
                        })}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.margin}>
                        <Select
                        native
                        value={selectCountry}
                        onChange={handleSelectCountry}
                        inputProps={{
                            name: 'País',
                            id: 'filled-age-native-simple',
                        }}
                        >
                        { filters.length !== 0 && filters[1].values.map( item => {
                            return <option value={item.value}>{item.name}</option>
                        })}
                        </Select>
                    </FormControl>
                    <TextField 
                        className={classes.input}
                        id="outlined-basic" 
                        label=""
                        type="date"
                        variant="outlined"
                        name="date"
                        value={inputDate}
                        onChange={handleInputDate}
                    />
                    <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={handlefilters} 
                        className={classes.margin}
                    >
                            Filtrar
                    </Button>
                </Box>}
            </Box>
            {requestMessage !== "" && <Typography variant="subtitle1">
                    {requestMessage}
            </Typography>}
            <Box className={classes.alignRight}>
                {offset > 0 && <ArrowBackIosIcon onClick={handlePreviousPage} />}
                <Typography variant="subtitle1">
                    <TextField 
                        className={classes.pages}
                        id="outlined-basic" 
                        label=""
                        type="number"
                        variant="outlined"
                        name="limit"
                        value={inputLimit}
                        onChange={handleLimit}
                        InputProps={{ inputProps: { min: 10, max: 50 } }}
                    />
                </Typography>
                {appContext && (offset + inputLimit + 1) < appContext.total && <ArrowForwardIosIcon onClick={handleNextPage} />}
            </Box>
        </Container>
    )
}