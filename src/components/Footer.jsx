const Footer = () => (
  <footer className="mt-5 py-5">
    <div className="container">
      <div className="footer-social d-flex justify-content-center gap-3 text-center mt-3">
        <a
          href="https://www.instagram.com/mrcorretoraseg/"
          className="footer-social__link"
          aria-label="Instagram da Mendonça Rodrigues Corretora"
        >
          <i className="bi bi-instagram" />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="footer-social__link"
          aria-label="LinkedIn da Mendonça Rodrigues Corretora"
        >
          <i className="bi bi-linkedin" />
        </a>
        <a
          href="https://www.youtube.com/"
          className="footer-social__link"
          aria-label="YouTube da Mendonça Rodrigues Corretora"
        >
          <i className="bi bi-youtube" />
        </a>
      </div>
      <div className="footer-copyright text-center mt-3 mt-lg-2">
        <p>Copyright {new Date().getFullYear()} | Feito por Victor Henrique</p>
      </div>
    </div>
  </footer>
);

export default Footer;
