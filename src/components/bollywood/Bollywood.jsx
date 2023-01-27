import React from 'react'
import BollywoodTile from './BollywoodTile';
import './Bollywood.css';

const Bollywood = () => {
  const bollywoodTile = [
    {
      img: 'assets/first-movie.jfif',
      title: 'KESARI',
      description: 'Ishar Singh is a havildar in the Sikh Regiment of the British Indian Army. His superior and commander is an arrogant British officer, who deems all Indians to be cowards, and is jealous of Ishar Singh because of his superior fighting skills.',
      releaseDate: '21 March 2019'
    },
    {
      img: 'assets/second-movie.jpg',
      title: 'URI',
      description: 'The first chapter opens up with an ambush in June 2015 on the convoy of the Indian Army troops in Chandel, Manipur by NSCN(K) militants. In retaliation, Major Vihaan Singh Shergill, a Para SF officer and his unit, including his brother-in-law, Major Karan Kashyap, infiltrate and attack the Northeastern militants and also kill the key leader responsible for the ambush.',
      releaseDate: '11 January 2019'
    },
    {
        img: 'assets/third-movie.jpg',
        title: 'GOVINDA MERA NAAM',
        description: 'The very charming Govinda Waghmare juggles his time and love between his wife Mrs. Waghmare and his girlfriend in this dose of chaos, confusion, and laughter.',
        releaseDate: '16 December 2022'
    }
];

  return (
    <div className='bollywood-latest-section'>
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