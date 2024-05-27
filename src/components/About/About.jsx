
import styles from './About.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ABOUT ME</h1>
            <ProfilePicture className={styles.pic} />
            <div className={styles.info}>
                <span className={styles.infoTitle}>MR. RASHID MOHD AL-MARRI</span>
                
                <span className={styles.infoLabel}>DATE OF BIRTH:</span>
                <span className={styles.infoValue}>JULY, 29 1996</span>
                
                <span className={styles.infoLabel}>CITIZEN:</span>
                <span className={styles.infoValue}>STATE OF QATAR</span>
                
                <span className={styles.infoLabel}>HEIGHT:</span>
                <span className={styles.infoValue}><span className={styles.redacted}></span></span>
                
                <span className={styles.infoLabel}>WEIGHT:</span>
                <span className={styles.infoValue}><span className={styles.redacted}></span></span>

                <span className={styles.infoLabel}>EDUCATION:</span>
                <span className={styles.infoValue}>BS - COMPUTER SCIENCE </span>

                <span className={styles.infoLabel}>SCHOOL:</span>
                <span className={styles.infoValue}>UNIVERSITY OF SUSSEX</span>  

                <span className={styles.infoLabel}>LANGUAGES:</span>
                <span className={styles.infoValue}>ENGLISH</span> 

                <span className={styles.infoLabel}>MARITAL STATUS:</span>
                <span className={styles.infoValue}><span className={styles.redacted}></span></span>

                <span className={styles.infoLabel}>CURRENT RESIDENCE:</span>
                <span className={styles.infoValue}>DOHA, QATAR</span>   
            </div>
        </div>
    );
}

export default About;