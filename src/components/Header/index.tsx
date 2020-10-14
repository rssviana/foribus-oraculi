import React, { useState } from 'react';
import { useDispatch } from 'hooks';

import * as userActions from 'store/user/actions';
import * as reposActions from 'store/repositories/actions';

import SvgSearch from 'assets/icons/search';

import {
  HeaderSearch,
  FormHeader,
  GithubAnchor,
  Fieldset,
  Input,
  Button,
} from './styles';

const GITHUB_PROJECT_PAGE = 'https://github.com/rssviana/foribus-oraculi';

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const openGithubPage = () => {
    window.open(GITHUB_PROJECT_PAGE);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.user.request({ name: inputValue }))
    dispatch(reposActions.repos.request({ name: inputValue }))
  }

  return (
    <HeaderSearch onSubmit={handleSubmit}>
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
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="submit">
          <SvgSearch />
        </Button>
      </Fieldset>
    </HeaderSearch>
  );
};

export default Header;
