import React from "react";
import "./Footer.css";
import PropTypes from 'prop-types';
import { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Footer() {

    const form = useRef();

    const sendSubscribe = (e) => {
        e.preventDefault();


        emailjs
            .sendForm(
                "service_hanl9v5",
                "template_nl481m2",
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

    var name = "<HT/>";
    return (
        <footer>
            <form ref={form} onSubmit={sendSubscribe}>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <span className="logo_name">{name}</span>
                        </div>
                        <div className="media-icons">
                            <a href="https://www.facebook.com/profile.php?id=100025286887136&mibextid=ZbWKwL"target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com/harshtripathih5?t=-kf-8lVl-dx3xjQrL53uwA&s=08"target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/its_harsh_tripathi/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/harsh-tripathi-120ba01b5/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.youtube.com/channel/UCHr3aiBaHkUA9HNzBIKLiPg"target="_blank"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Portfolio</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><a href="#">App design</a></li>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Logo design</a></li>
                            <li><a href="#">Banner design</a></li>
                        </ul>

                        <ul className="box input-box">
                            <li className="link_name">Subscribe</li>
                            <li><input type="email" placeholder="Enter your email" name="subscribe" required /></li>
                            <li><input type="submit" value="Subscribe" /></li>
                        </ul>

                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2021 <a href="#">Harsh Tripathi.</a>All rights reserved</span>
                        <span className="policy_terms">
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms & condition</a>
                        </span>
                    </div>
                </div>
            </form>
        </footer>
    );
}