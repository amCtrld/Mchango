import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome to Mchango</h2>
      <div className={styles.card}>
        <h3>Who are we?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, euismod aliquet nunc nisl eu nunc.</p>
      </div>
    </div>
  );
}