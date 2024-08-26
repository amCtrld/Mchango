import React from 'react';
import styles from '../styles/CauseCard.module.css';

const CauseCard = ({ name, target, progress }) => {
  const percentage = Math.min((progress / target) * 100, 100);

  return (
    <div className={styles.card}>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className={styles.progressText}>
          ${progress.toLocaleString()} / ${target.toLocaleString()}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.buttons}>
          <button className={styles.donateButton}>Donate</button>
          <button className={styles.detailsButton}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default CauseCard;