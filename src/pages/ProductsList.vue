<template>
  <div>
    <section>
      <product-filter></product-filter>
    </section>
    <section>
      <base-card>
        <div v-if="!hasProducts && isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasProducts">
          <product-item
            v-for="product in products"
            :key="product._id"
            v-bind="product"
          ></product-item>
        </ul>
        <h3 v-else>No products found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductFilter from '../components/products/ProductFilter.vue';
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductFilter,
    ProductItem
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'products',
      'hasProducts'
    ])
  },
  methods: {
    ...mapActions([
      'fetchProducts'
    ]),
    async loadProducts() {
      this.isLoading = true;
      try {
        await this.fetchProducts();
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        console.error(err);
      }
    }
  },
  created() {
    this.loadProducts();
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>