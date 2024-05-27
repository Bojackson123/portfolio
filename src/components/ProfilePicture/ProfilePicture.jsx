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
        </div>
    );
}

export default ProfilePicture;
