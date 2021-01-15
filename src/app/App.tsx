import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import ProductsPage from '../components/ProductsPage/ProductsPage';
import BasketPage from '../components/BasketPage/BasketPage';
import { GlobalStyle, AppWrapper, AppHeader, AppHeaderTitle, AppHeaderNavLinks } from './AppStyles';
import { productsAPI } from '../api/products-api';
import { getBasketAPI } from '../api/basket-api';
import { getWishlistAPI } from '../api/wishlist-api';
import { productsState } from '../state/products-state';
import { basketState } from '../state/basket-state';
import { wishlistState } from '../state/wishlist-state';

function App() {
  const setBasket = useSetRecoilState<any>(basketState);
  const setProducts = useSetRecoilState<any>(productsState);
  const setWishlist = useSetRecoilState<any>(wishlistState);

  useEffect(() => {
    productsAPI().then((res) => setProducts(res));
    getBasketAPI().then((res) => setBasket(res));
    getWishlistAPI().then((res) => setWishlist(res));
  }, []);

  return (
    <AppWrapper>
      <GlobalStyle />
      <AppHeader>
        <AppHeaderTitle>Ali Express</AppHeaderTitle>
        <div>
          <AppHeaderNavLinks to='/products'>Products</AppHeaderNavLinks>
          <AppHeaderNavLinks to='/basket'>Basket</AppHeaderNavLinks>
        </div>
      </AppHeader>
      <Switch>
        <Route path='/products' exact component={ProductsPage} />
        <Route path='/basket' exact component={BasketPage} />
        <Redirect to='/products' exact />
      </Switch>
    </AppWrapper>
  );
}

export default App;
