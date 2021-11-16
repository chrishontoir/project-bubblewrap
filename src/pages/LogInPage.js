import useFetch from '@chrishontoir/use-fetch';
import React, { useRef, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { StyledPage } from './style';

import { useContext } from '../Context';

import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';
import Content from '../components/Content';
import MainLayout from '../layouts/MainLayout';
import Space from '../components/Space';
import SubTitle from '../components/SubTitle';
import Text from '../components/Text';
import Textbox from '../components/Textbox';
import Title from '../components/Title';

const LogInPage = () => {
  const { auth, setAuth } = useContext();
  const usernameRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, data, error, request] = useFetch();

  useEffect(() => {
    usernameRef.current?.focus();
    usernameRef.current?.select();
  }, [loading]);

  useEffect(() => {
    window.addEventListener('keypress', handleEnterPress);
    return () => {
      window.removeEventListener('keypress', handleEnterPress);
    }
  }, [loading, username, password]);

  useEffect(() => {
    data && setAuth(data);
  }, [data]);

  const handleLogIn = () => {
    request('https://35.234.137.78:3001/auth', { method: 'POST', body: { username, password }, timeout: 5000 });
  }

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  }

  const handleEnterPress = (event) => {
    if (event.key === 'Enter' && !loading) {
      window.removeEventListener('keypress', handleEnterPress);
      handleLogIn();
    }
  }

  return (
    <StyledPage data-testid='login'>
      { auth.token && <Redirect to='/' /> }
      <MainLayout displayLogo>
        <Content>
          <Title data-testid='login_title' secondary children='Log In.' />
          <Space />
          <SubTitle>Don't have an account?</SubTitle>
          <Button redirect='/register'>Register</Button>
        </Content>
        <Content background>
          <Content>
            <Textbox label='Username' ref={usernameRef} onChange={handleUsernameInput} disabled={loading} error={error} />
            <Space />
            <Textbox label='Password' password onChange={handlePasswordInput} disabled={loading} error={error} />
            <Text bold color='var(--errorFontColor)' hideOn={!error}>Invalid login credentials</Text>
            <Space height='30px' />
          </Content>
          <Content>
            <ButtonRow>
              <Button primary onClick={handleLogIn} disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</Button>
              <Button redirect='/forgot-password'>Forgot Password?</Button>
            </ButtonRow>
          </Content>
        </Content>
      </MainLayout>
    </StyledPage>
  );
}

export default LogInPage;
