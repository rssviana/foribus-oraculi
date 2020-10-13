import React from 'react';

import Header from 'components/Header';

import { NotFoundContainer, NotFoundContent } from './styles';

const notFoundMessage = 'User not found :(';

const Search: React.FC = () => {
  return (
    <NotFoundContainer>
      <Header />
      <NotFoundContent>
        <h2>{notFoundMessage}</h2>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default Search;
