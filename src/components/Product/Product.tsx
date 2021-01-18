import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ProductWrapper, ImageFigure, Paragraph, Name, Image, ButtonWrapper } from './ProductStyles';
import { ProductInterface } from '../../interfaces/product';
import { basketState } from '../../state/basket-state';
import { wishlistState } from '../../state/wishlist-state';
import Button from "../UI/Button/Button"

interface Props {
  product: ProductInterface;
  addToBasket?: () => void;
  removeFromBasket?: () => void;
  removeFromWishlist?: () => void;
  addToWishlist?: () => void;
}

function Product({ product, addToBasket, removeFromBasket, addToWishlist, removeFromWishlist }: Props): ReactElement {
  const { name, slug, description, price, currency, image } = product;
  const wishlist = useRecoilValue(wishlistState);
  const basket = useRecoilValue<any>(basketState);
  const location = useLocation();

  const isItemInWishlist = wishlist.filter((item: ProductInterface) => item.id === product.id).length === 0;
  const isItemInBasket = basket.items && basket.items.filter((item: ProductInterface) => item.id === product.id).length === 0;

  return (
    <ProductWrapper>
      <ImageFigure>
        <Image src={image} alt={slug} />
      </ImageFigure>
      <Name>{name}</Name>
      <Paragraph>{description}</Paragraph>
      <Paragraph>
        {price} {currency}
      </Paragraph>
      {location.pathname === '/products' ? (
        <ButtonWrapper>
          <Button disabled={!isItemInBasket} clicked={addToBasket}>
            Add to basket
          </Button>
          {isItemInWishlist ? (
            <Button clicked={addToWishlist}>Add to wishlist</Button>
          ) : (
            <Button clicked={removeFromWishlist}>Remove from wishlist</Button>
          )}
        </ButtonWrapper>
      ) : (
        <Button clicked={removeFromBasket}>Remove from basket</Button>
      )}
    </ProductWrapper>
  );
}

export default Product;
