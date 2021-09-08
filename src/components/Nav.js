import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import {Slide} from '@material-ui/core';
import $ from 'jquery';

import './styles/nav.css';


const Navigation = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);

    useEffect(() => {
        $(".color-nav").on("click", function(){
            $("#responsive-navbar-nav").removeClass("show")})
        
        const timeout = setTimeout(() => {
            setIsMounted(true);
        });
        return () => {
            clearTimeout(timeout);
        };
    }, []);



    return (
            <Navbar className="mr-auto color-nav" variant="light" expand="md"  fixed="top" >
                
            <Link to="#hero">
                <Navbar.Brand id="nav__text__style">Christian Khan</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger-color" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Slide direction="down" in={ isMounted }
                            { ...(isMounted ? { timeout: 700 } : {}) }>
                                <Link className="link-style" smooth to="#about">
                                    About
                                </Link>
                        </Slide>
                        <Slide direction="down" in={ isMounted }
                            { ...(isMounted ? { timeout: 900 } : {}) }>
                            <Link className="link-style" smooth to="#projects">
                                Projects
                            </Link>
                        </Slide>
                        <Slide direction="down" in={ isMounted }
                            { ...(isMounted ? { timeout: 1000 } : {}) }>
                            <Link className="link-style" smooth to="#contact">
                                Contact
                            </Link>
                        </Slide>
                        {/*<Slide direction="down" in={ isMounted }
                            { ...(isMounted ? { timeout: 1200 } : {}) }>
                            <button type="button" className="btn-sm nav-btn-color"> 
                            <a href="resume.pdf" target="_blank">
                            Resume </a></button>
    </Slide> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        


    )
}

export default Navigation;
