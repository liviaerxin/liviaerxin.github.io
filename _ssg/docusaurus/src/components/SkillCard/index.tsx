import React, {ReactDOM} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './styles.module.css';
import config from '../../../website_config.json';

export type SkillItem = {
  title: string;
  href: string;
  image: {
    src: string;
    width?: number;
    height?: number;
  };
  // description: string[];
  description: React.JSX.Element;
};

export default function SkillCard({skill}: {skill: SkillItem}) {
  return (
    <div className={styles.skill_card}>
      <a href={skill.href}>
        <img
          className={styles.skill_card__image}
          src={skill.image.src}
          alt={skill.title}
          loading="lazy"
        />
      </a>
      <div className={styles.skill_card__content}>
        <h2 className={clsx('text--center', styles.skill_card__title)}>
          {skill.title}
        </h2>
        <div
          className={clsx('padding-horiz--md', styles.skill_card__description)}>
          {/* {skill.descriptionLines &&
            skill.descriptionLines.map((d, i) => <p key={i}>{d}</p>)} */}
          {skill.description}
        </div>
      </div>
    </div>
  );
}
