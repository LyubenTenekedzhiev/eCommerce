import styled from 'styled-components';

import { device } from './../../../media-queries';

export const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.4rem;
  outline: none;
  cursor: pointer;

  @media ${device.mobileS} {
    font-size: 0.75rem;
    padding: 0.25rem;
  }
  @media ${device.laptop} {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
  @media (min-width: 1300px) {
    font-size: 0.75rem;
  }
  @media ${device.desktop} {
    font-size: 1.5rem;
    padding: 0.75rem;
  }
`;
