import { useHistory } from 'react-router-dom';

import { StyledLogo } from './style';

const Logo = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

  return (
    <StyledLogo onClick={handleClick}>Project <span>B</span>ubblewrap<span>.</span></StyledLogo>
  )
}

export default Logo;
