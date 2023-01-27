import React from 'react';
import './Hollywood.css';

const HollywoodTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
            <div className='hollywood-tile'>
                <div className='hollywood-image'>
                    <img src={data.img} alt="empty"/>
                </div>

                <div className='hollywoodInfo'>
                    <p className='title'>{data.title}</p>
                    <p className='description'>{data.description}</p>
                    <p className='directed-by'>{data.directedBy}</p>
                </div>
            </div>
            )}
        </>
    )
}

export default HollywoodTile