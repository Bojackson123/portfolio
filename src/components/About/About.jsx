import { useEffect } from 'react';
import styles from './About.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import randomizeText from '../../utils/randomizeText';


function About() {
  useEffect(() => {
    const checkWidthAndRandomize = () => {
      if (window.innerWidth > 508) {
        const elements = document.querySelectorAll(`[data-value]`);
        elements.forEach(element => {
          randomizeText(element);
        });
      }
    };

    checkWidthAndRandomize(); // Run once on mount

  }, []);
  
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title} data-value="ABOUT ME">ABOUT ME</h1>
        <ProfilePicture className={styles.pic} />
        <div className={styles.info}>
          <span className={styles.infoTitle} data-value="MR. RASHID MOHD AL-MARRI">MR. RASHID MOHD AL-MARRI</span>
          
          <span className={styles.infoLabel} data-value="DATE OF BIRTH:">DATE OF BIRTH:</span>
          <span className={styles.infoValue} data-value="JULY, 29 1996">JULY, 29 1996</span>
          
          <span className={styles.infoLabel} data-value="CITIZEN:">CITIZEN:</span>
          <span className={styles.infoValue} data-value="STATE OF QATAR">STATE OF QATAR</span>
          
          <span className={styles.infoLabel} data-value="HEIGHT:">HEIGHT:</span>
          <span className={styles.infoValue}><span className={styles.redacted} data-value="REDACTED">REDACTED</span></span>
          
          <span className={styles.infoLabel} data-value="WEIGHT:">WEIGHT:</span>
          <span className={styles.infoValue}><span className={styles.redacted} data-value="REDACTED">REDACTED</span></span>

          <span className={styles.infoLabel} data-value="EDUCATION:">EDUCATION:</span>
          <span className={styles.infoValue} data-value="BS - COMPUTER SCIENCE">BS - COMPUTER SCIENCE</span>

          <span className={styles.infoLabel} data-value="SCHOOL:">SCHOOL:</span>
          <span className={styles.infoValue} data-value="UNIVERSITY OF SUSSEX">UNIVERSITY OF SUSSEX</span>  

          <span className={styles.infoLabel} data-value="LANGUAGES:">LANGUAGES:</span>
          <span className={styles.infoValue} data-value="ENGLISH">ENGLISH</span> 

          <span className={styles.infoLabel} data-value="MARITAL STATUS:">MARITAL STATUS:</span>
          <span className={styles.infoValue}><span className={styles.redacted} data-value="REDACTED">REDACTED</span></span>

          <span className={styles.infoLabel} data-value="CURRENT RESIDENCE:">CURRENT RESIDENCE:</span>
          <span className={styles.infoValue} data-value="DOHA, QATAR">DOHA, QATAR</span>   
        </div>
      </div>
      <div className={styles.containerTwo}></div>
    </>
  );
}

export default About;
