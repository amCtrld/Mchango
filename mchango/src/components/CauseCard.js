import React, { useState } from 'react';
import DonateForm from './DonateForm';
import styles from '../styles/CauseCard.module.css';

export default function CauseCard({ name, target, progress }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDonateClick = () => {
    setIsFormOpen(true);
  };

  const handleReturnClick = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={styles.card}>
      {isFormOpen ? (
        <DonateForm cause={{ name, target, progress }} onReturn={handleReturnClick} />
      ) : (
        <>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${(progress / target) * 100}%` }}
              ></div>
            </div>
            <p className={styles.progressText}>
              {progress} of {target} raised
            </p>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleDonateClick} className={styles.donateButton}>
              Donate
            </button>
          </div>
        </>
      )}
    </div>
  );
}
