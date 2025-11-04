import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// Bileşenleri import et
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Project from '../components/Project/Project';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Ana Sayfa | ${siteConfig.title}`}
      description="Furkan Vural'ın kişisel portfolyo ve teknik notlar sitesi."
    >
      <main>
        <HeroSection />
        <AboutSection />
        <Project />
      </main>
    </Layout>
  );
}
