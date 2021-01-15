import styled from 'styled-components';

export const BasketListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
`;

export const BasketInfoText = styled.span`
  display: inline-block;
  margin: 2rem 1rem 1rem 0rem;
`;

export const BasketLoadingMsg = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 2rem;
`;
