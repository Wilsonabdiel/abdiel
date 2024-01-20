import React from 'react';
import './header.css';

const Header = () => (
    <header id="welcome-section">
        <div className="parentcontainer">
            <div className="containerbackground outline">
                <p> Abdiel J. WIlson </p>
            </div>
        </div>
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
            <h1>
                <span className="line">Software Engineer</span>
                {/* <span className="line">backend dev.</span> */}
                <span className="line">
                    <span className="color">&</span> Writer.
                </span>
            </h1>
            <div className="buttons">
                <a href="#projects">my portfolio</a>
                <a href="#contact" className="cta">get in touch</a>
            </div>
        </div>
    </header>

     );

export default Header;
