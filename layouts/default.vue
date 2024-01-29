<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <NuxtSnackbar />
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
