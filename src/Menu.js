import React from 'react';
import './menu.css';
import SocialLinks from './SocialLinks';

const Menu = props => (
    <div className={`menu-container ${props.isMenuOpen ? 'active' : ''}`}>
        <div className="overlay" />
        <div className="menu-items">
            <ul>
                <li>
                    <a href="#welcome-section" onClick={props.toggleMenu}>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={props.toggleMenu}>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={props.toggleMenu}>
                        PORTFOLIO
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={props.toggleMenu}>
                        CONTACT
                    </a>
                </li>
                <SocialLinks />
            </ul>
        </div>
    </div>
  );

export default Menu;
