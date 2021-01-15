import { ProductInterface } from './product';

export interface BasketInterface {
  total: number;
  numOfItems: 1;
  items: (ProductInterface & { quantity: number })[];
}
