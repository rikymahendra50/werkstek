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
            <NuxtLink to="/">
              <Werkstek />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/onze-vacaturies"
              class="navlink"
              :class="{ active: isRouteActive('/onze-vacaturies') }"
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
          </li>
          <!-- ini -->
          <li class="dropdown">
            <span
              tabindex="0"
              class="bg-transparent border-none text-white font-thin hover:bg-transparent cursor-pointer navlink"
              :class="{ active: isUpdateActive() }"
            >
              Werkstek Update
            </span>
            <ul
              tabindex="0"
              class="ml-[-20px] dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-40 text-black"
            >
              <li class="text-sm">
                <NuxtLink
                  to="/blog"
                  :class="{ active: isRouteActive('/blog') }"
                >
                  Werkstek Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/onze-vacaturies"
                  :class="{ active: isRouteActive('/onze-vacaturies') }"
                >
                  Westek Vacatures
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/werkstek-community"
                  :class="{ active: isRouteActive('/werkstek-community') }"
                >
                  Werkstek Community
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink
              to="/faq"
              class="pr-1 navlink"
              :class="{ active: isRouteActive('/faq') }"
              >FAQ</NuxtLink
            >
          </li>
        </ul>
        <ButtonSM
          buttonLink="/contact"
          buttonTitle="Contact opnemen"
          class="hover:bg-slate-50 xl:p-2"
        />
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
          <NuxtLink to="/">
            <Werkstek />
          </NuxtLink>
        </span>
        <ul class="divide-y font-sans">
          <li class="cursor-pointer">
            <NuxtLink
              to="/onze-vacaturies"
              @click="isOpen = false"
              class="my-4 inline-block"
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
          <li class="cursor-pointer dropdown">
            <div
              tabindex="1"
              class="bg-transparent border-none my-4 inline-block font-thin cursor-pointer"
            >
              Werkstek Update
            </div>
            <ul
              tabindex="1"
              class="ml-[-20px] dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-40 text-black"
            >
              <li class="text-sm">
                <NuxtLink to="/blog" @click="isOpen = false">
                  Werkstek Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/onze-vacaturies" @click="isOpen = false">
                  Werstek Vacatures
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/werkstek-community"
                  :class="{ active: isRouteActive('/werkstek-community') }"
                >
                  Werkstek Community
                </NuxtLink>
              </li>
            </ul>
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
    isUpdateActive() {
      return (
        this.$route.path.startsWith("/blog") ||
        this.$route.path.startsWith("/werkstek-vacaturies") ||
        this.$route.path.startsWith("/werkstek-community")
      );
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
