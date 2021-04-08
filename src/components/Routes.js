import React from 'react'
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Element } from 'react-scroll';

const Routes = () => {
    return (


        <Switch>
            <Route exact path="/" component={ Hero } />
            <Route path="/about" component={ About } />
            <Route path="/projects" component={ Projects } />
            <Route path="/contact" component={ Contact } />
        </Switch>
    )
}

export default Routes;
