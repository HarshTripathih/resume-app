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
                <p className="homepage_left_h3">Stuedent of <span className="red_color">Btech(CSE)</span>{" "}
                </p>
                <p className="homepage_left_description"><p className="pred_color">Currently,</p>I have opted Btech(CSE) at Lovely Professional University.{" "}<br/>
                    <span><span className="red_color">A full stack – developer,</span> specializing in Web-App development. Experienced with all stages of development cycle for web project. well-versed in numerous programming languages including C, java script, html, SQL Server , flutter, unity development ,Web Deevelopment(HTML,CSS,JAVA SCRIPT),Laravel and good in database and algorithm ,worked in Artificial Intelligence project such as AI based writing machine.
                    </span>
                </p>
                <div>
                    <a href="https://github.com/HarshTripathih" target="_blank">
                        <img src={github} alt="githubimage" className="homepage_logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-tripathi-120ba01b5/" target="_blank">
                        <img src={linkedin} alt="linkedinimage" className="homepage_logo" />
                    </a>
                </div>
                <a href="mailto:harshtripathih321@gmail.com">
                <button className="homepage_left_button">Get in Touch</button>
                </a>
            </div>
            <div className="homepage_right">
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF" />
            </div>
        </div>
    );
}

export default Homepage;