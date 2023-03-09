import React, { useEffect, useState } from 'react';
import FitnessTile from './FitnessTile';

const Fitness = ({props}) => {
  const [fitnessTile, setFitnessTile] = useState([])

  useEffect(() => {
    fetch(`https://blog-backend-data.onrender.com/fitness`)
      .then(response => response.json())
      .then(data => {
        setFitnessTile(data)
      })
    }, []);

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
      <span className='latest-bollywood'>Latest Fitness Stories</span>
      <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <FitnessTile props={fitnessTile}/>
      </div>
    </div>
  )
}

export default Fitness