import React from 'react'
import UserTile from '../user/UserTile';
import SkillsChip from './SkillsChip';
import './Technology.css';
import TechnologyTile from './TechnologyTile';

const TechnologyPage = () => {
    const userInfo = [
        {
            img: 'assets/user.png',
            name: 'Dmitry Nozhenko',
            created: 'Jan 28, 2019',
            time: '10 min read',
            shareIcons: true
        }
    ];

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

    const skills = [
        'React', 'Javascript', 'Animations'
    ];

    return (
        <>
            <div className='technology-container'>
                <div className='technology-page'>
                    <div className='technology-left'>
                        <div>
                            <img src="assets/likes.png" alt="empty"/>
                            <span>9.3K</span>
                        </div>

                        <div>
                            <img src="assets/share.png" alt="empty"/>
                            <span>Share this article</span>
                        </div>
                    </div>

                    <div className='technology-right'>
                        <span class="react-heading">5 Ways to animate a React app</span>

                        <UserTile props={userInfo}/>

                        <img className="animation-react-image" src="assets/animation-react.png" alt="empty"/>

                        <p className='react-context'>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. Let’s talk about them</p>

                        <img src="assets/react-code.png" alt="empty" className='react-code'/>

                        <div className='skills-chip'>
                            <SkillsChip props={skills}/>
                        </div>

                        <div>
                            <img src="assets/likes.png" alt="empty"/>
                            <span>9.3K</span>
                        </div>

                        <div>
                            <hr/>

                            <UserTile props={userInfo}/>

                            <hr/>
                        </div>
                    </div>
                </div>

                <span>More from the Siren</span>

                <hr/>

                <div className='bollywoodTile'>
                    <TechnologyTile props={technologyTile}/>
                </div>
            </div>
        </>

    )
}

export default TechnologyPage