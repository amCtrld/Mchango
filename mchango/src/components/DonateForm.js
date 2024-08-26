import React, { useState } from 'react';
import styles from '../styles/DonateForm.module.css';

export default function DonateForm({ cause, onReturn }) {
  const [amount, setAmount] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Cause: ${cause.name}, Amount: ${amount}, Mpesa Number: ${mpesaNumber}`);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <div className={styles.formContainer}>
      <h2>Donate to: {cause.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className={styles.formInput}
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="tel"
          className={styles.formInput}
          placeholder="Enter your Mpesa Number"
          value={mpesaNumber}
          onChange={(e) => setMpesaNumber(e.target.value)}
          required
        />
        <button type="submit" className={styles.donateButton}>Submit</button>
      </form>
      <button onClick={onReturn} className={styles.returnButton}>Return to Causes</button>
    </div>
  );
}
