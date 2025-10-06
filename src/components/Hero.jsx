import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const TYPING_INTERVAL = 120;
const PAUSE_DURATION = 1500;

const Hero = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = useMemo(() => words[currentIndex] ?? '', [words, currentIndex]);

  useEffect(() => {
    if (!currentWord || words.length === 0) {
      return undefined;
    }

    let timeoutId;

    if (!isDeleting && displayText === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && displayText === '') {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, TYPING_INTERVAL);
    } else {
      const nextLength = displayText.length + (isDeleting ? -1 : 1);
      timeoutId = setTimeout(() => {
        setDisplayText(currentWord.slice(0, nextLength));
      }, isDeleting ? TYPING_INTERVAL / 2 : TYPING_INTERVAL);
    }

    return () => clearTimeout(timeoutId);
  }, [currentWord, displayText, isDeleting, words.length]);

  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 data-aos="fade-left" className="text-uppercase text-white fw-semibold display-1">
              Bem-vindo a <span>Mendonça Rodrigues Corretora</span>
            </h1>
            <h5 className="text-white mt-3 mb-4">
              Nós trabalhamos com <span className="typing">{displayText}</span>
            </h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.instagram.com/mrcorretoraseg/" aria-label="Instagram">
                <BsInstagram />
              </a>
              <a href="https://wa.me/5571991803612" aria-label="WhatsApp">
                <BsWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Hero;
