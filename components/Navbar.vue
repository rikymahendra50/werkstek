<template>
  <nav class="w-full z-50 top-0 fixed">
    <div
      class="flex items-center justify-between w-full relative bg-white container-custom py-5"
    >
      <!-- Header logo -->
      <!-- Mobile toggle -->
      <div class="lg:hidden flex">
        <button name="toggle" @click="drawer">
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
          class="flex items-center md:gap-1 bg-primary p-1 rounded-full text-tertiary md:w-[77%]"
        >
          <li class="bg-white rounded-full">
            <NuxtLink to="/">
              <Werkstek />
            </NuxtLink>
          </li>
          <div class="flex justify-evenly items-center w-full font-medium">
            <li class="text-sm">
              <NuxtLink
                to="/onze-locaties"
                class="navlink"
                :class="{ active: isRouteActive('/onze-locaties') }"
                >Onze locaties</NuxtLink
              >
            </li>
            <li class="text-sm">
              <NuxtLink
                to="/voor-verhuurders"
                class="navlink"
                :class="{ active: isRouteActive('/voor-verhuurders') }"
                >Verhuur</NuxtLink
              >
            </li>
            <!-- test  -->
            <li class="relative">
              <span
                class="bg-transparent border-none text-white font-thin hover:bg-transparent cursor-pointer navlink text-sm"
                :class="{ active: isUpdateActive2() }"
                @click="showDropdownOver"
              >
                Over werkstek
              </span>
              <ul
                v-if="isDropdownOpen"
                class="rounded-xl bg-black z-[1] shadow text-white text-sm mt-5 w-[200px] absolute right-[-55px]"
                ref="target"
              >
                <li class="text-sm hover:text-primary group hover:rounded-t-xl">
                  <NuxtLink
                    @click="isDropdownOpen = false"
                    to="/over-werkstek"
                    class="rounded-none w-full flex justify-between items-center px-4 py-3"
                    :class="{ active: isRouteActive('/over-werkstek') }"
                    activeClass="bg-black text-primary rounded-t-xl"
                  >
                    Over Werkstek
                    <div
                      class="group-hover:bg-primary rounded-full w-5 h-5 flex items-center justify-center pr-[3px]"
                      :class="{
                        'text-black bg-white rounded-full':
                          !isRouteActive('/over-werkstek'),
                        'bg-primary rounded-full':
                          isRouteActive('/over-werkstek'),
                      }"
                    >
                      <Icon
                        name="fluent:ios-arrow-24-filled"
                        class="rotate-180"
                        :class="{
                          'text-black': !isRouteActive('/over-werkstek'),
                          'bg-primary rounded-full text-black':
                            isRouteActive('/over-werkstek'),
                        }"
                      />
                    </div>
                  </NuxtLink>
                </li>
                <li class="text-sm hover:text-primary hover:rounded-b-xl group">
                  <NuxtLink
                    @click="isDropdownOpen = false"
                    to="/onze-vacatures"
                    class="rounded-none w-full flex justify-between items-center px-4 py-3"
                    :class="{ active: isRouteActive('/onze-vacatures') }"
                    activeClass="bg-black text-primary rounded-b-xl"
                  >
                    Onze Vacatures
                    <div
                      class="group-hover:bg-primary rounded-full w-5 h-5 flex items-center justify-center pr-[3px]"
                      :class="{
                        'text-black bg-white rounded-full':
                          !isRouteActive('/onze-vacatures'),
                        'bg-primary rounded-full':
                          isRouteActive('/onze-vacatures'),
                      }"
                    >
                      <Icon
                        name="fluent:ios-arrow-24-filled"
                        class="rotate-180"
                        :class="{
                          'text-black': !isRouteActive('/onze-vacatures'),
                          'bg-primary rounded-full text-black':
                            isRouteActive('/onze-vacatures'),
                        }"
                      />
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <!-- end test -->
            <li class="text-sm">
              <NuxtLink
                to="/blog"
                class="navlink"
                :class="{ active: isRouteActive('/blog') }"
                >Blog</NuxtLink
              >
            </li>
            <li class="text-sm">
              <NuxtLink
                to="/werkstek-community"
                class="navlink"
                :class="{ active: isRouteActive('/werkstek-community') }"
                >Community</NuxtLink
              >
            </li>
          </div>
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
        <ul class="divide-y font-sans text-m">
          <li class="cursor-pointer">
            <NuxtLink
              to="/voor-verhuurders"
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
          <li class="cursor-pointer dropdown w-full">
            <details class="dropdown">
              <summary
                tabindex="1"
                class="bg-transparent border-none my-4 font-thin cursor-pointer gap-2 flex items-center"
              >
                <span>Over Werkstek</span>
                <Icon
                  name="radix-icons:triangle-up"
                  class="text-primary rotate-180 w-7 h-7"
                />
              </summary>
              <ul
                tabindex="1"
                class="ml-[-20px] dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-sm text-black"
              >
                <li class="text-sm">
                  <NuxtLink to="/over-werkstek" @click="isOpen = false">
                    Over Werkstek
                  </NuxtLink>
                </li>
                <hr />
                <li class="text-sm">
                  <NuxtLink to="/onze-vacatures" @click="isOpen = false">
                    Werstek Vacatures
                  </NuxtLink>
                </li>
              </ul>
            </details>
          </li>
          <li class="cursor-pointer">
            <NuxtLink
              to="/blog"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Blog</NuxtLink
            >
          </li>
          <li class="cursor-pointer">
            <NuxtLink
              to="/werkstek-community"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Community</NuxtLink
            >
          </li>
          <!-- <li class="cursor-pointer dropdown w-full">
            <div
              tabindex="1"
              class="bg-transparent border-none my-4 inline-block font-thin cursor-pointer"
            >
              Werkstek Update
            </div>
            <ul
              tabindex="1"
              class="ml-[-20px] dropdown-content z-[1] menu p-1 w-full shadow bg-base-100 rounded-sm text-black"
            >
              <li class="text-sm">
                <NuxtLink to="/blog" @click="isOpen = false">
                  Werkstek Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/onze-vacatures" @click="isOpen = false">
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
          </li> -->
          <li class="cursor-pointer">
            <!-- <NuxtLink
              to="/faq"
              @click="isOpen = false"
              class="my-4 inline-block"
              >FAQ</NuxtLink
            > -->
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
import { onClickOutside } from "@vueuse/core";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  setup() {
    const isDropdownOpen = ref(false);
    const target = ref(null);
    onClickOutside(target, (event) => (isDropdownOpen.value = false));
    return {
      isDropdownOpen,
      target,
      onClickOutside,
    };
  },
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
    showDropdownOver() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    drawer() {
      this.isOpen = !this.isOpen;
    },
    isUpdateActive() {
      return (
        this.$route.path.startsWith("/blog") ||
        this.$route.path.startsWith("/werkstek-community")
      );
    },
    isUpdateActive2() {
      return (
        this.$route.path.startsWith("/onze-vacatures") ||
        this.$route.path.startsWith("/over-werkstek")
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
