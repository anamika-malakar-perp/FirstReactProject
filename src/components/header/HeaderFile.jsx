import React, {useRef, useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import './HeaderFile.css';

const HeaderFile = () => {

    const myContainer = useRef();

    const [state, setState] = useState(myContainer);

    useEffect(() => {
        console.log(myContainer.current);
        setState(myContainer.current)
    }, []);

    const openMenu = () => {

        if (state.style.display === "block") {
            state.style.display = "none";
        } else {
            state.style.display = "block";
        }
    }

    return (
        <div className='header-nav'>
            <div>
                <span className='rotate'>The</span>
                <span className='serif'>Siren</span>
            </div>

            <div className='humburger'>
                <button onClick={openMenu}>
                    <i class="fa fa-bars"></i>
                </button>
            </div>

            <div className='navigation-menu' ref={myContainer} id="mobile-navigation-menu">
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/" onClick={openMenu}>Home</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/bollywood" onClick={openMenu}>Bollywood</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/technology" onClick={openMenu}>Technology</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/hollywood" onClick={openMenu}>Hollywood</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/fitness" onClick={openMenu}>Fitness</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/food" onClick={openMenu}>Food</NavLink>
                </div>
            </div>

            <div className='navigation-menu' id="web-navigation-menu">
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/bollywood">Bollywood</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/technology">Technology</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/hollywood">Hollywood</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/fitness">Fitness</NavLink>
                </div>
                <div style={{marginBottom: '13px'}}>
                    <NavLink to="/food">Food</NavLink>
                </div>
            </div>
        </div>
    )
}

export default HeaderFile