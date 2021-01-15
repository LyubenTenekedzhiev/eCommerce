import styled from 'styled-components';
import { styled as MUIStyled } from '@material-ui/core/styles';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export const ProductsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
  width: 100%;
`;

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 550px;
  width: 100%;
`;

export const ProductsNavigation = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProductsNavButton = styled.button`
  color: black;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 1rem 1rem 1rem 0rem;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  cursor: pointer;
  background: none;
  transition: 0.4s;

  &:hover {
    color: #618d8e;
    border-bottom: 1px solid #618d8e;
  }
`;

export const ProductsLoadingMsg = styled.h4`
  font-weight: 400;
  font-size: 2rem;
  margin: 0 auto;
`;

export const PageButtonNext = MUIStyled(NavigateNextIcon)({
  width: '4rem',
  height: '3rem',
  cursor: 'pointer',
});

export const PageButtonPrev = MUIStyled(NavigateBeforeIcon)({
  width: '4rem',
  height: '3rem',
  cursor: 'pointer',
});
