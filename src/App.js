import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

import AmiiboList from './components/AmiiboList';

function App() {
    useEffect(() => {
        axios
            .get('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super Smash Bros.')
            .then(res => {})
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <AmiiboList />
        </div>
    );
}

export default App;
