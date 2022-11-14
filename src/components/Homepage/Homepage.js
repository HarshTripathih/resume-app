import React from "react";
import './Homepage.css'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'


function Homepage() {

    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red_color">Hi,</span> my name is</p>
                <p className="homepage_left_h2">Harsh Tripathi</p>
                <p className="homepage_left_h3">Developer at <span className="red_color">Somewhere</span>{" "}
                </p>
                <p className="homepage_left_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <div>
                    <a href="https://github.com/HarshTripathih"target="_blank">
                        <img src={github}alt="githubimage"className="homepage_logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-tripathi-120ba01b5/"target="_blank">
                        <img src={linkedin}alt="linkedinimage"className="homepage_logo"/>
                    </a>
                </div>
                <a href="mailto:harshtripathih321@gmail.com"></a>
                <button className="homepage_left_button">Get in Touch</button>   
            </div>
            <div className="homepage_right">
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"alt="GIF"/>
            </div>
        </div> 
    );
}

export default Homepage;