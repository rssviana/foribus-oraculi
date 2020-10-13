import styled from 'styled-components';

import { colors, weight } from 'styles/variables';

export const RepoList = styled.ul`
  list-style: none;
  margin: 0 0 0 4rem;
  padding: 0;
  max-width: 44rem; ;
`;

export const RepoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
`;

export const RepoTitle = styled.h3`
  color: ${colors.purple};
  cursor: pointer;
  font-size: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RepoDescription = styled.p`
  color: ${colors.black};
  font-size: 1.25rem;
  font-weight: ${weight.book};
  margin-bottom: 0.6rem;
`;
export const RepoStars = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: ${colors.gray};
    font-size: 1.25rem;
    font-weight: ${weight.book};
    margin-left: 0.5rem;
  }
`;
