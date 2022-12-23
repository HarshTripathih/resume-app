import React from "react";
import "./ProjectBox.css";

export default function ProjectBox({ image, title, sentences, Livelink, gitlink }) {
    return (
        <div className="project_box_container">
            <div className="project_box_image_container">
                <a href={Livelink} target="_blank">
                    <img src={image} />
                </a>
            </div>
            <div className="project_box_description_container">
                <p className="project_box_title">{title}</p>
                <div className="project_box_sentences_container">{sentences.map((value, index) => (
                    <p>{value}</p>
                ))}
                </div>
                <p className="project_box_link">
                    <span> LiveLink : </span>
                    <a href={Livelink} target="_blank">
                        {Livelink}
                    </a><br/>
                    <span> GitLink : </span>
                    <a href={gitlink} target="_blank">
                        {gitlink}
                    </a>
                </p>
            </div>
        </div>
    );
}