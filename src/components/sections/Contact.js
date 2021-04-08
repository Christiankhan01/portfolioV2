import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/contact.css';
import emailjs from 'emailjs-com'
import _ from "lodash/fp";



const Contact = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_dbz14cu', 'template_rst9zll', e.target, 'user_JdVMEuVm0zQO6wRaTji87')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);

            });
        e.target.reset();

    }
    return (

        <div className="container" id="contact">
            <div className="contact__body__style">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 offset-md-1 pt-4">
                        <div className="text-center">
                            <h3 id="contact__h3">Contact Me</h3>
                            <p id="contact__p">Want to discuss some of my work? <br /> Have an idea for a website or web application? <br /> My inbox is always open and i'll try my best to get back to you!</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={ sendEmail }>
                    <div className="row pt-5 mx-auto">
                        <div className="col-7 form-group mx-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                required
                            />
                        </div>


                        <div className="col-xs-12 col-7 form-group pt-2 mx-auto">
                            <input type="email" className="form-control " placeholder="Email Address" name="email" required />
                        </div>

                        <div className="col-7 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-7 form-group pt-2 mx-auto color__text">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required ></textarea>
                        </div>
                        <div className="col-7  pt-3 mx-auto ">

                            <input type="submit" className="btn-custom" variant="custom" value="Send Message"></input>

                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact;
