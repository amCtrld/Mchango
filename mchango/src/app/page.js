'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Dynamically import components
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
        <h1>Mchango</h1>
        <nav>
          <button onClick={() => setCurrentComponent('home')}>Home</button>
          <button onClick={() => setCurrentComponent('causes')}>Causes</button>
          <button onClick={() => setCurrentComponent('contacts')}>Contacts</button>
          <button onClick={() => setCurrentComponent('gallery')}>Gallery</button>
        </nav>
      </header>
      <main className={styles.main}>
        {renderComponent()}
      </main>
    </div>
  );
}