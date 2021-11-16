import styled from 'styled-components';

const StyledButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ButtonRow = ({ children }) => {
  return (
    <StyledButtonRow>{children}</StyledButtonRow>
  );
}

export default ButtonRow;