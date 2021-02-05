<template>
  <div>
    <base-card>
      <base-button link :to="productsLink" mode="outline">Back to Products</base-button>
      <div v-if="!product && isLoading">
        <base-spinner></base-spinner>
      </div>
      <div class="product-content" v-else-if="product && !isLoading">
        <h3>{{ product.brand.toUpperCase() }}</h3>
        <img :src="product.imageUrl" :alt="product.brand + '_cg'">
        <h4>{{ product.title }}</h4>
        <p class="memory">Memory: {{ product.memory }}GB</p>
        <div class="price-rating">
          <p class="price">${{ product.price }}</p>
          <span class="rating">{{ productRating }}</span>
        </div>
        <div class="actions">
          <base-button>Add to Cart</base-button>
          <base-button mode="outline">Need Advice?</base-button>
        </div>
      </div>
      <div v-else>
        <p>Could not found a product with this ID.</p>
      </div>
    </base-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      id: this.$route.params.id,
      isLoading: false
    };
  },
  computed: {
    ...mapGetters(['product']),
    productsLink() {
      return '/products';
    },
    productRating() {
      return '⭐'.repeat(this.product.rating);
    },
  },
  methods: {
    ...mapActions(['fetchProduct']),
    async loadProduct() {
      this.isLoading = true;

      try {
        await this.fetchProduct({ id: this.id});
      } catch (err) {
        this.$router.replace('/404')
      } finally {
        this.isLoading = false;
      }
    }
  },
  created() {
    this.loadProduct();
  }
};
</script>

<style scoped>
.product-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 5px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
  border-bottom: 1px solid #CCC;
}

h3,
h4 {
  margin: 0.5rem 0;
}

h4 {
  font-size: 1.5rem;
}

div {
  margin: 0.5rem 0;
}

img {
  margin-top: 2rem;
  max-width: 25rem;
}

.memory {
  align-self: flex-start;
}

.price-rating {
  width: 100%;
  padding-right: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.3rem;
  align-self: flex-start;
}

.actions {
  display: flex;
}
</style>