import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import {
  contactCards,
  heroHighlights,
  navLinks,
  progressStats,
  projects as projectCards,
  services as servicesCards,
  teamMembers,
} from './data/siteContent.js';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return true;
  }
  const stored = localStorage.getItem('mrc-theme');
  if (stored) {
    return stored === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const App = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('light-mode', !isDark);
    }
    localStorage.setItem('mrc-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const heroWords = useMemo(() => heroHighlights, []);

  return (
    <div id="home">
      <Navbar navLinks={navLinks} />
      <main>
        <Hero words={heroWords} />
        <About />
        <Services services={servicesCards} />
        <Projects projects={projectCards} />
        <Skills stats={progressStats} />
        <Team members={teamMembers} />
        <Contact cards={contactCards} />
      </main>
      <Footer />
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
      <ScrollToTop />
    </div>
  );
};

export default App;
