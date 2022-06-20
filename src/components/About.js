import { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    document.title = "Liorwebdev: About";
  }, []);

  return (
    <section id="about">
      <p>Hi, my name is Lior. I can Design, Develop & Deploy.</p>
      <p>
        Over the last 4-5 years I have gained a massive "Hands-on" Experience in
        Web Development. HTML, CSS & Javascript on the Front-end, NodeJS,
        MongoDB & NPM libraries on the Back-end, Apps Deployments to Cloud
        Services such as AWS, Heroku and Firebase.
      </p>
      <p>
        I Learned and Experienced Layout Design, Colors, CSS Web Animations
        combined with Figma and some other Editing Softwares Assets.
      </p>
      <p>
        My Formal Education includes a BSc in Computers Engineering and a
        Teaching Certificate for High School Physics Education.
      </p>
      <p>
        I Teached 11th graders Client - Server Programming using Java Backend as
        well as basic HTML and javascript for 9th graders.:)
      </p>
    </section>
  );
};

export default About;
