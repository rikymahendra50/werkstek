<template>
  <!-- <div class="flex justify-start items-center">
    <input type="checkbox" :id="titleCheckBox" class="mr-2 pt-[0.7px]" />
    <label :for="titleCheckBox" class="cursor-pointer">{{
      titleCheckBox
    }}</label>
  </div> -->
  <!-- <input
    type="checkbox"
    v-model="writeableComputed"
    :value="eachValue"
    class="mr-2 pt-[0.07px]"
  />
</template>

<style scoped>
input[type="checkbox"] {
  appearance: none;
  min-width: 24px;
  height: 24px;
  display: flex;
  border: 1px solid theme("colors.primary");
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
  background-color: theme("colors.primary");
}
input[type="checkbox"]:checked:after {
  display: block;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  modelValue: Boolean;
  eachValue: String;
}>();

const emit = defineEmits(["update:modelValue"]);

const writeableComputed = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script> -->
</template>
