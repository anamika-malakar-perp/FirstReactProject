import React from 'react';
import { useLocation } from 'react-router-dom';
import './Food.css';

const FoodFullView = () => {
    const data = useLocation().state.data;
    return (
        <div className='full-view'>
            <span>{data.title}</span>

            <img src={'/' + data.img} alt="empty" className='food-full-view-img'/>

            <p>{data.description}</p>
        </div>
    )
}

export default FoodFullView