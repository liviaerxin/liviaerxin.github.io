import React from 'react';
import {SkillItem} from './src/components/SkillCard';
import {ProfileItem} from './src/components/Profile';

export const SKILLS: SkillItem[] = [
  {
    title: 'Backend Stacks',
    href: '/blog/tags/backend',
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
    title: 'Microservices Architecture',
    href: '/blog/tags/microservice',
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
    href: '/blog/tags/ci-cd',
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
    title: 'Best Practices',
    href: '/blog/tags/practice',
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
  description: (
    <>
      <p><b>Software engineer</b> to build infrastructure for machine learning products.</p>
      <p>Passionate about JetBot currently. Experienced in <b>Python and C/C++</b>, (Java is past).</p>
      <p>and I am also an <b>open-source</b> enthusiast.</p>
    </>
  ),
};
