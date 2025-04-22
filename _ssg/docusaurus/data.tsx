import React from 'react';
import {SkillItem} from './src/components/SkillCard';
import {ProfileItem} from './src/components/Profile';

export const SKILLS: SkillItem[] = [
  {
    title: 'Backend Stacks',
    href: '/docs/tags/backend',
    image: {
      src: 'img/github-tile.svg',
    },
    description: (
      <>
        <p>Web frameworks on Python, Java and Node.js</p>
        <p>Load balancing, Caching, Scalability and Monitoring</p>
        <p>SQL and NoSQL Database Operation</p>
      </>
    ),
  },
  {
    title: 'Architecture & Design',
    href: '/docs/tags/system-design',
    image: {
      src: 'img/github-tile.svg',
    },
    description: (
      <>
        <p>Management and deployment with help of Docker and Kubernetes.</p>
        <p>Leverage microservices for machine learning products.</p>
      </>
    ),
  },
  {
    title: 'DevOps Principles',
    href: '/docs/tags/dev-ops',
    image: {
      src: 'img/github-tile.svg',
    },
    description: (
      <>
        <p>Automation in building, testing, and deployment.</p>
        <p>CI/CD pipelines using Github Actions.</p>
        <p>Application packaging in C/C++, Python, QT, ...etc.</p>
      </>
    ),
  },
  {
    title: 'How To',
    href: '/docs/tags/how-to',
    image: {
      src: 'img/github-tile.svg',
    },
    description: (
      <>
        <p>Problem-solving tips and tricks</p>
        <p>Testing, debugging and profiling</p>
        <p>Best practices for ...</p>
      </>
    ),
  },
];

export const PROFILE: ProfileItem = {
  title: '',
  tagline: '',
  link: '/doc',
  description: (
    <>
      <p>Love clean code and simple solutions</p>
      <p>Building scalable AI-powered microservices and desktop apps</p>
      <p>Passionate about bridging research and solid engineering</p>
    </>
  ),
};
