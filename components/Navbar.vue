<template>
  <nav class="w-full z-50 shadow-md top-0">
    <div
      class="flex items-center justify-between w-full relative bg-white container-custom py-5"
    >
      <!-- Header logo -->

      <!-- Mobile toggle -->
      <div class="lg:hidden flex">
        <button name="toggle" @click="drawer" label="toggle">
          <svg
            class="h-8 w-8 fill-current text-quaternary"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <!-- Navbar -->
      <div class="hidden lg:flex z-[99999] items-center justify-between w-full">
        <ul
          class="flex space-x-5 items-center justify-between md:gap-2 xl:gap-3 pr-10 bg-primary p-1 rounded-full text-tertiary md:w-[78%] xl:w-[80%]"
        >
          <li class="bg-white rounded-full">
            <Werkstek />
          </li>
          <li>
            <NuxtLink
              to="/"
              class="navlink"
              :class="{ active: isRouteActive('/') }"
              >Verhuur</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/onze-locaties"
              class="navlink"
              :class="{ active: isRouteActive('/onze-locaties') }"
              >Onze locaties</NuxtLink
            >
          </li>
          <li
            class="relative group flex z-10 pr-1 pt-1 dropdown dropdown-hover"
          >
            <NuxtLink
              to="/over-werkstek"
              class="navlink"
              tabindex="0"
              :class="{ active: isRouteActive('/over-werkstek') }"
              >Over werkstek</NuxtLink
            >
            <!-- <ul
              tabindex="0"
              class="absolute top-6 py-1 mt-2 w-full dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md"
            >
              <li>
                <NuxtLink to="/" class="px-3 hover:text-primary"
                  >Submenu 1</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="px-3 hover:text-primary"
                  >Submenu 2</NuxtLink
                >
              </li>
            </ul> -->
            <!-- <img
              src="/images/icon-dropdown.svg"
              alt="icon-dropdown"
              class="pl-2 pb-1"
            /> -->
          </li>
          <li>
            <NuxtLink
              to="/blog"
              class="pr-1 navlink"
              :class="{ active: isRouteActive('/blog') }"
              >Werkstek Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/faq"
              class="pr-1 navlink"
              :class="{ active: isRouteActive('/faq') }"
              >FAQ</NuxtLink
            >
          </li>
          <!-- <li
            class="max-w-[172px] 2xl:h-[56px] bg-primary hover:bg-white px-3 py-2 text-white border border-primary hover:text-primary hover:border-primary hover:border hover:box-border font-semibold rounded-[14px] flex items-center cursor-pointer shadow-md"
          >
            <NuxtLink to="/contact" aria-label="contact"
              >Contact opnemen</NuxtLink
            >
          </li> -->
        </ul>
        <!-- <NuxtLink
          to="/contact"
          class="border border-quaternary rounded-full flex items-center gap-1 p-1 lg:px-2 max-h-[64px]"
        >
          <p class="text-sm lg:text-base">Contact opnemen</p>
          <div
            class="rounded-full bg-quaternary text-white flex items-center justify-center"
          >
            <svg
              width="46"
              viewBox="0 0 58 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.0263672"
                width="55"
                height="55"
                rx="27.5"
                fill="black"
              />
              <path
                d="M25.8682 35.6041L34.3755 27.0967L25.8682 18.5894"
                stroke="white"
                stroke-width="2.57812"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </NuxtLink> -->
        <ButtonSM buttonLink="/contact" buttonTitle="Contact opnemen" />
      </div>
      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-quaternary opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            name="drawer-menu"
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
            label="close"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <Werkstek />
        </span>
        <ul class="divide-y font-sans">
          <li class="cursor-pointer">
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block"
              >Verhuur</NuxtLink
            >
          </li>
          <li class="cursor-pointer">
            <NuxtLink
              to="/onze-locaties"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Onze locaties</NuxtLink
            >
          </li>
          <li class="cursor-pointer">
            <NuxtLink
              to="/over-werkstek"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Over werkstek</NuxtLink
            >
          </li>
          <li class="cursor-pointer">
            <NuxtLink
              to="/wekstek-community"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Werkstek updates</NuxtLink
            >
          </li>
          <li class="cursor-pointer">
            <NuxtLink
              to="/faq"
              @click="isOpen = false"
              class="my-4 inline-block"
              >FAQ</NuxtLink
            >
          </li>
          <li class="cursor-pointer">
            <NuxtLink
              to="/contact"
              @click="isOpen = false"
              class="my-8 w-full text-center font-semibold cta inline-block bg-primary hover:bg-white border border-primary px-3 py-2 rounded text-white hover:text-primary"
              >Contact opnemen</NuxtLink
            >
          </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
