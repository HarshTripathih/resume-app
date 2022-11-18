import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import emp from "../../images/emp.jpg";
import cocomo from "../../images/cocomo.jpg";
import calculator from "../../images/calculator.jpg";
import amazon from "../../images/amazon.jpg";
import popup from "../../images/popup.jpg";
import admin from "../../images/admin.jpg";
import chat from "../../images/chat.jpg";
import herbal from "../../images/herbal.jpg";


export default function Projects(){

    const projectData = [

        {
            image: emp,
            title: 'EMS System App',
            sentences: [
               'Employee management systems are useful for running a smooth organization, especially organizations of scale. ',
               'An employee management system is a core part of HR.',
               'Features & Functionality: Engagement and Productivity, Employee Record Keeping, Surveys & Feedback, Real-Time Reporting and Analysis, ',
               'These tools help monitor, assess and control employees working hours and efficiently utilise human resources. ',
               'This makes it easier for the managers to store and access relevant data when needed. ',
            ],
            link: "https://github.com/HarshTripathih/EMS-SYSTEM.git",
        },
        {
            image: cocomo,
            title: 'Cocomo Calculator',
            sentences: [
               'The Constructive Cost Model (COCOMO) computation is used to estimate the level of effort needed to produce a given quantity of code.',
               'it refers to a group of models and is used to estimate the development efforts which are involved in a project.',
               'Plugin allows calculation of Basic COCOMO (Constructive Cost Model) estimates.',
               'Amount of labor that will be required to complete a task. It is measured in person-months units.'
            ],
            link: "https://harshtripathih.github.io/COCOMO_CALCULATOR/",
        },
        {
            image: calculator,
            title: 'Scientific Calculator',
            sentences: [
               'Scientific calculators are used widely in situations that require quick access to certain mathematical functions.',
               'They are very often required for math classes from the junior high school level through college.',
               'The capabilities of a modern scientific calculator include: addition, substraction, Multiplication, Division, SquareRoot, Square, Base ',
               'Scientific calculators perform the same functions as their standard electronic calculator counterparts.'
            ],
            link: "https://harshtripathih.github.io/Scientific-Calculator/",
        },
        {
            image: amazon,
            title: 'Amazon Clone',
            sentences: [
               'It is a Basic clone-UI designe of Amazon.',
               'Amazon.com is an ecommerce platform that sells many product lines',
               'Amazon has a number of products and services available, including its digital assistant Alexa, Amazon Music and Prime Video for music and videos respectively.',
               'Amazon first launched its distribution network in 1997 with two fulfillment centers in Seattle and New Castle, Delaware.'
               
            ],
            link: "https://harshtripathih.github.io/amazon-clone/",
        },
        {
            image: popup,
            title: 'Popup form site',
            sentences: [
               'It offers a Popup Form for a responsive web page while user visit the site on first user will able to see the popup form',
               'Bassicaly a Popup form may be a Registration Form ,Login form ,membership form etc.',
               'It is used in different website in different ways.,',
               'Popup for is a type of form which worm when any site is load it will show automatically in time lap of few seconds and when user click on any part of it will unvisible.'
            ],
            link: "https://harshtripathih.github.io/Popup-Form/",
        },
        {
            image: admin,
            title: 'Add Product Details',
            sentences: [
               'Add product Detail form helps you to add any product with its detail when the admin wants to add some product in his/her site.',
               'You can also Search any product details you want to delete from site.',
               'It is mostly used in Ecommerce websites.',
               'you can add all details of product like, Price, offers, color, models, size, etc.'
            ],
            link: "https://harshtripathih.github.io/Admin-pannel/",
        },
        {
            image: chat,
            title: 'Chat Application UI',
            sentences: [
               'A chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time.',
               'With a chat app, users are able to receive the same engaging and lively interactions through custom messaging features, just as they would in person.',
               'Features like message reactions, stickers, emojis, GIFs, and voice calls and video chat',
               'These messaging and real-time chat applications play an important role in how the world interacts today.'
            ],
            link: "https://harshtripathih.github.io/Chat-Application/",
        },
        {
            image: herbal,
            title: 'Herbal Site',
            sentences: [
               'It is a Ecommerce website used for marketing herbal products An Official Indian e-store for herbal, organic & ayurvedic cosmetic & beauty products for skincare, & body.',
               'It is most responsive site provide a great experience to the user.',
               'An Official Indian e-store for herbal, organic & ayurvedic cosmetic & beauty products for skincare, hair, bath & body.',
               ' An herb is a plant or plant part used for its scent, flavor, or therapeutic properties. Herbal medicines are one type of dietary supplement.'
            ],
            link: "https://github.com/HarshTripathih/Herbal-Site.git",
        },
    ];

    return (
        <div id="Projects">
            <p className="project_title">Projects</p>
            <div className="container-fluid">
                {projectData.map((value, index)=>(
                    <ProjectBox
                        title={value.title}
                        image={value.image}
                        sentences={value.sentences}
                        link={value.link}
                    />
                ))}
            </div>
        </div>
    );
}