export default {
  products(state) {
    return state.products;
  },

  product(state) {
    return state.product;
  },

  hasProducts(state) {
    return state.products.length > 0;
  }
};