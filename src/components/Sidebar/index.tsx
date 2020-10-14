import React from 'react';
import { User } from 'services/github/types';

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

type SidebarProps = {
  content: User
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { content } = props
  const DEFAULT_USER_IMG = 'https://via.placeholder.com/280'

  return (
    <SidebarContainer>
      <AvatarWrapper>
        <img src={content.avatar_url ? content.avatar_url : DEFAULT_USER_IMG} alt={`${content.login} Avatar`} />
      </AvatarWrapper>
      <UserName>{content.login ? content.login : '-'}</UserName>
      <UserJob>{content.name ? content.name : '-'}</UserJob>

      <GithubRates>
        <GithubRatesItem>
          <SvgOrganization />
          <p>{content.company ? content.company : '-' }</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgLocation />
          <p>{content.location ? content.location : '-'}</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgStar />
          <p>{content.following ? content.following : '-'}</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgRepositorie />
          <p>{content.public_repos ? content.public_repos : '-'}</p>
        </GithubRatesItem>

        <GithubRatesItem>
          <SvgFollowers />
          <p>{content.followers ? content.followers : '-'}</p>
        </GithubRatesItem>
      </GithubRates>
    </SidebarContainer>
  );
};

export default Sidebar;
