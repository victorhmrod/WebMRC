import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoCall, IoLocation, IoMail } from 'react-icons/io5';

const iconMap = {
  IoCall: IoCall,
  IoMail: IoMail,
  IoLocation: IoLocation,
};

const Contact = ({ cards }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailto = new URL(`mailto:alemprodrigues@mail.com`);
    const params = new URLSearchParams({
      subject: `${formData.subject || 'Nova proposta'} — ${formData.name}`,
      body: `Olá, sou ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    });
    mailto.search = params.toString();
    window.location.href = mailto.toString();
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h3 className="text-center fw-bold main-title">Contato</h3>
          <p className="text-center fw-bold ms-4 ps-3 sub-title">Entre em contato</p>
        </div>
        <div className="row gx-5" data-aos="fade-up" data-aos-delay="150">
          <div className="col-lg-6 text-center">
            <div className="contact-bg d-flex flex-column justify-content-center rounded-2">
              <h5 className="py-3">Entre em contato conosco na caixa ao lado</h5>
              <div className="contact-info d-flex flex-column gap-2 text-center">
                {cards.map((card) => {
                  const Icon = iconMap[card.icon];
                  return (
                    <a key={card.label} href={card.href} className="text-white">
                      {Icon ? <Icon /> : null}
                      {card.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome e sobrenome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Seu email pessoal ou de trabalho"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Proposta"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Fale mais sobre sua proposta"
                  id="message"
                  name="message"
                  rows="8"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="cssbuttons-io">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                    />
                  </svg>{' '}
                  Enviar
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contact;
