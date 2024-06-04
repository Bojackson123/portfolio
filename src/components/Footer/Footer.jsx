import styles from './Footer.module.css';
import github from '../../assets/socialIcons/github.png';
import linkedin from '../../assets/socialIcons/linkedin.png';
import twitter from '../../assets/socialIcons/twitterx.png';
import instagram from '../../assets/socialIcons/instagram.png';
import whatsapp from '../../assets/socialIcons/whatsapp.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocialsContainer}>
          <a href='https://github.com/Bojackson123' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={github} alt="Github" /></a>
          <a href='https://www.linkedin.com/in/rashid-al-marri-8b385027a/' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={linkedin} alt="Linkedin" /></a>
          <a href='https://x.com/RashiidAlmarrii' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={twitter} alt="Twitter" /></a>
          <a href='' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={instagram} alt="Instagram" /></a>
          <a href='https://api.whatsapp.com/send/?phone=%2B4407562407672&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer"><img className={styles.heroSocials} src={whatsapp} alt="Whatsapp" /></a>
      </div>
      <span className={styles.footerText}>© 2024 Rashid Al-Marri</span>
    </footer>
  );
}

export default Footer;