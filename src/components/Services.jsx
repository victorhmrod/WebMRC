import PropTypes from 'prop-types';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si';

const iconMap = {
  SiHtml5: SiHtml5,
  SiCss3: SiCss3,
  SiJavascript: SiJavascript,
  SiReact: SiReact,
  SiPython: SiPython,
  SiNodedotjs: SiNodedotjs,
};

const Services = ({ services }) => (
  <section id="conhecimentos" className="full-height">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h3 className="text-center fw-bold main-title">Nossas habilidades</h3>
        <p className="text-center fw-bold ms-1 ps-3 sub-title">Identifica alguma delas?</p>
      </div>
      <div className="grid three-col-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <div key={service.title} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="card card-padding">
                <div className="icon">{Icon ? <Icon /> : null}</div>
                <h4 className="heading-3">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Services;
