import PropTypes from 'prop-types';

const Skills = ({ stats }) => (
  <section className="skills" id="projects">
    <div className="container">
      <div className="row">
        <div className="skills-content" data-aos="fade-up">
          <div className="column left">
            <div className="text">Quais foram e quais são nossos projetos</div>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
              previewing layouts and visual mockups.
            </p>
            <button className="cssbuttons-io" type="button">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  />
                </svg>{' '}
                Mais informações
              </span>
            </button>
          </div>
          <div className="column right">
            {stats.map((stat, index) => (
              <div className="bars" key={stat.label} data-aos="fade-left" data-aos-delay={(index + 1) * 150}>
                <div className="info">
                  <span>{stat.label}</span>
                  <span>{stat.value}%</span>
                </div>
                <div className="line">
                  <span style={{ width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

Skills.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Skills;
