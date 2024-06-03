import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  const [isScrolledAbout, setIsScrolledAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    const headerHeight = document.querySelector('header').offsetHeight; // Adjust this selector to match your header element
    const aboutPosition = aboutRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: aboutPosition, behavior: 'smooth' });
    setIsScrolledAbout(true); 
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
      <Hero scrollToAbout={scrollToAbout} isScrolled={isScrolled} />
      <About ref={aboutRef} isScrolled={isScrolledAbout} />
      <Projects />
      <Footer />
    </>
  );
}

export default App;