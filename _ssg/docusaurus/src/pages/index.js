import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomePage from '../components/Homepage';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <HomepageFeatures
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </HomepageFeatures>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const lines = [
    'Developer, teacher, dreamer & tech lover',
    'I love participating at dev events',
    'and I am also an open-source enthusiast.'
  ];

  const skills = [
    {
      image: 'img/github-tile.svg',
      title: 'xxxx',
      descriptionLines: [
        'xxxx',
        'xxxx'
      ]
    },
    {
      image: 'img/github-tile.svg',
      title: 'xxxx',
      descriptionLines: [
        'xxxx',
        'xxxx'
      ]
    },
    {
      image: 'img/github-tile.svg',
      title: 'xxxx',
      descriptionLines: [
        'xxxx',
        'xxxx'
      ]
    },
    {
      image: 'img/github-tile.svg',
      title: 'xxxx',
      descriptionLines: [
        'xxxx',
        'xxxx'
      ]
    }
  ]
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.customFields.description}
    >
      <main className={styles.heroContainer}>
        <HomePage {...siteConfig} descriptionLines={lines} skills={skills}/>
      </main>
    </Layout>
  );
}
