<template>
  <div class="max-w-[400px] my-4">
    <span class="text-base mt-3 opacity-50">{{ titleSliderRange }}</span>
    <div class="range-slider">
      <div class="range-fill"></div>
      <!-- min -->
      <input
        type="range"
        class="min-price"
        value="100"
        :min="minPriceMin"
        :max="minPriceMax"
        step="10"
      />
      <!-- max -->
      <input
        type="range"
        class="max-price"
        value="400"
        :min="maxPriceMin"
        :max="maxPriceMax"
        step="10"
      />
    </div>
    <div class="price-content w-[80%]">
      <span id="min-value text-[14px] opacity-50">€{{ minValue }}</span>
      <span id="max-value text-[14px] opacity-50">€{{ maxValue }}</span>
    </div>
  </div>
</template>

<style>
.price-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.range-slider {
  width: 80%;
  position: relative;
  margin: 15px 0 30px 0;
}

.range-fill {
  height: 6px;
  background-color: theme("colors.primary");
  position: absolute;
  z-index: 1;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  background: transparent;
  position: absolute;
  left: 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: orange;
  cursor: pointer;
  margin-top: -5px;
  position: relative;
  z-index: 1;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: #e8e8e8;
  border-radius: 3px;
  border: none;
}
</style>

<script>
export default {
  props: {
    titleSliderRange: {
      type: String,
      default: true,
    },
    minPriceMin: {
      type: Number,
      default: 10,
    },
    minPriceMax: {
      type: Number,
      default: 500,
    },
    maxPriceMin: {
      type: Number,
      default: 10,
    },
    maxPriceMax: {
      type: Number,
      default: 500,
    },
    minValue: {
      type: Number,
      default: 100,
    },
    maxValue: {
      type: Number,
      default: 1000,
    },
  },
};
</script>
