import React from 'react';
import CauseCard from '../../components/CauseCard';
import styles from './Causes.module.css';

const causes = [
  {
    name: "Free sanitary Pads for 1000 girls",
    target: 10000,
    progress: 7500
  },
  {
    name: "Clean Water for Rural Village",
    target: 15000,
    progress: 9000
  },
  {
    name: "Build a Community Library",
    target: 20000,
    progress: 5000
  }
];

export default function Causes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Current Causes</h1>
      <div className={styles.causesList}>
        {causes.map((cause, index) => (
          <CauseCard key={index} {...cause} />
        ))}
      </div>
    </div>
  );
}