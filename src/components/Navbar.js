import React from "react"
import "./Navbar.css"
import PropTypes from 'prop-types'

function Navbar() {
    var name = "<HT/>";


    return (
        <div className="navbar_container">
            <div className="navbar_left">{name}</div>
            <div className="navbar_right">

                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Experience</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tools
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Resume</a></li>
                                        <li><a className="dropdown-item" href="#">Projects</a></li>
                                        <li><a className="dropdown-item" href="#">Contact</a></li>
                                        <li><hr className="dropdown-divider" />Download Resume</li>
                                        <li><a className="dropdown-item" href="#">Download</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success " type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbar; 