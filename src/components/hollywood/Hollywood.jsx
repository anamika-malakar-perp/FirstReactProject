import React, { useEffect, useState } from 'react';
import HollywoodTile from './HollywoodTile';
import './Hollywood.css';
import Advertisement from '../advertisement/Advertisement';

const Hollywood = ({props}) => {

  const [hollywoodTile, setHollywoodTile] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/hollywood`)
      .then(response => response.json())
      .then(data => {
        setHollywoodTile(data)
      })
    }, []);

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Hollywood Stories</span>
        <hr class="underline"/>
      </div>

      <div className='hollywood-advertisement'>
        <div className='hollywoodTile'>
          <HollywoodTile props={hollywoodTile}/>
        </div>
        
        <div className="advertisement">
          <Advertisement/>
        </div>
      </div>
    </div>
  )
}

export default Hollywood