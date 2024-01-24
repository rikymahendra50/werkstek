<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  Navbar,
  Footer,
};
</script>

<style></style>
