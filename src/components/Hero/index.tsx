import React, { useState } from 'react';

import SvgSearch from 'assets/icons/search';

import {
  HeroSearch,
  FormHeader,
  GithubAnchor,
  Fieldset,
  Input,
  Button,
} from './styles';

const GITHUB_PROJECT_PAGE = 'https://github.com/rssviana/mithrax';

const Hero: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const openGithubPage = () => {
    window.open(GITHUB_PROJECT_PAGE);
  };

  return (
    <HeroSearch>
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
    </HeroSearch>
  );
};

export default Hero;
