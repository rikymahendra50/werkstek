<template>
  <header
    class="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-white px-6"
  >
    <div class="flex items-center justify-between w-[100%] lg:w-[40%] gap-4">
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
        <form class="w-[90%]"></form>
        <button
          class="jikaadaprofile(inline-flex) hidden items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
          type="button"
          id="radix-:r0:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <NuxtLink to="/admin">
            <img
              v-if="$user?.profile_picture"
              :src="$user?.profile_picture"
              width="32"
              height="32"
              alt="Avatar"
              class="rounded-md object-cover"
              style="aspect-ratio: 32 / 32; object-fit: cover"
            />
            <img
              v-else
              src="/images/icon-profile.svg"
              width="32"
              height="32"
              alt="Avatar"
              class="rounded-md object-cover"
              style="aspect-ratio: 32 / 32; object-fit: cover"
            />
            <span class="sr-only">Toggle user menu</span>
          </NuxtLink>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const showDrawer = inject("showTableOrMobileSidebar");

const { $user } = useAuth();
</script>

<style></style>
