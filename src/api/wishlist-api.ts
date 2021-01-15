import { ProductInterface } from '../interfaces/product';

const API = 'https://senteca-task-2-n1bnqmusylux.runkit.sh';

export const getWishlistAPI = async () => {
  try {
    const resp = await fetch(`${API}/wishlist`);
    const data = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const addToWishlistAPI = async (item: ProductInterface) => {
  try {
    const resp = await fetch(`${API}/wishlist/${item.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });

    return resp;
  } catch (e) {
    console.error(e);
  }
};

export const removeFromWishlistAPI = async (id: number) => {
  try {
    const resp = await fetch(`${API}/wishlist/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    });

    return resp;
  } catch (e) {
    console.error(e);
  }
};
