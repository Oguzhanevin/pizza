import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.headerTitle}>Teknolojik Yemekler</h1>
        <div className={styles.note}>KOD ACIKTIRIR</div>
        <div className={styles.note}>PIZZA, DOYURUR</div>

        <Link to='/order' className={styles.customLink}>ACIKTIM</Link>
      </div>
    </div>
  );
}

export default Home;
