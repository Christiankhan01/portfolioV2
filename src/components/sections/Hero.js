import React, { useState, useEffect } from 'react';
import { email } from '../../utils/config';
import '../styles/hero.css';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

 const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true));
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div id = "hero" className="container">
            <div className="center">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <Grow in style={ { transformOrigin: '0 3 3' } }
                            {... { timeout: 1500 }}>
                            <div>
                                <h5 className ="hero__h5">Hello, my name is</h5>
                            </div>
                        </Grow>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <Grow in style={ { transformOrigin: '1 5 5' } }
                            { ...{ timeout: 2000 } }>
                            <div>
                                <h1 className="hero__h1">Christian Khan</h1>
                            </div>
                        </Grow>
                    </div>
                </div>
                {/* find out what 0 0 0 does */}
                <div className="row">
                
                    <div className="col-12 col-sm-12 col-md-12">
                        <Grow in style={ { transformOrigin: '0 5 0' } }
                            { ...{ timeout: 3000 } }>
                            <div>
                                <h2 className="hero__h2">I build websites and web applications.</h2>
                            </div>
                        </Grow>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8 col-lg-6">
                        <Grow in style={ { transformOrigin: '1 5 5' } }
                            { ...{ timeout: 4000 } }>
                            <p className="hero__p">I'm a computer programmer based in Toronto, ON. <br /> I specialize in Fullstack Web Development with ReactJS and build products and features over the internet.</p>
                        </Grow>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8 col-lg-6">
                        <Grow in style={ { transformOrigin: '1 5 5' } }
                            { ...{ timeout: 5000 } }>
                            
                            <button type="button" className="btn-lg hero__btn-color">
                                <div className="aColor">
                                    <a href={ `mailto:${email}` } className="aStyle">Contact Me!</a>
                                </div>
                            </button>
                        </Grow>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Hero; 

