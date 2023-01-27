import React from 'react';
import './Banner.css';

const BannerSideImages = ({props}) => {
    console.log(props)
    return (
        <>
            {props.map((data, i) =>
                <img className='side-images' src={data.img} alt="empty"/>
            )}
        </>
    )
}

export default BannerSideImages