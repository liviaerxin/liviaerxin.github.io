import {useEffect, useState} from 'react';
import {Octokit} from '@octokit/core';
import {paths} from '@octokit/openapi-types';

type Options = {
  type: 'all' | 'owner' | 'member';
  sort: 'created' | 'updated' | 'pushed' | 'full_name';
  postRequestSort?:
    | 'size'
    | 'stargazers_count'
    | 'watchers_count'
    | 'forks_count';
  direction: 'asc' | 'desc';
  per_page: number;
  page: number;
};

export type Repository =
  paths['/users/{username}/repos']['get']['responses']['200']['content']['application/json'][0] | paths['/repos/{owner}/{repo}']['get']['responses']['200']['content']['application/json'];


export function useGithubRepositoriesForUser(
  username: string,
  options?: Options,
) {

  type Repository = paths['/users/{username}/repos']['get']['responses']['200']['content']['application/json'][0]

  const [repositories, setRepositories] = useState<Repository[]>([]);
  
  options ??= {
    type: 'owner',
    sort: 'updated',
    direction: 'desc',
    per_page: 20,
    page: 0,
  };

  async function getUserRepos(username: string, options: Options) {
    try {
      const {type, sort, direction, per_page, page, postRequestSort} = options;
      const octokit = new Octokit();
      const response = await octokit.request('GET /users/{username}/repos', {
        username,
        type,
        sort,
        direction,
        per_page,
        page,
      });
      if (response.status != 200) return;

      let repositories = response.data;

      if (postRequestSort) {
        repositories.sort((repo1, repo2) =>
          direction === 'asc'
            ? repo1[postRequestSort] - repo2[postRequestSort]
            : repo2[postRequestSort] - repo1[postRequestSort],
        );
      }
      setRepositories(repositories);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserRepos(username, options);
  }, []);

  return {repositories};
}


export function useGithubRepositories(
  owner: string,
  repos: string[],
) {
  type Repository = paths['/repos/{owner}/{repo}']['get']['responses']['200']['content']['application/json'];

  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function getRepos(owner: string, repos: string[]) {
    try {
      const octokit = new Octokit();
      const repositories = [];

      repos.map(async (repo) => {
        const response = await octokit.request('GET /repos/{owner}/{repo}', {owner, repo});
        if (response.status != 200) return;
        let repository = response.data;
        repositories.push(repository);
        setRepositories([...repositories]);
        console.log(`push ${repository}`);
        
      })

    } catch (error: unknown) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRepos(owner, repos);
  }, []);

  return {repositories};
}