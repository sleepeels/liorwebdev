import "./Projects.css";
import UnderConst from "./partials/UnderConst";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Liorwebdev: Projects";
  }, []);
  return (
    <section className="project-list">
      <UnderConst />
    </section>
  );
};

export default Projects;
