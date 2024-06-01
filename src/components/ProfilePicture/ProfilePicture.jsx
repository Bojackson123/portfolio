import styles from './ProfilePicture.module.css';
import profilePic from '../../assets/pictures/profilePicture.webp';
import profilePic2 from '../../assets/pictures/profilePicture2.webp';
import profilePic3 from '../../assets/pictures/profilePicture3.webp';
import randomizeText from '../../utils/randomizeText';
import { useState, useEffect } from 'react';


function ProfilePicture() {
    const profilePics = [profilePic, profilePic2, profilePic3];
    const [picture, setPicture] = useState(profilePics[0]);

    const handlePictureChangeRight = () => {
        if(picture === profilePics.at(-1)) {
            setPicture(profilePics[0]);
        } else {
            setPicture(profilePics[profilePics.indexOf(picture) + 1]);
        }
    };

    const handlePictureChangeLeft = () => {
        if(picture === profilePics[0]) {
            setPicture(profilePics.at(-1));
        } else {
            setPicture(profilePics[profilePics.indexOf(picture) - 1]);
        }
    };

    const getClassNameRedacted = () => {
        const currentIndex = profilePics.indexOf(picture);
    return `${styles.redactedBar} ${styles[`pic${currentIndex + 1}`]}`;
    
    };

    useEffect(() => {
        const isSmallViewport = window.innerWidth < 400;
    
        if ( !isSmallViewport) {
          
          const elements = document.querySelectorAll(`[data-value]`);
          elements.forEach(element => {
            randomizeText(element);
          });
        }
      }, []);
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={`${styles.cardFrontImage} ${styles.cardImage}`}>
                    <img className={styles.profilePicture} src={picture} alt="profile" />
                    <div className={getClassNameRedacted()}>
                        <span data-value="[redacted]">[redacted]</span>
                    </div>
                    <div className={`${styles.chevron} ${styles.left}`} onClick={() => handlePictureChangeLeft()}>
                        &#8249;
                    </div>
                    <div className={`${styles.chevron} ${styles.right}`} onClick={() => handlePictureChangeRight()}>
                        &#8250;
                    </div>
                </div>
                <div className={styles.cardFaders}>
                    {[...Array(8)].map((_, index) => (
                        <img key={index} className={`${styles.cardFader} ${styles.cardImage}`} src={picture} alt={`fader-${index}`} />
                    ))}
                </div>
            </div>
            <div className={styles.picInfo}>
                <div className={styles.infoRow}>
                    <span data-value="Name:">Name:</span>
                    <span data-value="Rashid Mohd R A Al-Marri">Rashid Mohd R A Al-Marri</span>
                </div>
                <div className={styles.infoRow}>
                    <span data-value="File Number:">File Number:</span>
                    <span data-value="439782">439782</span>
                </div>
                <div className={styles.infoRow}>
                    <span data-value="Listed As:">Listed As:</span>
                    <span data-value="Web Developer">Web Developer</span>
                </div>
                <div className={styles.infoRow}>
                    <span data-value="Status:">Status:</span>
                    <span data-value="Unemployed">Unemployed</span>
                </div>
            </div>
        </div>
    );
}

export default ProfilePicture;

