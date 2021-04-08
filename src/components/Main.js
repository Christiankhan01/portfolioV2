import React from 'react';
import Nav from './Nav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Resume from '../components/sections/Resume';
const Main = () => {
    return (
        <div>
            <div className="row">
                <Nav />
            </div>
            <div className="row">
                <Hero />
            </div>
            <div className="row">
                <About />
            </div>
            <div className="row">
                <Projects />
            </div>
            <div className="row">
                <Contact />
            </div>
            <div className = "row">
                <Resume /> 
            </div>
        </div>
    )
}

export default Main; 
