import React from 'react';
import './Bollywood.css';

const BollywoodTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            <div className='bollywood-tile'>
                <img src={data.img} alt="empty"/>
                <p className='title'>{data.title}</p>
                <p className='description'>{data.description}</p>
                <p className='date'>{data.releaseDate}</p>
            </div>
            )}
        </>
    )
}

export default BollywoodTile