<template>
    <nav class="w-full z-50 shadow-md top-0">
      <div class="flex items-center justify-between h-[86px] font-medium px-5 lg:px-16 w-full relative bg-white">
  
        <!-- Header logo -->
        <div>
          <Werkstek/>
        </div>
  
        <!-- Mobile toggle -->
        <div class="lg:hidden flex">
          <button name="toggle" @click="drawer">
            <svg 
              class="h-8 w-8 fill-current text-black"
              fill="none" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="2" 
              viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
  
        <!-- Navbar -->
        <div class="hidden lg:block">
          <ul class="flex space-x-5 text-sm lg:text-lg font-sans items-center">
            <li><a href="#" class="border-b-2 border-[#F0912D] pb-1">Verhuur</a></li>
            <li><a href="#" class="">Onze locaties</a></li>
            <li class="relative group flex">
                <NuxtLink to="/Over wekstek">Over wekstek</NuxtLink>
                    <ul class="absolute top-5 hidden group-hover:block bg-[#F0912D] shadow-lg py-1 mt-2 rounded-md w-full text-white">
                        <li><NuxtLink to="/submenu1" class="px-3">Submenu 1</NuxtLink></li>
                        <li><NuxtLink to="/submenu2" class="px-3">Submenu 2</NuxtLink></li>
                    </ul>
                    <img src="../assets/images/icon-dropdown.svg" alt="icon-dropdown" class="pl-1">
            </li>
            <li><a href="#" class="">Werkstek updates</a></li>
            <li class="h-[56px] bg-[#F0912D] hover:bg-white px-3 py-2 text-white border border-[#F0912D] hover:text-[#F0912D] hover:border-[#F0912D] hover:border hover:box-border font-semibold rounded-[14px] flex items-center cursor-pointer shadow-md"><a href="#">Contact opnemen</a></li>
          </ul>
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
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
              <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>
  
        <!-- Drawer Menu -->
        <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          
          <div class="close">
            <button name="drawer-menu" class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
              <svg 
                class="w-6 h-6"
                fill="none" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
  
          <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
            <Werkstek />
          </span>
  
          <ul class="divide-y font-sans">
            <li class="cursor-pointer"><a href="#" @click="isOpen = false" class="my-4 inline-block">Verhuur</a></li>
            <li class="cursor-pointer"><a href="#" @click="isOpen = false" class="my-4 inline-block">Onze locaties</a></li>
            <li class="cursor-pointer"><a href="#" @click="isOpen = false" class="my-4 inline-block">Over werkstek</a></li>
            <li class="cursor-pointer"><a href="#" @click="isOpen = false" class="my-4 inline-block">Werkstek updates</a></li>
            <li class="cursor-pointer"><a href="#" @click="isOpen = false" class="my-8 w-full text-center font-semibold cta inline-block bg-[#F0912D] hover:bg-white border border-[#F0912D] px-3 py-2 rounded text-white hover:text-[#F0912D]">Contact opnemen</a></li>
          </ul>
  
        </aside>
  
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen;
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      });
    }
  };
  </script>