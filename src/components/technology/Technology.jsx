import React from 'react';
import TechnologyTile from './TechnologyTile';

const Technology = () => {
  const technologyTile = [
    {
      img: 'assets/angualr.png',
      title: 'ANGULAR',
      description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      developer: 'Google'
    },
    {
      img: 'assets/react.png',
      title: 'REACT',
      description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
      developer: 'Meta and community'
    },
    {
        img: 'assets/node.webp',
        title: 'NODE-JS',
        description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
        developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
    }
  ];

  return (
    <div className='bollywood-latest-section'>
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