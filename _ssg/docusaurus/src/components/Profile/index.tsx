import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import SkillCard from '../SkillCard';

import styles from './styles.module.css';
import config from '../../../website_config.json';

export type ProfileItem = {
  title: string;
  tagline: string;
  link: string;
  // description: string[];
  description: React.JSX.Element;
};

export default function Profile({profile}: {profile: ProfileItem}) {
  return (
    <section className={styles.hero}>
      <Link className={clsx('footer__link-item', styles.title)} to={profile.link}>
        {/* <img src={require('@site/static/img/me.jpg').default} /> */}
        <span>{profile.title}</span>
      </Link>
      <span className={styles.subtitle}>{profile.tagline}</span>
      <hr className={styles.divider} />
      <div className={styles.description}>
        {/* {descriptionLines && descriptionLines.map((d, i) => <p key={i}>{d}</p>)} */}
        {profile.description}
      </div>
    </section>
  );
}
