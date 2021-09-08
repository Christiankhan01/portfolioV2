import React, { useState, useEffect } from 'react';
import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';
import chatLogo from '../images/chatLogo.png';
import NewsPaper from '../images/NewsPaper.png';
import CheckList from '../images/Checklist.png';
import Fade from '@material-ui/core/Fade';
import '../styles/projects.css';

const Projects = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setChecked(true));
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="container" id="projects">
            <div className="body__style">
                <div className="title__h3">
                    <h3>Some Things I've Built</h3>
                </div>

                <Fade in={ checked } { ...{ timeout: 3000 } }>
                    <div className="card mb-3 mt-5 mr-auto card__body__color col-lg-8 ">
                        <span className="d-flex">
                            <div className="ml-auto icon__style">
                                <a href="https://www.github.com/christiankhan01/text-chat-app" className="card-link" target="_blank"><Github /></a>
                                <a href="https://text-chat.netlify.app" className="card-link"  target="_blank"><BoxArrowUpRight /></a>
                            </div>
                        </span>
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <img className="img__pixelate" src={ chatLogo } className="card-img" alt="Chat Logo" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Chatter
                                </h4>
                                    <h6 className="card-subtitle mb-2 text-muted">NodeJS text-chat app</h6>
                                    <br />
                                    <p className="card-text">
                                        A fullstack web application built with ReactJS, Socket.IO, NodeJS and ExpressJS demonstrating text communication between users over a client-server architecture.
                                </p>
                                </div>
                                <div className="row">
                                    <div className= "mr-auto">
                                        <ul className="list-group list-group-horizontal-sm">
                                            <li className="list-group-item li__style">Reactjs</li>
                                            <li className="list-group-item li__style">Socket.IO</li>
                                            <li className="list-group-item li__style">NodeJS</li>
                                            <li className="list-group-item li__style">ExpressJS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade in={ checked } { ...{ timeout: 3000 } }>
                    <div className="card mb-3 mt-5 ml-auto card__body__color col-lg-8 ">
                        <span className="d-flex">
                            <div className="ml-auto icon__style">
                                <a href="https://github.com/Christiankhan01/NewsMe" className="card-link" target="_blank"><Github /></a>
                                <a href="https://newsme1.netlify.com" className="card-link" target="_blank"><BoxArrowUpRight /></a>
                            </div>
                        </span>
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <img className="img__pixelate" src={ NewsPaper } className="card-img" alt="Chat Logo" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        NewsMe App
                            </h4>
                                    <h6 className="card-subtitle mb-2 text-muted">NodeJS API Call App</h6>
                                    <br />
                                    <p className="card-text">
                                        A fullstack web application built with ReactJS, ReduxJS, Axios and NodeJS demonstrating an API call to gnews.io for news sources, state management with reduxJS and Google OAuth for sign-in. No Registration Required.
                                </p>

                                </div>
                                <div className="row">
                                    <div className="mr-auto">
                                        <ul className="list-group list-group-horizontal-sm">
                                            <li className="list-group-item li__style">ReactJS</li>
                                            <li className="list-group-item li__style">ReduxJS</li>
                                            <li className="list-group-item li__style">Axios</li>
                                            <li className="list-group-item li__style">NodeJS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade in={ checked } { ...{ timeout: 3000 } }>
                    <div className="card mb-0 mt-5 mr-auto card__body__color col-lg-8 ">
                        <span className="d-flex">
                            <div className="ml-auto icon__style">
                                <a href="https://github.com/Christiankhan01/Todo-Today" className="card-link" target="_blank"><Github /></a>
                                <a href="https://todo-app-postgres-jwt.herokuapp.com/" className="card-link" target="_blank"><BoxArrowUpRight /></a>
                            </div>
                        </span>
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <img className="img__pixelate" src={ CheckList } className="card-img" alt="Chat Logo" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Todo Today
                                </h4>
                                    <h6 className="card-subtitle mb-2 text-muted">NodeJS PostgreSQL CRUD app</h6>
                                    <br />
                                    <p className="card-text">
                                    A fullstack web application built with PostgreSQL, NodeJS, ExpressJS and ReactJS demonstrating CRUD operations over a RESTful architecture. This website utilizes JSON Web Tokens for authorization and encryption with bcrypt.
                                </p>
                                </div>
                                <div className="row">
                                    <div className="mr-auto">
                                        <ul className="list-group list-group-horizontal-sm">
                                            <li className="list-group-item li__style">ReactJS</li>
                                            <li className="list-group-item li__style">ExpressJS</li>
                                            <li className="list-group-item li__style">NodeJS</li>
                                            <li className="list-group-item li__style">PostgreSQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                
            </div>
        </div>

    );
}

export default Projects;
