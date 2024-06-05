import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';

import styles from './styles.module.css';
import {
  useGithubRepositoriesForUser,
  Repository,
  useGithubRepositories,
} from '../../hooks/useGithubRepositories';
import RepositoryCard from '../../components/RepositoryCard';

const websiteConfig = require('@site/website_config.json');

export default function Portfolio() : JSX.Element{
  // const maxPerPage = 24;
  // const {repositories} = useGithubRepositoriesForUser(websiteConfig.GITHUB_USER, {
  //   type: 'owner',
  //   sort: 'pushed',
  //   direction: 'desc',
  //   per_page: maxPerPage,
  //   page: 0,
  // });

  const repos = [
    "hello-c",
    "hello-cpp",
    "hello-python",
    "hello-assembly",
    "hello-dockerfile",
    "hello-docker-compose",
  ];
  const {repositories} = useGithubRepositories(
    websiteConfig.GITHUB_USER,
    repos,
  );
  const maxPerPage = repos.length;

  const title = translate({
    id: 'portfolio.title',
    message: 'Daily Projects',
    description: "The author's portfolio",
  });
  const description = translate({
    id: 'portfolio.description',
    message: 'My {maxPerPage} up-to-date daily coding playground!',
    description: 'A description for the portfolio page',
  });

  return (
    <Layout title={title} description={description}>
      <div className={styles.projects_container}>
        <h2>{title}</h2>
        <h3>{description.replace('{maxPerPage}', maxPerPage.toString())}</h3>
        <section>
          <div role="projects">
            {repositories.length > 0 ? (
              repositories.map((repo: Repository, i: number) => (
                <RepositoryCard key={i} repository={repo} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}