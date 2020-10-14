import React from 'react';
import { Repository } from 'services/github/types'

import {
  RepoList,
  RepoItem,
  RepoTitle,
  RepoDescription,
  RepoStars,
} from './styles';

import SvgStar from 'assets/icons/star';

type RepositoriesProps = {
  content: Repository[];
};

const Repositories: React.FC<RepositoriesProps> = props => {
  const { content } = props;

  const openRepository = (link: string) => {
    window.open(link);
  };

  return (
    <RepoList>
      {content &&
        content.map((repo: Repository) => (
          <RepoItem key={repo.id}>
            <RepoTitle onClick={() => openRepository(repo.html_url)}>
              {repo.name}
            </RepoTitle>
            <RepoDescription>{repo.description}</RepoDescription>
            <RepoStars>
              <SvgStar />
              <span>{repo.stargazers_count}</span>
            </RepoStars>
          </RepoItem>
        ))}
    </RepoList>
  );
};

export default Repositories;
