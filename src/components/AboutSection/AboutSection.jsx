import React from 'react';
import styles from './AboutSection.module.css';
import Link from '@docusaurus/Link';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutHeader}>
        <h2>About Me</h2>
        <div className={styles.aboutUnderline}></div>
        <p>Here you’ll find more information about me, what I do, and my skills in programming and technology.</p>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutColumn}>
          <h3>Get to know me!</h3>
          <p>
            I'm a <b>Software Developer</b> focused on building efficient and innovative systems — from intelligent
            embedded applications to modern full-stack web platforms.
          </p>
          <p>
            I love working on projects that combine <b>technology and creativity</b>. You can find me sharing my work and insights on{' '}
            <Link to="https://www.linkedin.com" target="_blank">LinkedIn</Link> and{' '}
            <Link to="https://www.github.com" target="_blank">GitHub</Link>.
          </p>
          <Link className={styles.contactButton} to="/#">Contact Me</Link>
        </div>

        <div className={styles.aboutColumn}>
          <h3>My Skills</h3>
          <div className={styles.skillsList}>
            <span className={styles.skillItem}>C++</span>
            <span className={styles.skillItem}>Python</span>
            <span className={styles.skillItem}>React</span>
            <span className={styles.skillItem}>Node.js</span>
            <span className={styles.skillItem}>ROS 2</span>
            <span className={styles.skillItem}>OpenCV</span>
            <span className={styles.skillItem}>Qt</span>
            <span className={styles.skillItem}>STM32</span>
          </div>
        </div>
      </div>
    </section>
  );
}
