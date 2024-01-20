import React from 'react';
import SocialLinks from './SocialLinks';
import './contact.css';

const Contact = () => (
    <section id="contact">
        <div className="container">
            <div className="heading-wrapper">
                <div className="heading">
                    <h2 className="title">Want to contact me?</h2>
                    <p className="separator" aria-hidden="true" /> {/* Add aria-hidden for non-visual separator */}
                    <p className="subtitle">
                        Please use the form below or send an email to
                        <a href="mailto:wilsonabdiel86@gmail.com" className="mail">
                            wilsonabdiel86{' '}
                            <i className="fas fa-at at" aria-hidden="true" />{' '}
                            gmail{' '}
                            <i className="fas fa-circle dot" aria-hidden="true" />{' '}
                            com
                        </a>
                        .
                    </p>
                    <SocialLinks />
                </div>
            </div>
            <form id="contact-form" action="https://formsubmit.co/493fc4bf038a46bcf37e4b1ef70a8377" method="POST" >


                <input placeholder="Name" name="name" type="text" required />
                <input placeholder="Email" name="email" type="email" required />
                <textarea placeholder="Message" type="text" name="message" />
                <input className="button" id="submit" value="Submit" type="submit" />
            </form>
        </div>
    </section>
);

export default Contact;
