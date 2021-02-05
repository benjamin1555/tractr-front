<template>
  <div>
    <base-card>
      <h3>Filter Products:</h3>
      <form @submit.prevent="filterProducts">
        <div class="form-control">
          <label for="brand">Brand:</label>
          <select name="brand" id="brand" v-model="brand">
            <option value="" selected>-- Filter Brand --</option>
            <option value="asus">Asus</option>
            <option value="evga">Evga</option>
            <option value="msi">Msi</option>
            <option value="pny">Pny</option>
            <option value="sapphire">Sapphire</option>
            <option value="zotac">Zotac</option>
          </select>
        </div>

        <div class="form-control">
          <label for="price">Price:</label>
          <select name="price" id="price" v-model="price">
            <option value="" selected>-- Filter Price --</option>
            <option value="0">Less than $500</option>
            <option value="1">Between $500 and $999</option>
            <option value="2">Between $1000 ad $1499</option>
            <option value="3">More than $1500</option>
          </select>
        </div>

        <div class="form-control">
          <label for="memory">Memory (GB):</label>
          <input type="number" name="memory" id="memory" min="0" max="48" placeholder="memory" v-model="memory">
        </div>

        <div class="form-control">
          <label for="rating">Rating:</label>
          <select name="rating" id="rating" v-model="rating">
            <option value="" selected>-- Filter Rating --</option>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          </select>
        </div>

        <base-button type="submit">Apply Filters</base-button>
        <base-button mode="outline" @click="removeFilters">Remove Filters</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      brand: '',
      price: '',
      rating: '',
      memory: ''
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    removeFilters() {
      this.brand = '';
      this.price = '';
      this.rating = '';
      this.memory = '';
    },
    async filterProducts() {
      const query = {
        brand: this.brand,
        price: this.price,
        rating: this.rating,
        memory: this.memory
      }

      try {
        await this.fetchProducts({ query });
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 0;
}

form {
  display: flex;
  flex-wrap: wrap;
}

.form-control {
  flex-basis: 50%;
  padding: 1rem;
}

select, input {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 100%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
}
</style>