import { StyledPage } from './style';
import { useHistory } from 'react-router';

import Content from '../components/Content';
import MainLayout from '../layouts/MainLayout';
import SubTitle from '../components/SubTitle';
import Title from '../components/Title';
import Button from '../components/Button';
import Space from '../components/Space';

const ErrorPage = ({ preMessage, message, info, token, setToken, resetError }) => {
  const history = useHistory();

  if (!message) {
    message = 'Something went wrong.';
    info = 'Please try again';
  }

  const handleGoBack = () => {
    history.goBack();
  }

  return (
    <StyledPage>
      <MainLayout displayLogo token={token} setToken={setToken}>
        <Content>
          { preMessage && <SubTitle data-testid='error_pre-message' children={preMessage} /> }
          <Title data-testid='error_title' error children={message} />
          { info && <SubTitle data-testid='error_subtitle' children={info} /> }
          <Space />
          <Button error onClick={resetError || handleGoBack}>Go back</Button>
        </Content>
      </MainLayout>
    </StyledPage>
  );
}

export default ErrorPage;
