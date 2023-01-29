import React from 'react';
import { Link } from 'react-router-dom'

const TechnologyTile = ({props}) => {

    return (
        <>
            {props.map((data, i) =>
            <div className='bollywood-tile'>
                <Link to={`/technology/${data.title}`} state={{data}}>
                    <img src={data.img} alt="empty"/>
                    <p className='title'>{data.title}</p>
                    <p className='description'>{data.description}</p>
                    <p className='date'>Developer: {data.developer}</p>
                </Link>
            </div>
            )}
        </>
    )
}

export default TechnologyTile