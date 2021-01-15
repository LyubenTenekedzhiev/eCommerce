const API = 'https://senteca-task-2-n1bnqmusylux.runkit.sh';

export const productsAPI = async () => {
  try {
    const resp = await fetch(`${API}/products`);
    const data = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
