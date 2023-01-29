import React from 'react';
import { useLocation } from 'react-router-dom';

const TechnologyFullView = () => {
    const data = useLocation().state.data;

    return (
        <div className='full-view'>
            <span>{data.title}</span>

            <img src={'/' + data.img} alt="empty" className='full-view-img'/>

            <p>{data.description}</p>

            <p>Developer: {data.developer}</p>
        </div>
    )
}

export default TechnologyFullView