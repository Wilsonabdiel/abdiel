import React from 'react';
import SocialLinks from './SocialLinks';
import './Footer.css';

const Footer = () => (
    <footer>
        <div className="wrapper">
            {/* <h2 className="title">THANKS FOR VISITING</h2> */}
            <p className="copyright">Copyright &copy; {new Date().getFullYear()} JaWiL.</p>
            <SocialLinks />
        </div>
    </footer>
    );


export default Footer;
