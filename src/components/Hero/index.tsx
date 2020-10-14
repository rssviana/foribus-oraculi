import React, { useState } from 'react';
import { useDispatch } from 'hooks';

import * as userActions from 'store/user/actions';
import * as reposActions from 'store/repositories/actions';

import SvgSearch from 'assets/icons/search';

import {
  HeroSearch,
  FormHeader,
  GithubAnchor,
  Fieldset,
  Input,
  Button,
} from './styles';

const GITHUB_PROJECT_PAGE = 'https://github.com/rssviana/foribus-oraculi';

const Hero: React.FC = () => {
  const [userToSearch, setUserToSearch] = useState('')

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUserToSearch(value)
  }

  const openGithubPage = () => {
    window.open(GITHUB_PROJECT_PAGE);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.user.request({ name: userToSearch }))
    dispatch(reposActions.repos.request({ name: userToSearch }))
  }

  return (
    <HeroSearch onSubmit={handleSubmit}>
      <FormHeader onClick={openGithubPage}>
        <GithubAnchor>Github</GithubAnchor>
        Search
      </FormHeader>
      <Fieldset>
        <Input
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          value={userToSearch}
          onChange={handleInputChange}
        />
        <Button type="submit">
          <SvgSearch />
        </Button>
      </Fieldset>
    </HeroSearch>
  );
};

export default Hero;
