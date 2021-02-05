<template>
  <li>
    <h3>{{ brand.toUpperCase() }}</h3>
    <img :src="imageUrl" :alt="brand + '_cg'">
    <h4>{{ title }}</h4>
    <div class="price-rating">
      <p class="price">${{ price }}</p>
      <span class="rating">{{ productRating }}</span>
    </div>
    <div class="actions">
      <base-button link :to="productDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>

export default {
  props: ['_id', 'title', 'imageUrl', 'brand', 'rating', 'price'],
  computed: {
    productRating() {
      return '⭐'.repeat(this.rating);
    },
    productDetailsLink() {
      return `${this.$route.path}/${this._id}`;
    }
  }
}
</script>

<style scoped>
li {
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
  align-self: flex-end;
}
</style>