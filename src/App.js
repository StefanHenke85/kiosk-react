// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Angebote from './components/Angebote';
import Zeiten from './components/Zeiten';
import LieferservicePage from './Lieferservice/LieferservicePage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<>
                        <Angebote />
                        <Zeiten />
                    </>} />
                    <Route path="/lieferservice" element={<LieferservicePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;