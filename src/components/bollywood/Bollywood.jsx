import React, { useEffect, useState } from 'react'
import BollywoodTile from './BollywoodTile';
import './Bollywood.css';

const Bollywood = ({props}) => {

  const [bollywoodTile, setBollywoodTile] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/bollywood`)
      .then(response => response.json())
      .then(data => {
        setBollywoodTile(data)
      })
  }, []);

  return (
    <div className={props ? 'home-bollywood' : 'bollywood-latest-section'}>
      <div className='bollywood-title'>
        <span className='latest-bollywood'>Latest Bollywood Stories</span>
        <hr class="underline"/>
      </div>

      <div className='bollywoodTile'>
        <BollywoodTile props={bollywoodTile}/>
      </div>
    </div>
  )
}

export default Bollywood