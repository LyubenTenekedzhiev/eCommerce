import styled from 'styled-components';

import { device } from './../../media-queries';

export const ProductsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
  width: 100%;

  @media ${device.mobileS} {
    height: 100%;
  }
`;

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 550px;
  width: 100%;

  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media (min-width: 500px) {
    flex-direction: row;
  }
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

  @media ${device.mobileS} {
    font-size: 0.85rem;
  }
  @media ${device.tablet} {
    font-size: 1.15rem;
  }
  @media ${device.laptopL} {
    font-size: 1.25rem;
  }
  @media ${device.desktop} {
    font-size: 2rem;
  }
`;

export const PaginationButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0rem;

  @media ${device.tablet} {
    margin: 2.5rem 0rem;
  }
  @media (min-width: 1300px) {
    width: 70%;
    margin: 3rem auto;
  }
  @media ${device.desktop} {
    margin: 5rem auto;
  }
`;
