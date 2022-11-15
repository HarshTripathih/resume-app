import React from "react";
import "./Experience.css";
import html from '../../images/html.svg';
import react from '../../images/react.svg';
import js from '../../images/js.png';
import firebase from '../../images/firebase.png';
import ExperienceCard from "./ExperiencsCard/ExperienceCard";
import dbms from "../../images/dbms.jpg";
import dj from "../../images/dj.png";
import msq from "../../images/msq.png";
import py from "../../images/py.png";
import c from "../../images/c.png";
import vsc from "../../images/vsc.png";
import gfg from "../../images/gfg.png";
import dsa from "../../images/dsa.jpg";
import mongodb from "../../images/mongodb.png";
import express from "../../images/express.png";
import css from "../../images/css.png";


export default function Experience(){


    const statements = [
        "1. I am a excellent front-End Web developer.",
        "2. I have Created various features projects for Company.",
        "3. I am working on real time Projects for company Clients.",
        "4. Major two projects I have Covered ,Employment Management System & ShreeHerbals Commerce Site.",
        "5. I being selected for 3 Month Intern as a Front-end Web-Developer.",
        "6. I have learned so many new technologies from this Working-Eperiences.",
        "7. Implemented New technologies for the Project."
    ];
    const statements1 = [
        "1. I am a Excelent Algorithm Problem Solver.",
        "2. I have Created various features projects for Company.",
        "3. I am working on real time Problem for Project Solution.",
        "4. Major two projects I have Covered ,Grade System and Voting System.",
        "5. I being selected for 5 Month Intern as a Mentor.in my captain.",
        "6. I have learned so many new technologies from this Working-Eperiences.",
        "7. Implemented New technologies for the Project."
    ];
    const statements2 = [
        "1. I am a excellent Full-stack Web developer Excellent Comand in both Front End as well as Backend Part.",
        "2. I have Created various features projects for My Clients.",
        "3. I am working on real time Projects for our client.",
        "4. So Many  projects I have Covered ,Employment Management System & ShreeHerbals Commerce Site, Amazon Clone etc",
        "5. I am working Form Past 1 years as a Freelancer for building my portfolio.",
        "6. I have learned so many new technologies from this Working-Eperiences.",
        "7. Implemented New technologies for the Project."
    ];
    const iconImages = [dj, js, html, py, msq, dbms]
    const iconImages1 = [vsc, c, gfg, dsa]
    const iconImages2 = [dj, js, html, py, msq, dbms, react, firebase, mongodb, express, css ]

    


    return (
        <div className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="container-fluid">
                <ExperienceCard 
                    companyName="CodingExpo pvt Ltd"
                    Designation="Front-End Developer"
                    statements = {statements}
                    iconImages = {iconImages}
                />
                <ExperienceCard 
                    companyName="My Captian"
                    Designation="Mentor of C++"
                    statements = {statements1}
                    iconImages = {iconImages1}
                />
                <ExperienceCard 
                    companyName="Freelancer Site"
                    Designation="Full-Stack Web Developer"
                    statements = {statements2}
                    iconImages = {iconImages2}
                />
            </div>
        </div>
    );
}