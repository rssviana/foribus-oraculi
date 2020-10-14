import React, { useEffect } from 'react';
import { useSelector } from 'hooks';
import { useHistory } from "react-router-dom";

import Header from 'components/Header';
import { Loader } from 'components/Loader';

import { NotFoundContainer, NotFoundContent } from './styles';

const NOT_FOUND_MESSAGE = 'User not found :(';

const Search: React.FC = () => {
  const user = useSelector((s) => s.USER.data[0]);
  const repositories = useSelector((s) => s.REPOS.data);

  const userError = useSelector((s) => s.USER.error);

  const userIsLoading = useSelector((s) => s.USER.loading);
  const userReposIsLoading = useSelector((s) => s.REPOS.loading);

  const history = useHistory();

  useEffect(() => {
    if(userError) history.push('/not-found')
    if(user && repositories.length > 0) history.push(`/user-info/${user.login}`) 
  }, [user, repositories, userError, history]);

  if(userIsLoading || userReposIsLoading) {
    return <Loader />
  }

  return (
    <NotFoundContainer>
      <Header />
      <NotFoundContent>
        <h2>{NOT_FOUND_MESSAGE}</h2>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default Search;
