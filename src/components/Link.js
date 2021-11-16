import styled from 'styled-components';

const Link = styled.a`
  color: white;
  font-weight: 700;
  font-size: 14px;
  background-color: ${props => props.selected ? 'rgba(53,81,80,0.6)' : 'transparent'};
  border: 2px solid transparent;
  padding: 8px 24px;
  border-radius: 3px;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: rgba(53,81,80,0.8);
  }
`;

export default Link;
