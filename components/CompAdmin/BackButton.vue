<template>
  <NuxtLink
    :to="`/admin/${link}`"
    class="cursor-pointer flex gap-2 hover:scale-x-95 transition-all mb-7"
  >
    <Icon
      name="i-heroicons-arrow-left"
      class="h-8 w-8 stroke-0 fill-none opacity-90"
    />
    <span class="text-2xl font-bold">{{ linkTitle }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  link: {
    type: String,
  },
  linkTitle: {
    type: String,
  },
});
</script>
