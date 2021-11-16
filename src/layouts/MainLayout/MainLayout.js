import { StyledContent, StyledFooter, StyledHeader } from './style';

import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';

const MainLayout = ({ children, displayLogo }) => {
  return (
    <>
      <StyledHeader>
        {displayLogo && <Logo />}
        <NavBar />
      </StyledHeader>
      <StyledContent data-testid='main' children={children} />
      <StyledFooter data-testid='footer' />
    </>
  );
}

export default MainLayout;