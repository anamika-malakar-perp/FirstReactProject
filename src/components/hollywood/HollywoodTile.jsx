import React from 'react';
import './Hollywood.css';
import { Link } from 'react-router-dom'

const HollywoodTile = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
                <Link to={`/hollywood/${data.title}`} state={{data}}>
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
                </Link>
            )}
        </>
    )
}

export default HollywoodTile