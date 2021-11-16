import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '@chrishontoir/use-fetch';

import { useContext } from '../Context';

import ButtonRow from './ButtonRow';
import Link from './Link';
import Button from './Button';

const StyledNavBar = styled.div`
  height: 100px;
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  justify-content: end;
  align-items: center;
`;

const CollapsableNavBar = styled.div`
  // width: 100px;
  flex-grow: ${props => props.expanded ? '1' : '0'};
  background-color: ${props => props.expanded && 'rgba(0,0,0,0.1)'};
  border-radius: 0 0 10px 100px;
  height: 100%;
  transition: 600ms linear;
  box-sizing: border-box;
  margin-left: auto;
  justify-content: flex-end;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
`;

const StyledBurgerToggle = styled.div`
  align-items: center;
  display: flex;
`;

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3px;
  padding: 0 ${props => props.expanded ? '20px' : '0px'};
  justify-content: center;
  background-color: ${props => props.expanded ? 'rgba(0,0,0,0.1)' : 'transparent'};
  border: none;
  cursor: pointer;
  transition: 400ms linear;

  &:hover {
    background-color: ${props => props.expanded && 'rgba(0,0,0,0.2)'};

    & div {
      background-color: var(--secondaryHoverColor);
    }
  }
`;

const ToggleLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--secondaryBackgroundColor);
  // border-radius: 5px;
  transition: 600ms linear;

  &.top {
    ${props => props.expanded && (`
      transform: rotate(-45deg) translate(-3px,6px);
    `)}
  }

  &.mid {
    opacity: ${props => props.expanded ? '0' : '1'};
  }

  &.bot {
    ${props => props.expanded && (`
      transform: rotate(45deg) translate(-3px,-6px);
    `)}
  }
`;

const StyledNavOptions = styled.div`
  // background-color: red;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  transform: ${props => props.expanded ? 'translateX(0)' : 'translateX(-100%)'};
  opacity: ${props => props.expanded ? '1' : '0'};
  transition: 600ms ease;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
`;

const NavOption = styled.div`
  // background-color: orange;
  height: 100%;
  padding: 0 20px;
  color: white;
  display: flex;
  align-items: center;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  transition: 400ms ease;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    border-bottom: 3px solid var(--secondaryBackgroundColor);
    background-color: rgba(0,0,0,0.1);
    color: var(--secondaryBackgroundColor);
  }
`;

const BurgerToggle = ({ expanded, setExpanded }) => {
  const handleClick = (e) => {
    setExpanded(current => !current);
  }

  return (
    <StyledBurgerToggle>
      <ToggleButton onClick={handleClick} expanded={expanded}>
        <ToggleLine className='top' expanded={expanded} />
        <ToggleLine className='mid' expanded={expanded} />
        <ToggleLine className='bot' expanded={expanded} />
      </ToggleButton>
    </StyledBurgerToggle>
  )
}

const NavLink = ({ children, onClick, redirect }) => {
  const history = useHistory();

  const handleClick = () => {
    if (onClick) onClick();
    history.push(redirect)
  }

  return (
    <NavOption onClick={handleClick}>{children}</NavOption>
  )
}

const NavBar = () => {
  const { auth, setAuth } = useContext();
  const [expanded, setExpanded] = useState(false);
  const [loading, huh, error, request] = useFetch();

  console.log('B', loading, huh, error)
  // console.log('B', data)
  useEffect(() => {
    huh && setAuth(huh);

    return () => {}
  }, [huh])
  const handleLogOut = () => {
    request('https://35.234.137.78:3001/logout');
  }

  return (
    <CollapsableNavBar expanded={expanded} >
      <BurgerToggle expanded={expanded} setExpanded={setExpanded} />
      <StyledNavOptions expanded={expanded}>
        <NavLink redirect='/about'>About</NavLink>
        { !auth?.token && <NavLink redirect='/login'>Log In</NavLink> }
        { auth?.token && <NavLink redirect='/account'>Account</NavLink> }
        { auth?.token && <NavLink onClick={handleLogOut}>Log Out</NavLink> }
      </StyledNavOptions>
    </CollapsableNavBar>
  )
}

export default NavBar;