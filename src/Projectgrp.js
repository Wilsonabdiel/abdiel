import React from 'react';

const Project = ({ title, link, className = '' }) => (
    <div className="project">
        <a className={`project-link ${className}`} href={link} target="_blank" rel="noopener noreferrer">
            <figure>
                <figcaption>.</figcaption>
            </figure>
        </a>
        <figcaption>{title}</figcaption>
        <div className="project-details">
            <div className="project-tile" />
        </div>
    </div>
  );
const Projectgrp = () => (

    <div className="projects-wrapper">
        <div className="project-categ">
            <ul className="project-list flex">
                <div className="group">
                    <li>Current Focus</li>
                    <p className="separator" aria-hidden="true" />
                    <div className="grp flex">
                        <div className="proj imgback ">

                            <Project title="Assigner" img="..." link="..." className="assigner" />

                        </div>
                        <div className="proj ">
                            <Project title="PyBlog" img="..." link="..." className="py" />
                        </div>
                    </div>
                </div>
                <div className="group">
                    <li>Django Ecosystem</li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>
                <div className="group">
                    <li> Laravel Ecosystem </li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>

                <div className="group">
                    <li>Web Apps & Online Tools</li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>
                <li>Games</li>
                <p className="separator" aria-hidden="true" />

                <div className="group">
                    <li>CLI Programs</li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>


            </ul>
        </div>
    </div>

  );

export default Projectgrp;

