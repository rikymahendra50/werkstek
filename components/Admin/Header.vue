<template>
  <header
    class="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-white px-6"
  >
    <div class="flex items-center justify-between w-[100%] md:w-[40%] gap-4">
      <a class="font-semibold" href="#">Werkstek</a
      ><button
        @click="showDrawer = !showDrawer"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <span class="sr-only">Toggle navigation menu</span>
      </button>
    </div>
    <div class="flex-1">
      <div class="hidden lg:flex items-center gap-4">
        <form class="w-[90%]">
          <div class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              class="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              placeholder="Search..."
              type="search"
            />
          </div>
        </form>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
          type="button"
          id="radix-:r0:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <img
            src="/images/author.png"
            width="32"
            height="32"
            alt="Avatar"
            class="rounded-md object-cover"
            style="aspect-ratio: 32 / 32; object-fit: cover"
          /><span class="sr-only">Toggle user menu</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const showDrawer = inject("showTableOrMobileSidebar");
</script>

<style></style>
