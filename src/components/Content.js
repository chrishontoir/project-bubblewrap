import styled from "styled-components";

const StyledContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 500px;
`;

const StyledContent = styled.div`
  // background-color: purple;
  display: flex;
  min-width: 500px;
  width: 100%;
  flex-direction: column;
  ${props => props.background && (`
    padding: 40px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 10px 10px 100px 10px;
  `)}

`;

const Content = (props) => {
  return (
    <StyledContentContainer>
      <StyledContent {...props} />
    </StyledContentContainer>
  )
}

export default Content;
