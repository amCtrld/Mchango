'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '../styles/MainPage.module.css';

const Causes = dynamic(() => import('../components/Causes'));
const Contacts = dynamic(() => import('../components/Contacts'));
const Gallery = dynamic(() => import('../components/Gallery'));
const Home = dynamic(() => import('../components/Home'));

export default function MainPage() {
  const [currentComponent, setCurrentComponent] = useState('home');

  const renderComponent = () => {
    switch(currentComponent) {
      case 'causes':
        return <Causes />;
      case 'contacts':
        return <Contacts />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => setCurrentComponent('home')}>
        <Image src="/images/logo2.png" alt="Mchango Logo" width={50} height={50} />
          <h1>Mchango</h1>
        </div>
      </header>
      <main className={styles.main}>
        {currentComponent === 'home' && (
          <>
            <Home />
            <div className={styles.buttonContainer}>
              <button onClick={() => setCurrentComponent('causes')}>Causes</button>
              <button onClick={() => setCurrentComponent('contacts')}>Contacts</button>
              <button onClick={() => setCurrentComponent('gallery')}>Gallery</button>
            </div>
          </>
        )}
        {currentComponent !== 'home' && renderComponent()}
      </main>
    </div>
  );
}