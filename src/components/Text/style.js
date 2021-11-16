import styled from 'styled-components';

export const StyledText = styled.p`
  color: ${props => props.textColor};
  font-size: 14px;
  font-weight: ${props => props.bold ? '500' : '400'};
  margin: 10px 0 0 0;
  opacity: 1;
  text-align: left;
  transition: 400ms linear;

  &.hidden {
    font-size: 0;
    margin: 0;
    opacity: 0;
  }
`;
