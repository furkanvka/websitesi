import React from 'react';
import styles from './HeroSection.module.css';
import Link from '@docusaurus/Link';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Hey, I’m <span>Furkan Vural</span>
      </h1>
      <p className={styles.heroSubtitle}>
        A Software Developer passionate about creating intelligent systems, applications, 
        and web platforms that merge performance with creativity.
      </p>
      <Link className={styles.heroButton} to="#about">
        Learn More
      </Link>
    </section>
  );
}
