import React, { useEffect } from 'react';
import { useSelector } from 'hooks';
import { useHistory } from "react-router-dom";

import Hero from 'components/Hero';

import { HomeContainer } from './styles';
import { Loader } from 'components/Loader';

const Home: React.FC = () => {
  const user = useSelector((s) => s.USER.data[0]);
  const repositories = useSelector((s) => s.REPOS.data);
  const userIsLoading = useSelector((s) => s.USER.loading);
  const userReposIsLoading = useSelector((s) => s.REPOS.loading);

  const history = useHistory();

  useEffect(() => {
    if(user && repositories.length > 0) history.push(`/user-info/${user.login}`)
  }, [user, repositories, history]);

  if(userIsLoading || userReposIsLoading) {
    return <Loader />
  }

  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
};

export default Home;
