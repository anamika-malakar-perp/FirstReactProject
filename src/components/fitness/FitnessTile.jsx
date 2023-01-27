import React from 'react';
import './Fitness.css';

const FitnessTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            <div className='fitness-tile'>
                <img src={data.img} alt="empty"/>
                <p className='title'>{data.title}</p>
                <p className='description'>{data.description}</p>
            </div>
            )}
        </>
    )
}

export default FitnessTile