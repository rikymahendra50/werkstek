<template>
  <div class="main">
    <div class="custom-wrapper pt-3">
      <span class="text-sm font-medium opacity-50">{{ title }}</span>
      <div class="price-input-container">
        <div class="slider-container my-5">
          <div
            class="price-slider"
            :style="{
              left: `${localMaxPriceT * 100}%`,
              right: `${100 - localMaxPriceT * 100}%`,
            }"
          ></div>
        </div>
        <div class="price-input flex justify-between text-sm opacity-50">
          <div class="price-field">
            <span class="min-price">{{ localMinPriceT }} € min</span>
          </div>
          <div class="price-field">
            <span class="max-price">{{ localMaxPriceT }} € max</span>
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
            :min="minRange"
            :max="localMaxPriceT"
            v-model="localMinPriceT"
            :step="10"
          />
        </label>
        <label :for="idInputMax">
          <input
            :id="idInputMax"
            type="range"
            class="max-range"
            :min="localMinPriceT"
            :max="maxRange"
            v-model="localMaxPriceT"
            :step="10"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
    type: [String, Number],
  },
  maxPrice: {
    type: [String, Number],
  },
  minRange: {
    type: Number,
  },
  maxRange: {
    type: Number,
  },
  priceGap: {
    type: Number,
  },
});

const emit = defineEmits([
  "price-change",
  "update:minPrice",
  "update:maxPrice",
]);

const localMinPriceT = computed({
  set(value) {
    emit("update:minPrice", value);
  },
  get() {
    return props.minPrice || props.minRange;
  },
});

const localMaxPriceT = computed({
  set(value) {
    emit("update:maxPrice", value);
  },
  get() {
    return props.maxPrice || props.maxRange;
  },
});

function updateRange() {
  const rangeSlider = document.querySelector(".price-slider");
  const value1 = rangeSlider.parentNode.offsetWidth;
  const maxValue = maxPrice.value;
  const calculatedMaxPrice = Math.min(maxValue, localMaxPriceT.value);

  rangeSlider.style.left = `${(localMinPriceT.value / maxValue) * value1}px`;
  rangeSlider.style.right = `${(1 - calculatedMaxPrice / maxValue) * value1}px`;
}
</script>
