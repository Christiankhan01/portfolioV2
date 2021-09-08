import React, {useState, useEffect} from 'react'
import '../styles/about.css';
import Fade from '@material-ui/core/Fade';
import profile from '../images/myPicture.jpg';

const About=() => {
    const [checked, setIsChecked]=useState(false);

    useEffect(() => {
        const timeout=setTimeout(() => {
            setIsChecked(true);
        });

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div className="container" id="about">
            <div className="about__body__style">
                <div className="center__about" >
                    <Fade in={checked} timeout={2000}>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5  ">
                                <h3 className="about__h3">About Me</h3>
                                <div className="about__p">
                                    Hi! I'm Christian, a software developer based in Ontario, Canada.
                                </div>
                                <hr />

                                <div className="about__p">
                                    I develop websites and web applications that live on the internet with a focus on fullstack web development.
                                    My goal is to always build products that achieve requirement goals.
                                </div>
                                <hr />
                                <div className="about__p">
                                    Shortly after graduating from<mark className="wheat" > YORK UNIVERSITY</mark>, I began building web applications  where I implement a
                                variety of interesting and meaningful projects and features on regular basis.
                                </div>
                                <hr />
                                <div className="about__p">
                                    Some technologies i've used recently
                                    </div>

                                <ul className=" list-group list-group-horizontal-sm ">
                                    <li className="list-group-style">Java</li>
                                    <li className="list-group-style">Javascript</li>
                                    <li className="list-group-style">ReactJS</li>
                                    <li className="list-group-style">ExpressJS</li>
                                    <li className="list-group-style">PostgreSQL</li>
                                </ul>
                            </div>
                                
                                <div className="col col-sm col-md-8 col-lg-5 offset-sm-2 ml-lg-auto  ">
                                <img className="img__pixelate img__responsive" src={ profile }  alt="Chat Logo" />
                                
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    )
}

export default About;
