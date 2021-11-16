import styled from 'styled-components';

const Space = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
`;

export default Space;