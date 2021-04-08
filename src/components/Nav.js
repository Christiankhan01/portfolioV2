import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

import { Zoom } from '@material-ui/core';
import Routes from './Routes';
import './styles/nav.css';


const Navigation = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);



    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        return () => {
            clearTimeout(timeout);
        };
    }, []);



    return (
        <div className="container">
            <Navbar 
            collapseOnSelect
            className="mr-auto" 
            id="color-nav" 
            variant="light" 
            expand="md" 
            fixed="top"
            
            
            >
            
                    
                <Link to="#hero">
                    <Navbar.Brand id="nav__text__style">Christian Khan</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="hamburger-color" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Zoom in={ isMounted }
                            { ...(isMounted ? { timeout: 3700 } : {}) }>
                            
                            
                                <Link className="link-style" smooth to="#about">
                                    About
                                </Link>
                            
                        </Zoom>
                        <Zoom in={ isMounted }
                            { ...(isMounted ? { timeout: 4200 } : {}) }>
                            <Link className="link-style" smooth to="#projects">
                                Projects
                            </Link>
                        </Zoom>
                        <Zoom in={ isMounted }
                            { ...(isMounted ? { timeout: 4700 } : {}) }>
                            <Link className="link-style" smooth to="#contact">
                                Contact
                            </Link>
                        </Zoom>
                        <Zoom in={ isMounted }
                            { ...(isMounted ? { timeout: 4900 } : {}) }>
                            <button type="button" className="btn-sm nav-btn-color"> Resume </button>
                        </Zoom>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>


    )
}

export default Navigation;
