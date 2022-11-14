
import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({
  companyName,
  Designation,
  statements,
  iconImages,
}) {
  return (
    <div className="ex_card_container">
      <p className="card_title"> {companyName} </p>
      <p className="ex_card_subtitle">Designation : {Designation} </p>

      {statements.map((value, index) => (
        <p className="ex_card_sentence"> {value} </p>
      ))}
      <p className="ex_card_tech_used_title">Tech Stack Used</p>
      <div className="ex_card_icon_images_container">
        {iconImages.map((value, index) => (
          <img src={value} />
        ))}
      </div>
    </div>
  );
}