import styled from 'styled-components';

export const StyledLogo = styled.h1`
  cursor: pointer;
  flex-shrink: 0;
  margin: 0;
  user-select: none;

  & span {
    color: var(--primaryBackgroundColor);

  }
  
  &:hover span {
    color: var(--secondaryBackgroundColor);
  }
`;
