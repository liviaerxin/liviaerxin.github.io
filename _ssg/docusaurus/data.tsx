import React from 'react';
import {SkillItem} from './src/components/SkillCard';
import {ProfileItem} from './src/components/Profile';

export const SKILLS: SkillItem[] = [
  {
    title: 'Backend',
    href: '/blog/tags/backend',
    image: {
      src: 'img/github-tile.svg',
    },
    description: (
      <>
        <p>Web frameworks on Python, Java and Node.js</p>
        <p>Load balancing, Caching, Scalability and Monitoring</p>
        <p>SQL and NoSQL Database</p>
        <p>Machine Learning Integration and Deployment</p>
      </>
    ),
  },
  {
    title: 'Microservice',
    href: '/blog/tags/microservice',
    image: {
      src: 'img/github-tile.svg',
    },
    description: (
      <>
        <p>
          Microservices-based architectures managed with Docker and Kubernetes
        </p>
        <p></p>
      </>
    ),
  },
  {
    title: 'CI/CD',
    href: '/blog/tags/ci-cd',
    image: {
      src: 'img/github-tile.svg',
    },
    description: (
      <>
        <p>Streamline development, testing, and deployment.</p>
        <p>C/C++, Qt, Python Packaging.</p>
        <p>Automation and CI/CD pipelines like Github Actions</p>
      </>
    ),
  },
  {
    title: 'Practice',
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
      <p>Developer, tech lover & father of two</p>
      <p>Keep simplicity and stability principles in problems solving</p>
      <p>and I am also an open-source enthusiast.</p>
    </>
  ),
};
