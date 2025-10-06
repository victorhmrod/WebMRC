(function () {
  const header = document.querySelector('.navbar');
  const navToggle = document.querySelector('.navbar__toggle');
  const navLinks = document.querySelector('.navbar__links');
  const scrollTopButton = document.querySelector('.scroll-top');
  const counters = document.querySelectorAll('[data-counter]');
  const testimonials = document.querySelectorAll('[data-testimonial]');
  const currentYear = document.getElementById('current-year');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const closeMenu = () => {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });
  }

  const onScroll = () => {
    const isSticky = window.scrollY > 40;
    header?.classList.toggle('is-sticky', isSticky);
    scrollTopButton?.classList.toggle('show', window.scrollY > 400);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  scrollTopButton?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const section = document.querySelector(targetId);
      if (!section) return;
      event.preventDefault();
      section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  if (counters.length) {
    const formatNumber = (value) => {
      if (value >= 1000) {
        return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k+`;
      }
      return `${value}+`;
    };

    const animateCounter = (element, endValue) => {
      if (prefersReducedMotion) {
        element.textContent = formatNumber(endValue);
        return;
      }

      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const step = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(start + eased * (endValue - start));
        element.textContent = value;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = formatNumber(endValue);
        }
      };

      requestAnimationFrame(step);
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

  if (testimonials.length > 1 && !prefersReducedMotion) {
    let activeIndex = 0;
    testimonials[activeIndex].classList.add('is-active');

    setInterval(() => {
      testimonials[activeIndex].classList.remove('is-active');
      activeIndex = (activeIndex + 1) % testimonials.length;
      testimonials[activeIndex].classList.add('is-active');
    }, 5000);
  } else if (testimonials.length) {
    testimonials[0].classList.add('is-active');
  }
})();
