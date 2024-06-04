import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import Header from '../Header/Header';
import heroImage from '../../assets/heroPhotos/hero3.webp';
import github from '../../assets/socialIcons/github.png';
import linkedin from '../../assets/socialIcons/linkedin.png';
import twitter from '../../assets/socialIcons/twitterx.png';
import instagram from '../../assets/socialIcons/instagram.png';
import whatsapp from '../../assets/socialIcons/whatsapp.png';

const Hero = forwardRef(({ scrollToAbout, isScrolled, scrollToHero, scrollToProjects, scrollToContact }, ref) => {
  const heroTitleRef = useRef(null);
  const caretRef = useRef(null);

  useEffect(() => {
    const text = " Hello, I am Rashid.";
    let index = 0;
    const speed = 100;

    function typeWriter() {
      if (index < text.length) {
        heroTitleRef.current.innerHTML = text.substring(0, index + 1);
        const span = heroTitleRef.current.querySelector('span');
        if (span) {
          const spanWidth = span.offsetWidth;
          caretRef.current.style.left = `${spanWidth}px`;
        }
        index++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  }, []);

  return (
    <div className={styles.hero} ref={ref}>
      <Header 
        className={styles.header} 
        isScrolled={isScrolled}
        scrollToHero={scrollToHero}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout} 
      />
      <img className={styles.heroImage} src={heroImage} alt="Hero Image" />
      <div className={styles.blackScreen}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span ref={heroTitleRef}></span>
          <span ref={caretRef} className={styles.caret}>|</span>
        </h1>
        <div className={styles.heroSubtitleContainer}>
          <p className={styles.heroSubtitle}>Web Developer</p>
          <span className={styles.heroSubtitle}>|</span>
          <p className={styles.heroSubtitle}>Software Engineer</p>
          <span className={styles.heroSubtitle}>|</span>
          <p className={styles.heroSubtitle}>Computer Scientist</p>
          <span className={styles.heroSubtitle}>|</span>
          <p className={styles.heroSubtitle}>AI Enthusiast</p>
        </div>
        <div className={styles.heroSocialsContainer}>
          <a href='https://github.com/Bojackson123' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={github} alt="Github" /></a>
          <a href='https://www.linkedin.com/in/rashid-al-marri-8b385027a/' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={linkedin} alt="Linkedin" /></a>
          <a href='https://x.com/RashiidAlmarrii' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={twitter} alt="Twitter" /></a>
          <a href='' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={instagram} alt="Instagram" /></a>
          <a href='https://api.whatsapp.com/send/?phone=%2B4407562407672&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={whatsapp} alt="Whatsapp" /></a>
        </div>
        <button className={styles.heroButton}>Download CV</button>
        <div className={styles.scrollButton} onClick={scrollToAbout}></div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

Hero.propTypes = {
  scrollToAbout: PropTypes.func.isRequired,
  scrollToHero: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default Hero;
