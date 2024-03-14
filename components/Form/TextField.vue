<template>
  <input
    :name="name"
    :id="name"
    :type="type"
    :value="inputValue"
    @input="handleChange"
    @blur="handleBlur"
    :class="className"
    v-bind="$attrs"
  />
  <VeeErrorMessage :name="name" class="form-error-message text-red-600" />
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  type: {
    default: "text",
  },
  modelValue: [String, Number],
  name: {
    type: String,
    required: true,
  },
});

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  syncVModel: true,
});

const className = computed(() => {
  const arr = ["input"];

  if (!meta.touched) {
    return arr;
  }
  if (meta.touched && meta.valid) {
    arr.push("input-success");
  }
  if (!!errorMessage.value) {
    arr.push("input-error");
  }
  return arr.join(" ");
});
</script>
