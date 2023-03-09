import React, { useEffect, useState } from 'react';
import TechnologyTile from './TechnologyTile';

const Technology = ({props}) => {

  
  const [technologyTile, setTechnologyTile] = useState([])

  useEffect(() => {
    fetch(`https://blog-backend-data.onrender.com/technology`)
      .then(response => response.json())
      .then(data => {
        setTechnologyTile(data)
      })
    }, []);

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Technology</span>
        <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <TechnologyTile props={technologyTile}/>
      </div>
    </div>
  )
}

export default Technology