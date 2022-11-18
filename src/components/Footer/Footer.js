import React from "react";
import "./Footer.css";
import PropTypes from 'prop-types';


export default function Footer() {
    var name = "<HT/>";
    return (
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                        <i className="fab fa-slack"></i>
                        <span className="logo_name">{name}</span>
                    </div>
                    <div className="media-icons">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
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
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
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
        </footer>
    );
}