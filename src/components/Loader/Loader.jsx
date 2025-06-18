import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  );
}

