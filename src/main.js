import React from 'react';


const Main = () => {
  // ... removed _defineProperty function for clarity

    const Menu = ({ isMenuOpen, onToggleMenu }) => (
        <div className={`menu-container ${isMenuOpen}`}>
            <div className="overlay" />
            <div className="menu-items">
                <ul>
                    <li>
                        <a href="#welcome-section" onClick={onToggleMenu}>HOME</a>
                    </li>
                    {/* ... other menu items */}
                    <SocialLinks />
                </ul>
            </div>
        </div>
  );

    const Nav = ({ isMenuOpen, onToggleMenu }) => (
        <nav id="navbar">
            <div className="nav-wrapper">
                <p className="brand">Ja<strong>W\iL</strong></p>
                <a
                    className={isMenuOpen ? 'menu-button active' : 'menu-button'}
                    onClick={onToggleMenu}>
                    <span />
                </a>
            </div>
        </nav>
  );

  // ... rest of the Main component logic
};


// const Header = () => (
//     <header id="welcome-section">
//         <div className="forest" />
//         <div className="silhouette" />
//         <div className="moon" />
//         <div className="container">
//             <h1>
//                 <span className="line">I do</span>
//                 <span className="line">backend dev.</span>
//                 <span className="line">
//                     <span className="color">&</span> I write.
//                 </span>
//             </h1>
//             <div className="buttons">
//                 <a href="#projects">my portfolio</a>
//                 <a href="#contact" className="cta">get in touch</a>
//             </div>
//         </div>
//     </header>
// );

// const About = () => (
//     <section id="about">
//         <div className="wrapper">
//             <article>
//                 <header>
//                     <h2>About Me</h2>
//                 </header>

//                 <section>
//                     <h3>Who's this guy?</h3>
//                     <p>...</p>
//                 </section>

//                 <section>
//                     <h3>What does he do?</h3>
//                     <p>...</p>
//                 </section>

//                 <section>
//                     <h3>Also a writer.</h3>
//                     <p>...</p>
//                 </section>
//             </article>
//         </div>
//     </section>
// );

// const Project = ({ title, img, tech, link, repo, children }) => (
//     <div className="project">
//         <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
//             <figure>
//                 <img className="project-image" src={img} alt={`Screenshot of ${title}`} />
//                 <figcaption>{title}</figcaption>
//             </figure>
//         </a>
//         <div className="project-details">
//             <div className="project-tile">
//                 <p className="icons">
//                     {tech.split(' ').map(t => (
//                         <i key={t} className={getIconClass(t)} />
//           ))}
//                 </p>
//             </div>
//             {children}
//             <div className="buttons">
//                 <a href={repo} target="_blank" rel="noopener noreferrer">
//                     View source <i className="fas fa-external-link-alt" />
//                 </a>
//                 <a href={link} target="_blank" rel="noopener noreferrer">
//                     Try it Live <i className="fas fa-external-link-alt" />
//                 </a>
//             </div>
//         </div>
//     </div>
// );

// function getIconClass(tech) {
//   // Map technologies to icon classes here
// }

// const Projects = ({ projects }) => (
//     <section id="projects">
//         <div className="projects-container">
//             <div className="heading">
//                 <h2 className="title">My Work So Far</h2>
//                 <p className="separator" aria-hidden="true" /> {/* Add aria-hidden for non-visual separator */}
//                 <p className="subtitle">
//                     Here's a list of <u>most</u> of the projects I've been working on lately. All of these were built during my coding camp adventure on {/* ... */}
//                 </p>
//             </div>
//             {projects.map(project => (
//                 <Project key={project.id} {...project} />
//       ))}
//         </div>
//     </section>
// );


// const Contact = ({ contactData }) => (
//     <section id="contact">
//         <div className="container">
//             <div className="heading-wrapper">
//                 <div className="heading">
//                     <h2 className="title">Want to contact me?</h2>
//                     <p className="separator" aria-hidden="true" /> {/* Add aria-hidden for non-visual separator */}
//                     <p className="subtitle">
//                         Please use the form below or send an email to
//                         <a href="mailto:wilsonabdiel86@gmail.com" className="mail">
//                             wilsonabdiel86{' '}
//                             <i className="fas fa-at at" aria-hidden="true" />{' '}
//                             gmail{' '}
//                             <i className="fas fa-circle dot" aria-hidden="true" />{' '}
//                             com
//                         </a>
//                         .
//                     </p>
//                     <SocialLinks />
//                 </div>
//             </div>
//             <form id="contact-form" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
//                 {/* ... form fields */}
//             </form>
//         </div>
//     </section>
// );


// const Footer = ({ footerData }) => (
//     <footer>
//         <div className="wrapper">
//             <h2 className="title">THANKS FOR VISITING</h2>
//             <p className="copyright">Copyright &copy; {new Date().getFullYear()} JaWiL.</p>
//             <SocialLinks />
//         </div>
//     </footer>
// );


// const SocialLinks = ({ socialLinks }) => (
//     <div className="social">
//         {socialLinks.map(link => (
//             <a
//                 key={link.href}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={link.title}>
//                 <i className={`fab fa-${link.icon}`} aria-hidden="true" />
//                 {link.title}
//                 const SocialLinks = ({ socialLinks }) = (
//                 <div className="social">
//                     {socialLinks.map(link => (
//                         <a
//                             key={link.href}
//                             href={link.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             title={link.title}>
//                             <i className={`fab fa-${link.icon}`} aria-hidden="true" />
//                             {link.title}
//                         </a>
//     ))}
//                 </div>
//                 );

//             </a>
//     ))}
//     </div>
// );


    /** *********************
      Main Component
     ********************** */

class App extends React.Component {
    constructor(...args) {
        super(...args); _defineProperty(this, 'state',
                                        {
                                            menuState: false }); _defineProperty(this, 'toggleMenu',


                                                                                 () => {
                                                                                     this.setState(state => ({
                                                                                         menuState: !state.menuState ?
            'active' :
            state.menuState === 'deactive' ?
            'active' :
            'deactive' }));
                                                                                 });
    }

    render() {
        return (
          React.createElement(React.Fragment, null,
                              React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
                              React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
                              React.createElement(Header, null),
                              React.createElement(About, null),
                              React.createElement(Projects, null),
                              React.createElement(Contact, null),
                              React.createElement(Footer, null)));
    }

    componentDidMount() {
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('#welcome-section');
        const forest = document.querySelector('.forest');
        const silhouette = document.querySelector('.silhouette');
        const forestInitPos = -300;

        window.onscroll = () => {
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPos <= window.innerHeight) {
                silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
                forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
            }

            if (scrollPos - 100 <= window.innerHeight) { header.style.visibility = header.style.visibility === 'hidden' && 'visible'; } else { header.style.visibility = 'hidden'; }

            if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active'); else { navbar.classList.remove('bg-active'); }
        };

        (function navSmoothScrolling() {
            const internalLinks = document.querySelectorAll('a[href^="#"]');
            for (const i in internalLinks) {
                if (internalLinks.hasOwnProperty(i)) {
                    internalLinks[i].addEventListener('click', (e) => {
                        e.preventDefault();
                        document.querySelector(internalLinks[i].hash).scrollIntoView({
                            block: 'start',
                            behavior: 'smooth' });
                    });
                }
            }
        }());
    }
}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

return (
    <div>
        <Menu />
        <Nav />
        <Header />
        <About />
        <Project />
        <Contact />
        <Footer />
        <SocialLinks />

    </div>
);


export default Main;
