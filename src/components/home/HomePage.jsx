import React from 'react'
import Banner from '../banner/Banner'
import Bollywood from '../bollywood/Bollywood';
import Hollywood from '../hollywood/Hollywood';
import Technology from '../technology/Technology';
import Fitness from '../fitness/Fitness';
import Food from '../food/Food';

const HomePage = () => {
    const bannerImage = {
        img: 'assets/first-image.jpg'
    }

    return (
        <>
            <Banner props={bannerImage}/>
            <Bollywood/>
            <Technology/>
            <Hollywood/>
            <Fitness/>
            <Food/>
        </>
    )
}

export default HomePage