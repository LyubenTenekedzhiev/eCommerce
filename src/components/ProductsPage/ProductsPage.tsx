import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

import Product from '../Product/Product';
import { ProductInterface } from '../../interfaces/product';
import { getBasketAPI, addToBasketAPI } from '../../api/basket-api';
import { addToWishlistAPI, getWishlistAPI, removeFromWishlistAPI } from '../../api/wishlist-api';
import { nextPageClickHandler, prevPageClickHandler } from '../../utils/utils';
import { basketState } from '../../state/basket-state';
import { productsState } from '../../state/products-state';
import { wishlistState } from '../../state/wishlist-state';
import {
  PageButtonNext,
  ProductsListWrapper,
  ProductsPageWrapper,
  PageButtonPrev,
  ProductsNavigation,
  ProductsNavButton,
  ProductsLoadingMsg,
} from './ProductsPageStyles';

function ProductsPage(): ReactElement {
  const setBasket = useSetRecoilState<any>(basketState);
  const products = useRecoilValue<any>(productsState);
  const [wishList, setWishList] = useRecoilState<any>(wishlistState);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [firstProduct, setFirstProduct] = useState<number>(0);
  const [firstWishlistItem, setFirstWishlistItem] = useState<number>(0);
  const [tabsState, setTabsState] = useState<string>('products');

  // Adjusting the pagination according to the screen width
  const updateWindowDimensions = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 425) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(4);
    }
  }, [itemsPerPage]);

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    updateWindowDimensions();
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, [updateWindowDimensions]);

  const productsList =
    products.length > 0 &&
    products
      .slice(firstProduct, firstProduct + itemsPerPage)
      .map((item: ProductInterface) => (
        <Product
          key={item.id}
          addToBasket={() => addToBasketAPI(item).then(() => getBasketAPI().then((res) => setBasket(res)))}
          addToWishlist={() => addToWishlistAPI(item).then(() => getWishlistAPI().then((res) => setWishList(res)))}
          removeFromWishlist={() => removeFromWishlistAPI(item.id).then(() => getWishlistAPI().then((res) => setWishList(res)))}
          product={item}
        />
      ));

  const wishListProducts =
    wishList.length > 0 &&
    wishList
      .slice(firstWishlistItem, firstWishlistItem + itemsPerPage)
      .map((item: ProductInterface) => (
        <Product
          key={item.id}
          addToBasket={() => addToBasketAPI(item).then(() => getBasketAPI().then((res) => setBasket(res)))}
          removeFromWishlist={() => removeFromWishlistAPI(item.id).then(() => getWishlistAPI().then((res) => setWishList(res)))}
          product={item}
        />
      ));

  return (
    <ProductsPageWrapper>
      <ProductsNavigation>
        <ProductsNavButton
          onClick={() => setTabsState('products')}
          style={tabsState === 'products' ? { color: '#618d8e', borderBottom: '1px solid #618d8e' } : {}}
        >
          Products
        </ProductsNavButton>
        <ProductsNavButton
          onClick={() => setTabsState('wishlist')}
          style={tabsState === 'wishlist' ? { color: '#618d8e', borderBottom: '1px solid #618d8e' } : {}}
        >
          Wishlist
        </ProductsNavButton>
      </ProductsNavigation>
      {tabsState === 'products' ? (
        <ProductsListWrapper>
          {products.length === 0 ? (
            <ProductsLoadingMsg>No products yet</ProductsLoadingMsg>
          ) : (
            <>
              <PageButtonPrev onClick={() => prevPageClickHandler(itemsPerPage, firstProduct, setFirstProduct)}>&lt;</PageButtonPrev>
              {productsList}
              <PageButtonNext onClick={() => nextPageClickHandler(products, itemsPerPage, firstProduct, setFirstProduct)}>
                &gt;
              </PageButtonNext>
            </>
          )}
        </ProductsListWrapper>
      ) : (
        <ProductsListWrapper>
          {!wishList || wishList.length === 0 ? (
            <ProductsLoadingMsg>No products in wishlist</ProductsLoadingMsg>
          ) : (
            <>
              <PageButtonPrev onClick={() => prevPageClickHandler(itemsPerPage, firstWishlistItem, setFirstWishlistItem)}>
                &lt;
              </PageButtonPrev>
              {wishListProducts}
              <PageButtonNext onClick={() => nextPageClickHandler(wishList, itemsPerPage, firstWishlistItem, setFirstWishlistItem)}>
                &gt;
              </PageButtonNext>
            </>
          )}
        </ProductsListWrapper>
      )}
    </ProductsPageWrapper>
  );
}

export default ProductsPage;
