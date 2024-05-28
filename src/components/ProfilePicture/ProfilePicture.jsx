import styles from './ProfilePicture.module.css';
import profilePic from '../../assets/pictures/profilePicture.webp';
import randomizeText from '../../utils/randomizeText';
import { useEffect } from 'react';


function ProfilePicture() {
    useEffect(() => {
        const elements = document.querySelectorAll(`[data-value]`);
        elements.forEach(element => {
        randomizeText(element);
        });
       
  
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={`${styles.cardFrontImage} ${styles.cardImage}`}>
                    <img className={styles.profilePicture} src={profilePic} alt="profile" />
                    <div className={styles.redactedBar}>
                        <span data-value="[redacted]">[redacted]</span>
                    </div>
                </div>
                <div className={styles.cardFaders}>
                    {[...Array(8)].map((_, index) => (
                        <img key={index} className={`${styles.cardFader} ${styles.cardImage}`} src={profilePic} alt={`fader-${index}`} />
                    ))}
                </div>
            </div>
            <div className={styles.picInfo}>
                <div className={styles['info-row']}>
                    <span data-value="Name:">Name:</span>
                    <span data-value="Rashid Mohd R A Al-Marri">Rashid Mohd R A Al-Marri</span>
                </div>
                <div className={styles['info-row']}>
                    <span data-value="File Number:">File Number:</span>
                    <span data-value="439782">439782</span>
                </div>
                <div className={styles['info-row']}>
                    <span data-value="Listed As:">Listed As:</span>
                    <span data-value="Web Developer">Web Developer</span>
                </div>
                <div className={styles['info-row']}>
                    <span data-value="Status:">Status:</span>
                    <span data-value="Unemployed">Unemployed</span>
                </div>
            </div>
        </div>
    );
}

export default ProfilePicture;

