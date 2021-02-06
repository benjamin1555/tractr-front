export default {
  async fetchProducts(context, payload) {
    let query = '';

    if (payload) {
      query = formatQuery(payload?.query);
    }

    const response = await fetch(`https://tractr-back.herokuapp.com/products${query}`);
    const data = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to fetch.');
      throw error;
    }

    context.commit('setProducts', data.products);
  },

  async fetchProduct(context, { id }) {
    const response = await fetch(`https://tractr-back.herokuapp.com/products/${id}`);
    const data = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to fetch.');
      throw error;
    }

    context.commit('setProduct', data.product);
  }
};

// Private

const PRICE_MAPPING = [
  {
    price_min: 0,
    price_max: 499
  },
  {
    price_min: 500,
    price_max: 999
  },
  {
    price_min: 1000,
    price_max: 1499
  },
  {
    price_min: 1500,
    price_max: 9999
  }
];

const formatQuery = query => {
  let formattedQuery = '?';

  for (let [k, v] of Object.entries(query)) {
    if (v && k !== 'price') {
      formattedQuery += `${k}=${v}&`;
    }
    if (v && k === 'price') {
      formattedQuery += `price_min=${PRICE_MAPPING[v].price_min}&price_max=${PRICE_MAPPING[v].price_max}&`;
    }
  }

  return formattedQuery.slice(0, -1);
};