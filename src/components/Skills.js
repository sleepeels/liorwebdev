import { useEffect } from "react";
import "./Skills.css";

import Card from "./partials/Card";

const Skills = () => {
  useEffect(() => {
    const cards = document.getElementsByClassName("card");
    for (let card of cards) {
      card.addEventListener("click", (e) => {
        card.classList.toggle("flip-card");
      });
    }
  });

  return (
    <section id="skills">
      <div id="tech-grid">
        <Card tech={"HTML"} imgURL={"../images/svg/html5.svg"} />
        <Card tech={"CSS"} imgURL={"../images/svg/css3.svg"} />
        <Card tech={"Javascript"} imgURL={"../images/svg/javascript.svg"} />
        <Card tech={"NodeJS"} imgURL={"../images/svg/nodejs.svg"} />
        <Card tech={"NPM"} imgURL={"../images/svg/npm.svg"} />
        <Card tech={"ExpressJS"} imgURL={"../images/svg/expressjs.svg"} />
        <Card tech={"MongoDB"} imgURL={"../images/svg/mongodb.svg"} />
        <Card tech={"Figma"} imgURL={"../images/svg/figma-icon.svg"} />
        <Card tech={"Docker"} imgURL={"../images/svg/docker-icon.svg"} />

        <Card tech={"AWS"} imgURL={"../images/svg/aws.svg"} />
        <Card tech={"Heroku"} imgURL={"../images/svg/heroku.svg"} />
        <Card tech={"Firebase"} imgURL={"../images/svg/firebase.svg"} />
      </div>
    </section>
  );
};

export default Skills;
