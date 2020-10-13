import React from 'react';

import SvgFollowers from 'assets/icons/followers';
import SvgLocation from 'assets/icons/location';
import SvgOrganization from 'assets/icons/organization';
import SvgRepositorie from 'assets/icons/repositorie';
import SvgStar from 'assets/icons/star';

import {
  SidebarContainer,
  AvatarWrapper,
  UserName,
  UserJob,
  GithubRates,
  GithubRatesItem,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <AvatarWrapper>
        <img src="https://picsum.photos/300/300" alt="User Avatar" />
      </AvatarWrapper>
      <UserName>Darth Vader</UserName>
      <UserJob>anakinskywalker</UserJob>

      <GithubRates>
        <GithubRatesItem>
          <SvgOrganization />
          <p>teste 001</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgLocation />
          <p>teste 001</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgStar />
          <p>teste 001</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgRepositorie />
          <p>teste 001</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgFollowers />
          <p>teste 001</p>
        </GithubRatesItem>
      </GithubRates>
    </SidebarContainer>
  );
};

export default Sidebar;
