import styles from './Hero.module.css';
import Header from '../Header/Header';
import heroImage from '../../assets/heroPhotos/hero3.jpg';
import github from '../../assets/socialIcons/github.png';
import linkedin from '../../assets/socialIcons/linkedin.png';
import twitter from '../../assets/socialIcons/twitterx.png';
import instagram from '../../assets/socialIcons/instagram.png';
import whatsapp from '../../assets/socialIcons/whatsapp.png';

function Hero() {
  return (
    <div className={styles.hero}>
        <Header className={styles.header} />
        <img className={styles.heroImage} src={heroImage} alt="Hero Image" />
        <div className={styles.blackScreen}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hello, I am Rashid.</h1>
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
          <a href='https://github.com/Bojackson123' target="_blank"><img className={styles.heroSocials} src={github} alt="Github" /></a>
          <a href='https://www.linkedin.com/in/rashid-al-marri-8b385027a/' target="_blank"><img className={styles.heroSocials} src={linkedin} alt="Linkedin" /></a>
          <a href='https://x.com/RashiidAlmarrii' target="_blank"><img className={styles.heroSocials} src={twitter} alt="Twitter" /></a>
          <a href='https://www.instagram.com/rashiidalmarrii/' target="_blank"><img className={styles.heroSocials} src={instagram} alt="Instagram" /></a>
          <a href='https://api.whatsapp.com/send/?phone=%2B4407562407672&text&type=phone_number&app_absent=0' target="_blank"><img className={styles.heroSocials} src={whatsapp} alt="Whatsapp" /></a>
          </div>
          <button className={styles.heroButton}>Download CV</button>
          <div className={styles.scrollButton}></div> 
        </div> 
    </div>
  );
}

export default Hero;
