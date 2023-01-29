import React from 'react';
import './Bollywood.css';
import { Link } from 'react-router-dom';

const BollywoodTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            
                <div className='bollywood-tile'>
                    <Link to={`/bollywood/${data.title}`} state={{data}}>
                        <img src={data.img} alt="empty"/>
                        <p className='title'>{data.title}</p>
                        <p className='description'>{data.description}</p>
                        <p className='date'>{data.releaseDate}</p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default BollywoodTile