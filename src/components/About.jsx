const About = () => (
  <section className="about" id="sobre">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h3 className="text-center fw-bold main-title">Sobre nós</h3>
        <p className="text-center fw-bold ms-4 ps-3 sub-title">Especializada em projetos</p>
      </div>
      <div className="row">
        <div className="about-content" data-aos="fade-up" data-aos-delay="100">
          <div className="column left">
            <img src="/img/Icons/icone1.png" alt="Ícone da corretora" />
          </div>
          <div className="column right">
            <div className="text">
              Olá, somos a <span className="typing-2">Mendonça Rodrigues Corretora!</span>
            </div>
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
                Sugestões e ideias
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
