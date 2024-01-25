<template>
  <div class="flex items-center">
    <div class="form-control">
      <label class="cursor-pointer label">
        <input
          type="checkbox"
          checked="checked"
          class="checkbox mr-2 checkbox-sm"
        />
        <p class="text-sm">{{ titleCheckBox }}</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleCheckBox: {
      type: String,
    },
  },
};
</script>
