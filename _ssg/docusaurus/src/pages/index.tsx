import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Profile from '../components/Profile';
import SkillCard from '../components/SkillCard';
import styles from './index.module.css';

import {SKILLS, PROFILE} from '@site/data';

function SkillsContainer() {
  return (
    <div className="container">
      <div className="row">
        {SKILLS &&
          SKILLS.map((d, i) => (
            <div className="col col--3" key={i}>
              <SkillCard skill={d} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {
    siteConfig: {customFields, title, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};

  // const profileDescription = [
  //   "Developer, teacher, dreamer & tech lover",
  //   "I love participating at dev events",
  //   "and I am also an open-source enthusiast.",
  // ];

  // [How do I check for an empty/undefined/null string](https://stackoverflow.com/questions/154059/how-do-i-check-for-an-empty-undefined-null-string-in-javascript)
  PROFILE.title =
    (PROFILE.title?.trim()?.length || 0) > 0 ? PROFILE.title : title;
  PROFILE.tagline =
    (PROFILE.tagline?.trim()?.length || 0) > 0 ? PROFILE.tagline : title;

  return (
    <Layout title={tagline} description={description}>
      <main className={styles.heroContainer}>
        <Profile profile={PROFILE} />
        <SkillsContainer />
      </main>
    </Layout>
  );
}
