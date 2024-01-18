import React, { Component } from 'react';
import './App.css';
import Header from './header';
import SocialLinks from './SocialLinks';
import About from './About';
import Projects from './Projects';
import Contact from './contact';
import Footer from './Footer';
import Menu from './Menu';
import Nav from './Nav';

class App extends Component {
    state = { loading: false };

    constructor(props) {
        super(props);
        this.state = { isMenuOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }


    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="body">

                <Nav toggleMenu={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} />
                <Menu isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} />

                <Header />
                <About />
                <Projects />
                <Contact />
                <Footer />
                <SocialLinks />
            </div>
        );
    }
}

export default App;
