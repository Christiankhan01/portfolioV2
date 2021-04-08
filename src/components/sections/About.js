import React, { useState, useEffect } from 'react'
import '../styles/about.css';
import { Fade } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Element } from 'react-scroll';


const About = () => {
    const [checked, setIsChecked] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsChecked(true);
        }, 100);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div className="container" id="about">
            <div>
                <div className="center__about" >
                    <Fade in={ checked } timeout={ 2000 }>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <h3 className="about__h3">About Me</h3>
                                <Typography className="about__p">
                                    Hi! I'm Christian, a software developer based in Ontario, Canada.
                                </Typography>
                                <hr />

                                <Typography className="about__p">
                                    I develop websites and web applications for the internet with a focus on fullstack development with ReactJS and NodeJS.
                                    My goal is to always build products that solve end-user problems and achieve requirement goals.
                                </Typography>
                                <hr />
                                <Typography className="about__p">
                                    Shortly after graduating from<mark className="wheat" > YORK UNIVERSITY</mark>, I began building web applications using the MERN and PERN stack where I implement a
                                variety of interesting and meaningful project features on daily basis. 
                                </Typography>
                                <hr />
                                <Typography className="about__p">
                                    Some Tech i've used Recently
                                    </Typography>
                                    
                                    <ul className=" list-group list-group-horizontal-sm ">
                                    <li className="list-group-style">Java</li>
                                    <li className="list-group-style">Javascript</li>
                                    <li className="list-group-style">ReactJS</li>
                                    <li className="list-group-style">ExpressJS</li>
                                    <li className="list-group-style">PostgreSQL</li>
                                    </ul>
                            </div>
                            <div className="col col-sm col-md-12 col-lg-6">
                                <h1>Image here</h1>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            
        </div>
    )
}

export default About;
