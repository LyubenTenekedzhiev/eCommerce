import styled from 'styled-components';

import { device } from './../../media-queries';

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  min-height: 500px;
  margin: 1rem;

  @media ${device.mobileS} {
    min-height: 450px;
    width: 100%;
    margin: 0.5rem 0rem 1rem 0rem;
  }
  @media ${device.mobileM} {
    min-height: 500px;
  }
  @media ${device.mobileL} {
    min-height: 550px;
  }
  @media (min-width: 500px) {
    min-height: 400px;
    margin: 1rem 0rem 1rem 0rem;
    width: 47.5%;
  }
  @media (min-width: 650px) {
    min-height: 450px;
  }
  @media (min-width: 775px) {
    min-height: 500px;
  }
  @media (min-width: 925px) {
    min-height: 550px;
  }
  @media ${device.laptop} {
    min-height: 625px;
  }
  @media (min-width: 1125px) {
    min-height: 650px;
  }
  @media (min-width: 1225px) {
    min-height: 675px;
  }
  @media (min-width: 1300px) {
    min-height: 425px;
    margin: 0.5rem;
    width: 22.5%;
  }
  @media ${device.laptopL} {
    min-height: 500px;
  }
  @media (min-width: 1500px) {
    min-height: 525px;
  }
  @media ${device.desktop} {
    min-height: 750px;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 2px;
  transition: 0.4s all;
  &: hover {
    transform: scale(1.03);
  }
`;

export const ImageFigure = styled.figure`
  max-width: 100%;
  overflow: hidden;
`;

export const Name = styled.h4`
  font-weight: 400;

  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.laptop} {
    font-size: 1.25rem;
  }
  @media (min-width: 1300px) {
    font-size: 1rem;
  }
  @media ${device.desktop} {
    font-size: 1.85rem;
  }
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 0.85rem;

  @media ${device.mobileS} {
    font-size: 0.75rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
  @media (min-width: 1300px) {
    font-size: 0.75rem;
  }
  @media ${device.desktop} {
    font-size: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;