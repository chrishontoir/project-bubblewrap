import styled from 'styled-components';

export const StyledTextbox = styled.input`
  width: 400px;
  // height: 30px;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 8px 10px;
  box-sizing: border-box;
  ${props => props.error && (`
    background-color: var(--errorBackgroundColor);
    border: 1px solid var(--errorFontColor);
  `)}
`;

export const StyledTextboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 5px;
`;
