import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => (


    <div className="socialsdiv">

        <div className="socials">
            <ul>
                <li>
                    <a href="https://github.com/Wilsonabdiel">
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/thewilsonabdiel">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/abdielbytes">
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                </li>
                {/* <li>
                    <a href="#contact">
                        <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                </li> */}
                {/* <li>
                    <a href="#contact">
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                </li> */}

            </ul>
        </div>
    </div>
  );

export default SocialLinks;
