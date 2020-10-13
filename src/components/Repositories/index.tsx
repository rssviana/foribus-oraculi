import React from 'react';

import {
  RepoList,
  RepoItem,
  RepoTitle,
  RepoDescription,
  RepoStars,
} from './styles';

import SvgStar from 'assets/icons/star';

interface Repository {
  title: string;
  link: string;
  description: string;
  stars: string;
}

type Props = {
  content: Repository[];
};

const Repositories: React.FC<Props> = props => {
  const { content } = props;

  const openRepository = (link: string) => {
    window.open(link);
  };

  return (
    <RepoList>
      {content &&
        content.map((repo: Repository) => (
          <RepoItem key={repo.title}>
            <RepoTitle onClick={() => openRepository(repo.link)}>
              {repo.title}
            </RepoTitle>
            <RepoDescription>{repo.description}</RepoDescription>
            <RepoStars>
              <SvgStar />
              <span>{repo.stars}</span>
            </RepoStars>
          </RepoItem>
        ))}
    </RepoList>
  );
};

export default Repositories;
