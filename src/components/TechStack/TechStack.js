import React from "react";
import "./TechStack.css";
import c from "../../images/c.png";
import js from "../../images/js.png";
import css from "../../images/css.svg";
import bootstrap from "../../images/bootstrap.svg";
import firebase from "../../images/firebase.png";
import html from "../../images/html.svg";
import react from "../../images/react.svg";
import dj from "../../images/dj.png";
import dbms from "../../images/dbms.jpg";
import msq from "../../images/msq.png";
import mongodb from "../../images/mongodb.png";
import express from "../../images/express.png";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

export default function TechStack() {
  const techstackData = [
    {
      iconName: "C",
      iconImage: c,
      iconAltProperty: "cImage",
    },
    {
      iconName: "Javascript",
      iconImage: js,
      iconAltProperty: "jsImage",
    },
    {
      iconName: "CSS",
      iconImage: css,
      iconAltProperty: "cssImage",
    },
    {
      iconName: "React",
      iconImage: react,
      iconAltProperty: "ReactImage",
    },
  ];
  const techstackData2 = [
    {
      iconName: "Bootstrap",
      iconImage: bootstrap,
      iconAltProperty: "bootstrapImage",
    },
    {
      iconName: "HTML",
      iconImage: html,
      iconAltProperty: "htmlImage",
    },
    {
      iconName: "Firebase",
      iconImage: firebase,
      iconAltProperty: "firebaseImage",
    },
    {
      iconName: "Django",
      iconImage: dj,
      iconAltProperty: "django Image",
    },
  ];
  const techstackData3 = [
    {
      iconName: "DBMS",
      iconImage: dbms,
      iconAltProperty: "dbmsImage",
    },
    {
      iconName: "SQL",
      iconImage: msq,
      iconAltProperty: "mysqlImage",
    },
    {
      iconName: "Mongo-DB",
      iconImage: mongodb,
      iconAltProperty: "MongodbImage",
    },
    {
      iconName: "Express",
      iconImage: express,
      iconAltProperty: "Express Image",
    },
  ];
  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_icon_container">
        {techstackData.map((item, index) => {
          return (
            <TechStackIconContainer
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
      <div className="techstack_icon_container">
        {techstackData2.map((item, index) => {
          return (
            <TechStackIconContainer
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
      <div className="techstack_icon_container">
        {techstackData3.map((item, index) => {
          return (
            <TechStackIconContainer
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
    </div>
  );
}