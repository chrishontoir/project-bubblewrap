import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledButtonContainer = styled.div`
  display: flex;  
`;

const StyledButton = styled.button`
  display: flex;
  padding: 10px 26px;
  color: white;
  ${props => props.width && (`
    width: ${props.width}
  `)};
  justify-content: center;
  background-color: ${props => props.theme && `var(--${props.theme}BackgroundColor)`};
  border: none;
  border-radius: 3px;
  font-weight: 700;
  ${props => props.theme !== 'disabled' && (`
    cursor: pointer;
  `)}
  transition: 200ms ease;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme && `var(--${props.theme}HoverColor)`};
  }
`;

const Button = ({ children, ...props}) => {
  const history = useHistory();

  const color = (props.disabled && 'grey') || (props.primary && 'var(--primaryBackgroundColor)') || 'var(--secondaryBackgroundColor)'
  const theme = (props.disabled && 'disabled') || (props.primary && 'primary') || (props.error && 'error') || 'secondary';

  const handleClick = (e) => {
    if (props.selected) {
      e.preventDefault();
    }
    // props.goBack && history.push('/');
    props.redirect && history.push(props.redirect);
    props.onClick && props.onClick(e);
  }
  return (
    <StyledButtonContainer>
      <StyledButton {...props} onClick={handleClick} theme={theme}>{children}</StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;
