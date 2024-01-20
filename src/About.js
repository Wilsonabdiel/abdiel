import React from 'react';
import './About.css';
// import AuthorAbdiel from './images/AuthorAbdiel.jpg';

const About = () => (
    <section id="about">
        <div className="wrapper">

            <article>
                {/* <header>
                    <h2>About Me</h2>
                </header> */}

                <div className="title">
                    <h3>Who is this guy?</h3>
                    <p className="separator" />

                    <div className="desc full">
                        <h4 className="subtitle">My name is Abdiel. </h4>
                        <p>I am a web developer and a writer well versed
                            in the beauty of the backend with knowlegde of the frontend.</p>
                        <p>
                            I enjoy problem-solving and creating visually
                            appealing and user-friendly interfaces,
                            and well perfroming, scallable and secure backends.
                            My passion for learning is insatiable. I thrive on acquiring new
                            knowledge and skills. Writing has always held a
                            special place in my heart, it is a hobby
                            I have cherished since high school, where my
                            teachers praised my work. I am not just a coder,
                            I am also a poet, expressing my thoughts through words.
                            Additionally, I have a deep passion for food,
                            savoring both the culinary art and its cultural significance!

                        </p>
                    </div>
                </div>

                <div className="title">
                    <h3>What does he do?</h3>
                    <p className="separator" /></div>
                <div className="desc">
                    <h4 className="subtitle">I am a programmer.</h4>
                    <p>In my front-end work, I typically utilize
                        JavaScript, both independently and in conjunction
                        with well-known frameworks such as ReactJS
                        and VueJS. Additionally, I enhance the
                        aesthetics of web applications using
                        Sass, CSS, and, when necessary, complementary
                        tools like Bootstrap and Bulma.</p>
                    <p>For the bcakend I work with PHP,
                        either standalone or with its frameworks
                        like laravel and symphony. I also work with
                        Python and its frameworks Django and Flask.
                        I work with whatever the project requires
                        even Wordpress when situations require it </p>


                </div>


                <div className="desc">
                    <h3 className="subtitle">Also a writer.</h3>
                    <p>I am a passionate writer with a penchant for creativity.
                        When I am not delving into the realm of words and stories,
                        I harness my imagination through the art of poetry,
                        enabling me to convey my thoughts in distinctive and captivating ways.
                        Beyond the written word, I also find solace and excitement in the virtual
                        landscapes of video games,
                        where I embark on thrilling adventures and put my strategic thinking to the test.</p>
                </div>
            </article>
        </div>
    </section>
     );

export default About;
