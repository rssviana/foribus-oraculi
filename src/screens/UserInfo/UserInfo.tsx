import React, { useEffect } from 'react';
import { useSelector } from 'hooks';
import { useHistory } from "react-router-dom";

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Repositories from 'components/Repositories';
import { Loader } from 'components/Loader';

import { UserInfoContainer, UserInfoContent } from './styles';

const UserInfo: React.FC = () => {
  const user = useSelector((s) => s.USER.data[0]);
  const repositories = useSelector((s) => s.REPOS.data);

  const userError = useSelector((s) => s.USER.error);

  const userIsLoading = useSelector((s) => s.USER.loading);
  const userReposIsLoading = useSelector((s) => s.REPOS.loading);

  const history = useHistory();

  const hasAnyRepo = repositories && repositories.length > 0

  useEffect(() => {
    if(userError) history.push('/not-found')
    if(user &&  !userError && repositories.length > 0) history.push(`/user-info/${user.login}`) 
  }, [user, repositories, userError, history]);

  if(userIsLoading || userReposIsLoading) {
    return <Loader />
  }

  return (
    <UserInfoContainer>
      <Header />
      <UserInfoContent>
        <Sidebar content={user} />
        {
          hasAnyRepo 
            ? <Repositories content={repositories} /> 
            : <h3>Nenhum repositório foi encontrado </h3>
        }
      </UserInfoContent>
    </UserInfoContainer>
  );
};

export default UserInfo;
