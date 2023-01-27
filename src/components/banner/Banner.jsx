import React from 'react';
import './Banner.css';
import BannerSideImages from './BannerSideImages';

const Banner = ({props}) => {
    const sideImages = [
        {
            img: 'assets/second-image.jpg'
        },
        {
            img: 'assets/second-image.jpg'
        }
    ];

    return (
        <div className='bannerWrapper'>
            
            <img className='first-image' src={props.img} alt='empty'/>
            {/* <span className='welcome-text'>Welcome to Anamika's latest stories blog</span> */}

            <div className='bannerSideImages'>
                <BannerSideImages props={sideImages}/>
            </div>
        </div>
    )
}

export default Banner