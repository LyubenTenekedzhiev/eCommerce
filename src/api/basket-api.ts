import { ProductInterface } from '../interfaces/product';

const API = 'https://senteca-task-2-n1bnqmusylux.runkit.sh';

export const getBasketAPI = async () => {
  try {
    const resp = await fetch(`${API}/basket`);
    const data = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const addToBasketAPI = async (item: ProductInterface) => {
  try {
    const resp = await fetch(`${API}/basket/${item.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });

    return resp;
  } catch (e) {
    console.error(e);
  }
};

export const removeFromBasketAPI = async (id: number) => {
  try {
    const resp = await fetch(`${API}/basket/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    });

    return resp;
  } catch (e) {
    console.error(e);
  }
};

export const increaseQuantityAPI = async (item: ProductInterface) => {
  try {
    const resp = await fetch(`${API}/basket/${item.id}/increase`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': API,
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET, PATCH',
      },
      body: JSON.stringify(item),
    });

    return resp;
  } catch (e) {
    console.error(e);
  }
};
