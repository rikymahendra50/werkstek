<template>
  <div class="main w-[80%]">
    <div class="custom-wrapper pt-3">
      <span class="text-sm font-medium opacity-50">{{ title }}</span>
      <div class="price-input-container">
        <div class="slider-container my-5">
          <div
            class="price-slider"
            :style="{
              left: `${(localMinPrice / 100000) * 100}%`,
              right: `${100 - (localMaxPrice / 100000) * 100}%`,
            }"
          ></div>
        </div>
        <div class="price-input flex justify-between text-sm opacity-50">
          <div class="price-field">
            <span class="min-price">€ {{ localMinPrice }} min</span>
          </div>
          <div class="price-field">
            <span class="max-price">€ {{ localMaxPrice }} max</span>
          </div>
        </div>
      </div>

      <!-- Slider -->
      <div class="range-input">
        <label :for="idInputMin">
          <input
            :id="idInputMin"
            type="range"
            class="min-range"
            min="0"
            max="100000"
            v-model="localMinRange"
            step="5000"
          />
        </label>
        <label :for="idInputMax">
          <input
            :id="idInputMax"
            type="range"
            class="max-range"
            min="0"
            max="100000"
            v-model="localMaxRange"
            step="5000"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idInputMin: {
      type: String,
    },
    idInputMax: {
      type: String,
    },
    title: {
      type: String,
    },
    minPrice: {
      type: Number,
    },
    maxPrice: {
      type: Number,
    },
    maxRange: {
      type: Number,
    },
    priceGap: {
      type: Number,
    },
  },
  data() {
    return {
      localMinPrice: this.minPrice,
      localMaxPrice: this.maxPrice,
      localMinRange: this.minPrice,
      localMaxRange: this.maxPrice,
    };
  },
  watch: {
    localMinPrice() {
      this.updateRange();
      this.$emit("price-change", {
        minPrice: this.localMinPrice,
        maxPrice: this.localMaxPrice,
      });
    },
    localMaxPrice() {
      this.updateRange();
      this.$emit("price-change", {
        minPrice: this.localMinPrice,
        maxPrice: this.localMaxPrice,
      });
    },
    localMinRange() {
      this.updatePrice();
    },
    localMaxRange() {
      this.updatePrice();
    },
  },
  methods: {
    updateRange() {
      const rangeSlider = document.querySelector(".price-slider");
      const value1 = rangeSlider.parentNode.offsetWidth;
      rangeSlider.style.left = `${(this.localMinPrice / 1000) * value1}px`;
      rangeSlider.style.right = `${(1 - this.localMaxPrice / 1000) * value1}px`;
    },
    updatePrice() {
      this.localMinPrice = this.localMinRange;
      this.localMaxPrice = this.localMaxRange;
      this.$emit("price-change", {
        minPrice: this.localMinPrice,
        maxPrice: this.localMaxPrice,
      });
    },
  },
};
</script>
