import { StyledPage } from './style';

import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';
import Content from '../components/Content';
import MainLayout from '../layouts/MainLayout';
import Space from '../components/Space';
import SubTitle from '../components/SubTitle';
import Title from '../components/Title';

const LandingPage = ({ token, setToken }) => {
  return (
    <StyledPage data-testid='landing'>
      <MainLayout>
        <Content>
          <SubTitle data-testid='landing_subtitle' children='Project' />
          <Title data-testid='landing_title' primary children='Bubblewrap.' />
          { !token && (
            <>
            <Space />
            <ButtonRow>
              <Button 
                data-testid='landing_log-in-button' 
                redirect='/login'
                primary
                children='Log In'
              />
              <Button 
                data-testid='landing_register-button' 
                redirect='/register'
                children='Register'
              />
            </ButtonRow>
            </>
          )}
        </Content>
      </MainLayout>
    </StyledPage>
  );
}

export default LandingPage;
