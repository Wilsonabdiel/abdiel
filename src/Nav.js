import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav id="navbar">
        <div className="nav-wrapper">
            <p className="brand">
                Ja<strong>WiL</strong>
            </p>
            <a
                onClick={props.toggleMenu}
                className={`menu-button ${props.isMenuOpen ? 'active' : ''}`}>
                <span />
            </a>
        </div>
    </nav>
  );

export default Nav;
