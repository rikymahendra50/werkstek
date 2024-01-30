<template>
  <div class="flex justify-start items-center">
    <input type="checkbox" :id="titleCheckBox" class="mr-2 pt-[0.7px]" />
    <label :for="titleCheckBox" class="cursor-pointer">{{
      titleCheckBox
    }}</label>
  </div>
</template>

<style>
input[type="checkbox"] {
  appearance: none;
  width: 24px;
  height: 24px;
  display: flex;
  border: 1px solid theme("colors.primary1");
  border-radius: 0.5em;
  cursor: pointer;
  outline: none;
  cursor: pointer;
  justify-content: center;
}

input[type="checkbox"]:after {
  content: url("/images/tick.svg");
  color: white;
  display: none;
  font-weight: white;
}

input[type="checkbox"]:checked {
  background-color: theme("colors.primary1");
}
input[type="checkbox"]:checked:after {
  display: block;
}
</style>

<script>
export default {
  props: {
    titleCheckBox: {
      type: String,
      required: false,
    },
  },
};
</script>
