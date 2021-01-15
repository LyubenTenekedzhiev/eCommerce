import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

export const AppWrapper = styled.div`
  width: 90vw;
  margin: 3rem auto;
  font-family: Roboto;
`;

export const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`;

export const AppHeaderTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
`;

export const AppHeaderNavLinks = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 0rem 1.5rem;
  font-size: 1.15rem;
  transition: 0.4s;
  &:hover {
    color: #618d8e;
  }
`;
