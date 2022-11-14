import React from "react";
import "./Experience.css";
import html from '../../images/html.svg';
import react from '../../images/react.svg';
import js from '../../images/js.png';
import firebase from '../../images/firebase.png';
import ExperienceCard from "./ExperiencsCard/ExperienceCard";


export default function Experience(){


    const statements = [
        "1. I am a excellent front-End developer hhfhfah fhhfehfehfh euwfFEYFIHF",
        "2. I have Created various features jhsuhsf fjhewfjwhwe wjfhwhf",
        "3. namnsfnksh skjfsjf fsdjfsdjf.sd dsjfksdfskjf dfjsdkfdkjf sdkfjd",
        "4. namnsfnksh skjfsjf fsdjfsdjf.sd dsjfksdfskjf dfjsdkfdkjf sdkfjd",
        "5. namnsfnksh skjfsjf fsdjfsdjf.sd dsjfksdfskjf dfjsdkfdkjf sdkfjd",
    ];
    const iconImages = [react, js, html, firebase]



    return (
        <div className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_cards_container">
                <ExperienceCard 
                    companyName="CodingExpo pvt Ltd"
                    Designation="Front-End Developer"
                    statements = {statements}
                    iconImages = {iconImages}
                />
                <ExperienceCard 
                    companyName="CodingExpo pvt Ltd"
                    Designation="Front-End Developer"
                    statements = {statements}
                    iconImages = {iconImages}
                />
                <ExperienceCard 
                    companyName="CodingExpo pvt Ltd"
                    Designation="Front-End Developer"
                    statements = {statements}
                    iconImages = {iconImages}
                />
            </div>
        </div>
    );
}