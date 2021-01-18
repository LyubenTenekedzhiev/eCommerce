import styled from 'styled-components';

import { device } from './../../../media-queries';

export const LoadingMsg = styled.h4`
  font-weight: 400;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;

  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }
  @media ${device.desktop} {
    font-size: 3rem;
  }
`;