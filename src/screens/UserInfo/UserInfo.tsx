import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Repositories from 'components/Repositories';

import { repos } from './mockRepos';

import { UserInfoContainer, UserInfoContent } from './styles';

const UserInfo: React.FC = () => {
  return (
    <UserInfoContainer>
      <Header />
      <UserInfoContent>
        <Sidebar />
        <Repositories content={repos} />
      </UserInfoContent>
    </UserInfoContainer>
  );
};

export default UserInfo;
