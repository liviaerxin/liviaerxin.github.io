import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import SkillCard from '../../components/SkillCard';

import styles from './styles.module.css';
import config from '../../../website_config.json';

export default function HomePage({ title, tagline, descriptionLines, skills }) {
  return (
    <section className={styles.hero}>
      <Link
        className={clsx('footer__link-item', styles.title)}
        to='/blog'
      >
        {/* <img src={require('@site/static/img/me.jpg').default} /> */}
        <span>{title}</span>
      </Link>
      <span className={styles.subtitle}>{tagline}</span>
      <hr className={styles.divider} />
      <div className={styles.description}>
        {descriptionLines &&
          descriptionLines.map((d, i) => <p key={i}>{d}</p>)}
      </div>
      <div className="container">
        <div className="row">
          {skills &&
            skills.map((skill, i) =>
              <div className="col col--3" key={i}>
                <SkillCard image={skill.image} title={skill.title} descriptionLines={skill.descriptionLines} />
              </div>)}
        </div>
      </div>
    </section>
  );
}
