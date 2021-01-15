import styled from 'styled-components';

export const Name = styled.h4`
  font-weight: 400;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  min-height: 500px;
  margin: 1rem;
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

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 0.85rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.4rem;
  outline: none;
  cursor: pointer;
`;
