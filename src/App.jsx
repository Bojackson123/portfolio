import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [isScrolledAbout, setIsScrolledAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHero = () => {
    const heroPosition = heroRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: heroPosition, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const aboutPosition = aboutRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: aboutPosition, behavior: 'smooth' });
    setIsScrolledAbout(true); 
  };

  const scrollToProjects = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const projectsPosition = projectsRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: projectsPosition, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const contactPosition = contactRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: contactPosition, behavior: 'smooth' });
  };

 

  useEffect(() => {
    const handleScroll = () => {
      const aboutPosition = aboutRef.current.getBoundingClientRect().top;
      if (aboutPosition <= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Hero 
        scrollToAbout={scrollToAbout} isScrolled={isScrolled} 
        scrollToHero={scrollToHero} ref={heroRef}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <About ref={aboutRef} isScrolled={isScrolledAbout} />
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
      <Footer />
    </>
  );
}

export default App;