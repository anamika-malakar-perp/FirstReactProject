import React from 'react';
import HomePage from '../home/HomePage';
import { Routes, Route } from 'react-router-dom';
import Bollywood from '../bollywood/Bollywood';
import TechnologyPage from '../technology/TechnologyPage';
import Hollywood from '../hollywood/Hollywood';
import Fitness from '../fitness/Fitness';
import Food from '../food/Food';
import BollywoodFullView from '../bollywood/BollywoodFullView';
import TechnologyFullView from '../technology/TechnologyFullView';
import HollywoodFullView from '../hollywood/HollywoodFullView';
import FitnessFullView from '../fitness/FitnessFullView';
import FoodFullView from '../food/FoodFullView';

const NavigationRouters = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/bollywood/:name" element={<BollywoodFullView/>}/>
            <Route path="/technology" element={<TechnologyPage/>}/>
            <Route path="/technology/:name" element={<TechnologyFullView/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/hollywood/:name" element={<HollywoodFullView/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/fitness/:name" element={<FitnessFullView/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/food/:name" element={<FoodFullView/>}/>
        </Routes>
    )
}

export default NavigationRouters;