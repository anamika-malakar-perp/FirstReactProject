import React from 'react';
import HomePage from '../home/HomePage';
import { Routes, Route } from 'react-router-dom';
import Bollywood from '../bollywood/Bollywood';
import TechnologyPage from '../technology/TechnologyPage';
import Hollywood from '../hollywood/Hollywood';
import Fitness from '../fitness/Fitness';
import Food from '../food/Food';

const NavigationRouters = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/technology" element={<TechnologyPage/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/food" element={<Food/>}/>
        </Routes>
    )
}

export default NavigationRouters;