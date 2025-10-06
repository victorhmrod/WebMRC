import PropTypes from 'prop-types';
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Team = ({ members }) => (
  <section className="teams" id="equipe">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h3 className="text-center fw-bold main-title">Nossa equipe</h3>
        <p className="text-center fw-bold ms-4 ps-3 sub-title">Especializada em projetos</p>
      </div>
      <div className="row" data-aos="fade-up" data-aos-delay="150">
        <div className="carousel owl-carousel">
          {members.map((member) => (
            <div className="card" key={member.name}>
              <div className="box">
                <img src={member.image} alt={member.name} />
                <div className="text">{member.name}</div>
                <p>{member.role}</p>
                <ul className="links">
                  <li>
                    {member.socials.whatsapp && (
                      <a href={member.socials.whatsapp} aria-label={`WhatsApp de ${member.name}`}>
                        <BsWhatsapp />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} aria-label={`LinkedIn de ${member.name}`}>
                        <BsLinkedin />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} aria-label={`Instagram de ${member.name}`}>
                        <BsInstagram />
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Team.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      socials: PropTypes.shape({
        whatsapp: PropTypes.string,
        linkedin: PropTypes.string,
        instagram: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default Team;
