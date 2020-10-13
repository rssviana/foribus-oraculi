import React, { useState } from 'react';

import SvgSearch from 'assets/icons/search';

import {
  HeaderSearch,
  FormHeader,
  GithubAnchor,
  Fieldset,
  Input,
  Button,
} from './styles';

const GITHUB_PROJECT_PAGE: string = 'https://github.com/rssviana/mithrax';

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const openGithubPage = () => {
    window.open(GITHUB_PROJECT_PAGE);
  };

  return (
    <HeaderSearch onSubmit={() => console.log(inputValue)}>
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
