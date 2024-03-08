<template>
  <div>
    <NuxtLink
      :to="`/admin/${link}/add`"
      class="btn btn-sm bg-primary h-11 normal-case text-white hover:text-slate-400"
    >
      Add New {{ name }}
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
});
</script>
