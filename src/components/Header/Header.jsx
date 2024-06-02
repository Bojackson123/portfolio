import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header({ isScrolled }) {
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
    <header className={`${styles.header} ${isScrolled ? styles.blackBackground : ''}`}>
      <h1>
        <span className={styles.firstName}>
          Rashid
        </span> 
        <br/>
        <span className={styles.lastName}>
          <span className={styles.noWrap}>Al-Marri</span>
        </span>
      </h1>
      <div className={styles.links}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
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
          className={`${styles.dropDownContent} ${styles.firstContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">Home</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.secondContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">About</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.thirdContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">Projects</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.fourthContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')} ${isScrolled ? styles.blackBackground : ''}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">Contact Me</a>
        </div>
    </header>
  );
}

Header.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default Header;
