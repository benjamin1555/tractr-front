export default {
  products(state) {
    return state.products;
  },

  hasProducts(state) {
    return state.products.length > 0;
  },

  hasProduct(state) {
    return state.product;
  }
};