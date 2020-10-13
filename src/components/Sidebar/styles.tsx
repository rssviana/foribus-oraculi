import styled from 'styled-components';

import { colors, weight, shadow } from 'styles/variables';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarWrapper = styled.div`
  border-radius: 4px;
  box-shadow: ${shadow.default};
  height: 280px;
  margin-bottom: 0.75rem;
  width: 280px;

  & img {
    border-radius: 4px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const UserName = styled.h3`
  color: ${colors.black};
  font-size: 2.2rem;
  font-weight: ${weight.book};
  margin-bottom: 0.5rem;
`;

export const UserJob = styled.p`
  color: ${colors.gray};
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
`;

export const GithubRates = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const GithubRatesItem = styled.li`
  align-items: center;
  display: flex;
  height: 2rem;
  margin-bottom: 0.5rem;

  & p {
    margin-left: 0.5rem;
  }
`;
