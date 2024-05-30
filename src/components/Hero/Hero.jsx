import styles from './Hero.module.css';
import Header from '../Header/Header';

function Hero() {
  return (
    <div className={styles.hero}>
        <Header />
        <p className={styles.wip}>Work in progress . . .</p>
        <div className={styles.blackScreen}>

        </div>
    </div>

  );
}

export default Hero;