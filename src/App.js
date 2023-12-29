import React from 'react';
import './App.css';

import {toast} from 'react-toastify';
import WeatherStatus from "./components/WeatherStatus";
import {useCallback, useState} from 'react';
import Searchbar from "./components/Seachbar";

function App() {
    const [city, setCity] = useState('Sibiu');

    const handleSubmit = useCallback((inputValue) => {
        if (inputValue === '') {
            toast.error('Please enter a city name');
            return;
        }
        setCity(inputValue);
    }, []);

    return (
        <div className="App">

            <Searchbar handleSubmit={handleSubmit}/>
            <WeatherStatus city={city}/>

        </div>
    );
}

export default App;
