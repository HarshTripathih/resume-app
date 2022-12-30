import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contactus.css"
import styled from "styled-components";


// npm i @emailjs/browser

const Contactus = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm(
                "service_hanl9v5",
                "template_8yo0lo3",
                form.current,
                "uYUaDLgPdAFV_6F2i"
            )
            .then(
                (result) => {

                    console.log(result.text);
                    console.log("message sent");
                    alert("We have recieved your mail succesfully!")
                    form.current.reset();
                },
                (error) => {

                    console.log(error.text);
                    alert("Sorry, there was some error!")
                    form.current.reset();
                }
            );
    };

    return (

        <section className="mb-4">


            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div className="row">


                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>


                        <div className="row">


                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="user_name" className="form-control" required />
                                    <label for="name" className="">Your name</label>
                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="email" id="email" name="user_email" className="form-control" required/>
                                    <label for="email" className="">Your email</label>
                                </div>
                            </div>


                        </div>



                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" name="user_subject" className="form-control" required/>
                                    <label for="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>



                        <div className="row">


                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" required></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>

                        <div className="text-center text-md-left">
                            <input type="submit" value="Send" className="btn btn-primary" />
                        </div>
                        <div className="status"></div>

                    </form>


                </div>



                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p>Jalandhar , Punjab, India</p>
                        </li>

                        <li><a href="tel:8765735974">
                            <i className="fas fa-phone mt-4 fa-2x"></i>
                            <p>+91 9219 2530 95</p>
                            </a>
                        </li>

                        <li><a href="mailto:harshtripathih321@gmail.com">
                            <i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p>harshtripathih321@gmail.com</p>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>

        </section>

    );
};

export default Contactus;