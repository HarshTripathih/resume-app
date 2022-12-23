import React from "react"
import "./Navbar.css";
import PropTypes from 'prop-types';
import CV from "../images/CV.pdf";
import Homepage from "./Homepage/Homepage";
import { HashLink as Link } from "react-router-hash-link";
import harsh from "../images/harsh.jpg";

function Navbar() {

    var name = "<HT/>";

    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light flex-row-reverse">
                <div className="container-fluid">
                    <a className="fs-1 navbar-brand text-danger" href="#">{name}</a>
                    <div className="image-circle">
                        <img src={harsh} alt=" " />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 

                            <li className="nav-item">
                                <a className="nav-link active text-danger" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" aria-current="page" href="/contactus">ContactUs</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ExploreMore
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/techstack">TechStack</a></li>
                                    <li><a className="dropdown-item" href="/experiences">Experiences</a></li>
                                    <li><a className="dropdown-item" href="/projects">Projects</a></li>
                                    <li><hr className="dropdown-divider" />Download Resume</li>
                                    <li><a className="dropdown-item" href={CV} download={CV}>Download Me <i class="fa fa-download"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar; 