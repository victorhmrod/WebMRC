import PropTypes from 'prop-types';

const Projects = ({ projects }) => (
  <section id="projetos">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h3 className="text-center fw-bold main-title">Projetos</h3>
        <p className="text-center fw-bold ms-4 ps-3 sub-title">Realizados e em andamento</p>
      </div>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6" key={project.title} data-aos="zoom-in" data-aos-delay={index * 150}>
            <div className="project-item">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;
