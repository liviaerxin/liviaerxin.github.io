import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './styles.module.css';
import config from '../../../website_config.json';

export default function SkillCard({ image, title, descriptionLines }) {
  return (
    <div className={styles.skill_card}>
      <div className={styles.skill_card__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.skill_card__content}>
        <h2 className={clsx('text--center', styles.skill_card__title)}>{title}</h2>
        <div className={styles.skill_card__description}>
        {descriptionLines &&
            descriptionLines.map((d, i) => <p key={i}>{d}</p>)}
        </div>
      </div>
    </div>
  );
}
