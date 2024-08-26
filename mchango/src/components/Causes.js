import React, { useState } from 'react';
import DonateForm from './DonateForm';
import styles from '../styles/Causes.module.css';

export default function Causes() {
  const [selectedCause, setSelectedCause] = useState(null);

  const causes = [
    { id: 1, name: 'Building a Library', details: 'We are building a community library to improve literacy.', currentAmount: 70000, targetAmount: 100000, progress: 70 },
    { id: 2, name: 'Clean Water Initiative', details: 'Providing clean water to rural communities.', currentAmount: 45000, targetAmount: 100000, progress: 45 },
    { id: 3, name: 'School Supplies for Kids', details: 'Supplying school materials to underprivileged kids.', currentAmount: 85000, targetAmount: 100000, progress: 85 },
    // Add more causes as needed
  ];

  const handleDonate = (cause) => {
    setSelectedCause(cause);
  };

  const handleDetails = (cause) => {
    alert(`Details: ${cause.details}`);
  };

  const handleReturn = () => {
    setSelectedCause(null);
  };

  return (
    <div className={styles.causesContainer}>
      {!selectedCause ? (
        causes.map((cause) => (
          <div key={cause.id} className={styles.causeCard}>
            <h3>{cause.name}</h3>
            <p>{cause.details}</p>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${cause.progress}%` }}>
                  <span className={styles.currentAmount}>Kes {cause.currentAmount.toLocaleString()}</span>
                </div>
              </div>
              <p className={styles.targetAmount}>Kes {cause.targetAmount.toLocaleString()}</p>
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={() => handleDetails(cause)} className={styles.detailsButton}>
                Details
              </button>
              <button onClick={() => handleDonate(cause)} className={styles.donateButton}>
                Donate
              </button>
            </div>
          </div>
        ))
      ) : (
        <DonateForm cause={selectedCause} onReturn={handleReturn} />
      )}
    </div>
  );
}
