import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';

import { BasketListWrapper, BasketHeader, BasketInfoText } from './BasketPageStyles';
import { getBasketAPI, removeFromBasketAPI } from '../../api/basket-api';
import { ProductInterface } from '../../interfaces/product';
import { basketState } from '../../state/basket-state';
import Product from '../Product/Product';
import LoadingMsg from '../UI/LoadingMsg/LoadingMsg';

function BasketPage(): ReactElement {
  const [itemsInBasket, setItemsInBasket] = useRecoilState<any>(basketState);

  if (!itemsInBasket.items || itemsInBasket.items.length === 0) return <LoadingMsg>No Items In Basket</LoadingMsg>;

  return (
    <div>
      <div>
        <BasketHeader>Basket</BasketHeader>
        <div>
          <BasketInfoText>
            <b>Number of items: </b> {itemsInBasket.numOfItems}
          </BasketInfoText>
          <BasketInfoText>
            <b>Total price: </b> {itemsInBasket.total} BGN
          </BasketInfoText>
        </div>
      </div>
      <BasketListWrapper>
        {itemsInBasket &&
          itemsInBasket.items.map((item: ProductInterface) => (
            <Product
              key={item.id}
              removeFromBasket={() => removeFromBasketAPI(item.id).then(() => getBasketAPI().then((res) => setItemsInBasket(res)))}
              product={item}
            />
          ))}
      </BasketListWrapper>
    </div>
  );
}

export default BasketPage;
