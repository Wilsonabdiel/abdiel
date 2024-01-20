import React from 'react';
import './projects.css';
import Projectgrp from './Projectgrp';


const Projects = () => (
    <section id="projects">
        <div className="projects-container">
            <div className="heading">
                <h2 className="title">My Work So Far</h2>
                <p className="separator" aria-hidden="true" /> {/* Add aria-hidden for non-visual separator */}
                <p className="subtitle"> Here are some of the projects I have worked on so far.</p>

            </div>

        </div>
        <Projectgrp />
    </section>
);


export default Projects;
