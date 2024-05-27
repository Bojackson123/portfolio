import styles from './ProfilePicture.module.css';
import profilePic from '../../assets/pictures/profilePicture.webp';

function ProfilePicture() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={`${styles.cardFrontImage} ${styles.cardImage}`}>
                    <img className={styles.profilePicture} src={profilePic} alt="profile" />
                    <div className={styles.redactedBar}>
                        <span>[redacted]</span>
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
                    <span>Name:</span><span>Rashid Mohd R A Al-Marri</span>
                </div>
                <div className={styles['info-row']}>
                    <span>File Number:</span><span>439782</span>
                </div>
                <div className={styles['info-row']}>
                    <span>Listed As:</span><span>Web Developer</span>
                </div>
                <div className={styles['info-row']}>
                    <span>Status:</span><span>Unemployed</span>
                </div>
            </div>
        </div>
    );
}

export default ProfilePicture;

