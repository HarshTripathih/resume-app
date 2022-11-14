import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import dKart from '../../images/dKart.png';


export default function Projects(){

    const projectData = [

        {
            image: dKart,
            title: 'Ecom Website',
            sentences: [
               ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
               'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
               'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
               'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn.'
            ],
            link: "https://www.google.co.in",
        },
        {
            image: dKart,
            title: 'Ecom Website',
            sentences: [
               ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
               'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
               'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
               'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn.'
            ],
            link: "https://www.google.co.in",
        },
        {
            image: dKart,
            title: 'Ecom Website',
            sentences: [
               ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
               'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
               'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
               'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn.'
            ],
            link: "https://www.google.co.in",
        },
    ];

    return (
        <div>
            <p className="project_title">Projects</p>
            <div className="project_box_container">
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