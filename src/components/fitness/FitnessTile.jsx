import React from 'react';
import './Fitness.css';
import { Link } from 'react-router-dom';

const FitnessTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            <div className='fitness-tile'>
                <Link to={`/fitness/${data.title}`} state={{data}}>
                    <img src={data.img} alt="empty"/>
                    <p className='title'>{data.title}</p>
                    <p className='description'>{data.description}</p>
                </Link>
            </div>
            )}
        </>
    )
}

export default FitnessTile