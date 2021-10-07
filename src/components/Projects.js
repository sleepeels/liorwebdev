import "./Projects.css";

const Projects = () => {
  return (
    <section className="project-list">
      <article className="project">
        <header className="project-header">
          <h2>Wheather-app</h2>
          <p>NodeJS openwheather</p>
        </header>

        <div className="project-author"></div>
      </article>
      <article className="project">
        <header className="project-header">
          <h2>Github-repos-app</h2>
          <p>ReactJS</p>
        </header>

        <div className="project-author"></div>
      </article>
      <article className="project">
        <header className="project-header">
          <h2>Simple-todos-app</h2>
          <p>ReactJS</p>
        </header>

        <div className="project-author"></div>
      </article>
      <article className="project">
        <header className="project-header">
          <h2>Wheather-app</h2>
          <p>nodejs</p>
        </header>

        <div className="project-author"></div>
      </article>
    </section>
  );
};

export default Projects;
