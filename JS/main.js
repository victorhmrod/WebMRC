(() => {
  const navToggle = document.querySelector('.navbar__toggle');
  const navLinks = document.querySelector('.navbar__links');
  const navbar = document.querySelector('.navbar');
  const counters = document.querySelectorAll('[data-counter]');
  const faqButtons = document.querySelectorAll('.faq__question');
  const yearHolder = document.getElementById('ano');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (yearHolder) {
    yearHolder.textContent = new Date().getFullYear();
  }

  const closeMenu = () => {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });
  }

  const handleScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 30);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const section = document.querySelector(targetId);
      if (!section) return;
      event.preventDefault();
      section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  if (counters.length) {
    const animateCounter = (element, endValue) => {
      if (prefersReducedMotion) {
        element.textContent = endValue;
        return;
      }

      const duration = 1600;
      const start = 0;
      const startTime = performance.now();

      const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + eased * (endValue - start));
        element.textContent = current;
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = endValue;
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const value = Number(entry.target.dataset.counter);
            if (!Number.isNaN(value)) {
              animateCounter(entry.target, value);
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  faqButtons.forEach((button) => {
    const answer = button.nextElementSibling;
    if (!answer) return;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));
      answer.style.maxHeight = !isExpanded ? `${answer.scrollHeight}px` : '0px';
    });

    if (button.getAttribute('aria-expanded') === 'true') {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
})();
