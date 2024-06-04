import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header({ isScrolled, scrollToHero, scrollToProjects, scrollToContact, scrollToAbout}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const toggleDropdown = () => {
    if (dropdownVisible) {
      setIsAnimating(true);
    }
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header 
      className={`${styles.header} 
                ${isScrolled ? styles.blackBackground : ''}
                ${dropdownVisible ? styles.active : ''}`}
    >
        <h1>
        <a onClick={scrollToHero}>
          <span className={styles.firstName}>
            Rashid
          </span> 
          <br/>
          <span className={styles.lastName}>
            <span className={styles.noWrap}>Al-Marri</span>
          </span>
          </a>
        </h1>
      <div className={styles.links}>
        <a onClick={scrollToHero}>Home</a>
        <a onClick={scrollToAbout}>About</a>
        <a onClick={scrollToProjects}>Projects</a>
        <a onClick={scrollToContact}>Contact Me</a>
      </div>
      <div className={styles.dropDown}>
        <div 
          className={`${styles.dropDownBars} ${dropdownVisible ? styles.active : ''}`}
          onClick={toggleDropdown}>
          <span className={`${styles.bar} ${isScrolled ? styles.blackBackground : ''}`}></span>
          <span className={`${styles.bar} ${isScrolled ? styles.blackBackground : ''}`}></span>
          <span className={`${styles.bar} ${isScrolled ? styles.blackBackground : ''}`}></span>
        </div>
      </div>
      <div
          className={`${styles.dropDownContent} ${styles.firstContent} 
                      ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} 
                      ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}
       >
          <a onClick={scrollToHero}>Home</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.secondContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}>
          <a onClick={scrollToAbout}>About</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.thirdContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}>
          <a onClick={scrollToProjects}>Projects</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.fourthContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}>
          <a onClick={scrollToContact}>Contact Me</a>
        </div>
    </header>
  );
}

Header.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  scrollToHero: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
  scrollToAbout: PropTypes.func.isRequired,
};

export default Header;
