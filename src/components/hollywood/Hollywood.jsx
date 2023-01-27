import React from 'react';
import HollywoodTile from './HollywoodTile';
import './Hollywood.css';
import Advertisement from '../advertisement/Advertisement';

const Hollywood = () => {
  const hollywoodTile = [
    {
      img: 'assets/strangers-things.jpg',
      title: 'STRANGERS THINGS',
      description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
      directedBy: 'The Duffer Brothers'
    },
    {
      img: 'assets/friends.jpg',
      title: 'FRIENDS',
      description: 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.',
      directedBy: 'David Crane & Marta Kauffman'
    },
    {
        img: 'assets/big-bang-theory.jfif',
        title: 'BIG BANG THEORY',
        description: 'The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny.',
        directedBy: ' Mark Cendrowski'
    }
];

  return (
    <div className='bollywood-latest-section'>
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