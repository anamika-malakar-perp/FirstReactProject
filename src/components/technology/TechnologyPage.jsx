import React, { useEffect, useState } from 'react'
import UserTile from '../user/UserTile';
import SkillsChip from './SkillsChip';
import './Technology.css';
import TechnologyTile from './TechnologyTile';

const TechnologyPage = () => {
    const [technologyTile, setTechnologyTile] = useState([]);
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/technology`)
            .then(response => response.json())
            .then(data => {
                setTechnologyTile(data)
            })
        
        fetch(`http://localhost:8000/userinfo`)
            .then(response => response.json())
            .then(data => {
                setUserInfo(data)
            })
    }, []);

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