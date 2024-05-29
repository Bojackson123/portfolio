import { useEffect } from 'react';
import styles from './About.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import randomizeText from '../../utils/randomizeText';
import randomizeTextFast from '../../utils/randomizeTextFast';
import fingerprint from '../../assets/pictures/fingerprint.png';
import ciaLogo from '../../assets/pictures/ciaLogo.png';


const bioText = {
  bio1: "Mr. Rashid Al-Marri graduated from the University of Sussex in July 2024 with a Bachelor of Science in Computer Science.",
  bio2: " He is a highly motivated individual with a passion for web development and software engineering.",
  bio3: " He also has a keen interest in AI technologies and has experience working with and fine-tuning machine learning models.",
  bio4: " He is proficient in Python and JavaScript and is well versed in many of the popular libraries and frameworks such as React, Node.js, PyTorch, Django, and Flask.",
  bio5: " He is currently residing in Doha, Qatar and is seeking opportunities in the fields of web development, software engineering, and machine learning."
};

function About() {
  useEffect(() => {
      const elements = document.querySelectorAll(`[data-value]`);
      elements.forEach(element => {
        randomizeText(element);
      });

      const elementsFast = document.querySelectorAll(`[data-fast]`);
      elementsFast.forEach(element => {
        randomizeTextFast(element);
      });
  }, []);
  
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerBox}>
          <span className={styles.ciaTitle} data-value="CENTRAL INTELLIGENCE AGENCY">CENTRAL INTELLIGENCE AGENCY</span>
          <span className={styles.ciaCity} data-value="Washington DC, 20505">Washington DC, 20505</span>
        </div>
        <img className={styles.ciaLogo} src={ciaLogo} alt="cia logo" />
      </div>
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
          <span className={styles.infoValue}><span className={styles.redacted} data-value="REDACTED    1">REDACTED    1</span></span>
          
          <span className={styles.infoLabel} data-value="WEIGHT:">WEIGHT:</span>
          <span className={styles.infoValue}><span className={styles.redacted} data-value="REDACTED    1">REDACTED    1</span></span>

          <span className={styles.infoLabel} data-value="EDUCATION:">EDUCATION:</span>
          <span className={styles.infoValue} data-value="BS - COMPUTER SCIENCE">BS - COMPUTER SCIENCE</span>

          <span className={styles.infoLabel} data-value="SCHOOL:">SCHOOL:</span>
          <span className={styles.infoValue} data-value="UNIVERSITY OF SUSSEX">UNIVERSITY OF SUSSEX</span>  

          <span className={styles.infoLabel} data-value="LANGUAGES:">LANGUAGES:</span>
          <span className={styles.infoValue} data-value="ENGLISH">ENGLISH</span> 

          <span className={styles.infoLabel} data-value="MARITAL STATUS:">MARITAL STATUS:</span>
          <span className={styles.infoValue}><span className={styles.redacted} data-value="REDACTED    1">REDACTED    1</span></span>

          <span className={styles.infoLabel} data-value="CURRENT RESIDENCE:">CURRENT RESIDENCE:</span>
          <span className={styles.infoValue} data-value="DOHA, QATAR">DOHA, QATAR</span>   
        </div>
      </div>
      <div className={styles.containerTwo}>
        <div className={styles.divider}></div>
        <div className={styles.fingerPrint}>
          <div className={styles.bioTitleBox}>
            <span className={styles.bioName} data-value="RASHID MOHD AL-MARRI">RASHID MOHD AL-MARRI</span><br/>
            <span className={styles.bioMetrics} data-value="BIO-METRICS">BIO-METRICS</span>
          </div>
          <span className={styles.infoPrintLabel} data-value="FINGERPRINT">FINGERPRINT</span>
          <div className={styles.bioPrintBox}>
            <img className={styles.bioPrint} src={fingerprint}/>
            <div className={styles.topLeftAngle}></div>
            <div className={styles.topRightAngle}></div>
            <div className={styles.bottomLeftAngle}></div>
            <div className={styles.bottomRightAngle}></div>
          </div>
        </div>
        <div className={styles.bioAbout}>
          <div className={styles.bioAboutText}>
            <span data-fast={bioText.bio1}>
              {bioText.bio1}&nbsp;
            </span>
            <span className={styles.redacted}>&nbsp;RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE </span>
            <span data-fast={bioText.bio2}>
              &nbsp;{bioText.bio2}&nbsp;
            </span>
            <span data-fast={bioText.bio3}>
              {bioText.bio3}&nbsp;
            </span><br/><br/>
            <span data-fast={bioText.bio4}> 
              {bioText.bio4}&nbsp; 
            </span>
            <span className={styles.redacted}>RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE </span>
            <span className={styles.redacted}>RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE </span>
            <span data-fast={bioText.bio5}>
              &nbsp;{bioText.bio5}&nbsp; 
            </span>
            <span className={styles.redacted}>RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE RE </span>
          </div>
        </div>
      </div>
      <div className={styles.aboutFooter}>
        <div className={styles.footerText}>
          <p><span className={styles.redacted}>FOR OFFICIAL USE ONLY</span> ACCESS CONTROLLED</p>
          <p><span className={styles.redacted}>UNAUTHORIZED </span></p>
        </div>
        <div className={styles.footerText}>
        <span>223.225</span>
        <span>M8:58</span>
        </div>

      </div>
    </>
  );
}

export default About;
