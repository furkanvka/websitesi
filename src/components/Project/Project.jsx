import React from 'react';
import styles from './Project.module.css';
import Link from '@docusaurus/Link';

export default function Project() {
  const projects = [
    {
      title: 'Air Defense Control System',
      description: 'Real-time tracking and motor control using STM32 and ROS 2.',
      link: 'https://github.com/furkanvrl/air-defense-system',
    },
    {
      title: 'RepeatNet Implementation',
      description: 'User behavior–based recommendation system built with PyTorch.',
      link: 'https://github.com/furkanvrl/repeatnet',
    },
    {
      title: 'LDPC Accelerator for RISC-V',
      description: 'Hardware accelerator integrated with AXI and QSPI boot system.',
      link: 'https://github.com/furkanvrl/ldpc-riscv',
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2>Projects</h2>
        <div className={styles.underline}></div>
        <p>Some of my favorite technical projects and experiments.</p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={project.link} className={styles.projectLink} target="_blank">
              View on GitHub →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
