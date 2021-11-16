import { StyledPage } from './style';
import useFetch from '@chrishontoir/use-fetch';

import { useContext } from '../Context';

import Content from '../components/Content';
import MainLayout from '../layouts/MainLayout';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const { auth } = useContext();
  const [user, setUser] = useState({});
  const [loading, data, error, request] = useFetch();

  useEffect(() => {
    data && setUser(data);

    return () => {}
  }, [data]);

  useEffect(() => {
    request('https://35.234.137.78:3001/user-info', { headers: { authorization: auth.token }})
  }, []); 

  return (
    <StyledPage data-testid='home'>
      {!loading && (
        <MainLayout displayLogo>
          <Content>
            <Title data-testid='home_title' secondary>Welcome,</Title>
            <SubTitle>{user?.firstname}</SubTitle>
          </Content>
        </MainLayout>
      )}
    </StyledPage>
  );
}

export default HomePage;
