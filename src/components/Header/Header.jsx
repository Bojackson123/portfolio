import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
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
    <header className={styles.header}>
      <h1>
        <span className={styles.firstName}>
          Place
        </span> 
        <br/>
        <span className={styles.lastName}>
          <span className={styles.noWrap}>Holder</span>
        </span>
      </h1>

      <p>
        Web Developer <span>|</span> Software Engineer <span>|</span>  Computer Scientist <span>|</span>  AI Enthusiast
      </p>
      <div className={styles.dropDown}>
        <div 
          className={`${styles.dropDownBars} ${dropdownVisible ? styles.active : ''}`}
          onClick={toggleDropdown}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.firstContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">Home</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.secondContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">About</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.thirdContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">Projects</a>
        </div>
        <div
          className={`${styles.dropDownContent} ${styles.fourthContent} ${dropdownVisible ? styles.active : (isAnimating ? styles.inactive : '')}`}
          onAnimationEnd={handleAnimationEnd}>
          <a href="#">Contact Me</a>
        </div>
      </div>
    </header>
  );
}

export default Header;