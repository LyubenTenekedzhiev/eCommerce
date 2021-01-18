import styled from 'styled-components';

import { device } from './../../media-queries';

export const BasketListWrapper = styled.div`
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

export const BasketHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;

  @media ${device.mobileS} {
    font-size: 1.15rem;
  }
  @media ${device.mobileL} {
    font-size: 1.25rem;
  }
  @media ${device.laptop} {
    font-size: 1.35rem;
  }
  @media ${device.desktop} {
    font-size: 2.5rem;
  }
`;

export const BasketInfoText = styled.span`
  display: inline-block;
  margin: 2rem 1rem 1rem 0rem;

  @media ${device.mobileS} {
    font-size: 0.85rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
  @media ${device.desktop} {
    font-size: 2rem;
    margin: 3rem 2rem 3rem 0rem;
  }
`;
