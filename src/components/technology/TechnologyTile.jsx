import React from 'react'
import UserTile from '../user/UserTile'

const TechnologyTile = ({props}) => {

    return (
        <>
            {props.map((data, i) =>
            <div className='bollywood-tile'>
                <img src={data.img} alt="empty"/>
                <p className='title'>{data.title}</p>
                <p className='description'>{data.description}</p>
                <p className='date'>Developer: {data.developer}</p>
            </div>
            )}
        </>
    )
}

export default TechnologyTile