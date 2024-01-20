const Project = ({ title, img }) => (

    <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            <figure>
                <img className="project-image" src={img} alt={`Screenshot of ${title}`} />
                <figcaption>{title}</figcaption>
            </figure>
        </a>
        <div className="project-details">
            <div className="project-tile">
                <p className="icons">
                    {tech.split(' ').map(t => (
                        <i key={t} />
        ))}
                </p>
            </div>
    </div>
   </div>
   );






   
const Project = ({ title, img, tech, link, repo, children }) => (

    <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            <figure>
                <img className="project-image" src={img} alt={`Screenshot of ${title}`} />
                <figcaption>{title}</figcaption>
            </figure>
        </a>
        <div className="project-details">
            <div className="project-tile">
                <p className="icons">
                    {tech.split(' ').map(t => (
                        <i key={t} />
        ))}
                </p>
            </div>
            {children}
            <div className="buttons">
                <a href={repo} target="_blank" rel="noopener noreferrer">
                    View source <i className="fas fa-external-link-alt" />
                </a>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Try it Live <i className="fas fa-external-link-alt" />
                </a>
            </div>
        </div>
    </div>
   );




   <Project
   title="Anonymous Message Board."
   img="https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg"
   tech="js css react node"
   link="https://yagoestevez-anon-msg-board.glitch.me/"
   repo="https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form">
   <small>Built using Node, Express, MongoDB, CSS + Bulma, React.js, and React Router.</small>
   <p>This is a full-stack website that I made which lets the
       users read and post anonymous messages and replies.</p>
</Project>



import React from 'react';
import './your-css-file.css'; // Import your CSS file

const Project = ({ title, img, link }) => (
  // ... your Project component code
);


const Projectgrp = () => (
    <div className="projects-wrapper">
        <div className="project-categ">
            <ul className="project-list">
                <div>
                    <li>Current Focus</li>
                    <p className="separator" aria-hidden="true" />
                    <Project
                        title="Assigner"
                        img="C:\Users\Abdiel\Downloads\assign.jpg"
                        tech="js css react node"
                        link="https://yagoestevez-anon-msg-board.glitch.me/">
                        {/* <small>Built using Node, Express, MongoDB, CSS + Bulma, React.js, and React Router.</small>
                        <p>This is a full-stack website that I made which lets the
                            users read and post anonymous messages and replies.</p> */}
                    </Project>

                    <Project
                        title="PyBlog"
                        img="https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg"
                        tech="python js css react node"
                        link="https://yagoestevez-anon-msg-board.glitch.me/" />

                </div>
                <li> Django Ecosystem </li>
                <p className="separator" aria-hidden="true" />

                <li> Laravel Ecosystem </li>
                <p className="separator" aria-hidden="true" />

                <li>Games</li>
                <p className="separator" aria-hidden="true" />

                <li>Web Apps & Online Tools</li>
                <p className="separator" aria-hidden="true" />

                <li>CLI Programs</li>
                <p className="separator" aria-hidden="true" />

            </ul>
        </div>


        {/* Repeat the pattern for other projects */}
    </div>

     );

export default Projectgrp;


const Project = ({ title, img, link, class }) => (


    <div className="project">
        <a className={class}"project-link" href={link} target="_blank" rel="noopener noreferrer">
            <figure>
                <img className="project-image" src={img} alt={`Screenshot of ${title}`} />
                <figcaption>{title}</figcaption>
            </figure>
        </a>
        <div className="project-details">
            <div className="project-tile" />
        </div>
    </div>

   );