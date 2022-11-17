import React from "react"
import "./Navbar.css"
import PropTypes from 'prop-types'

function Navbar() {
    var name = "<HT/>";


    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light flex-row-reverse">
                <div className="container-fluid">
                    <a className="fs-1 navbar-brand text-danger" href="#">{name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-danger" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ExploreMore
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">TechStack</a></li>
                                    <li><a className="dropdown-item" href="#">Experiences</a></li>
                                    <li><a className="dropdown-item" href="#">Projects</a></li>
                                    <li><hr className="dropdown-divider" />Download Resume</li>
                                    <li><a className="dropdown-item" href="#">Download Me!</a></li>
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