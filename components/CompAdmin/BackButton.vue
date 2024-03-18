<template>
  <NuxtLink
    :to="`/admin/${link}`"
    class="cursor-pointer flex gap-2 mb-7 transition duration-150 ease-out hover:ease-in items-center"
  >
    <Icon
      name="i-heroicons-arrow-left"
      class="h-6 w-6 stroke-0 fill-none opacity-90"
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
