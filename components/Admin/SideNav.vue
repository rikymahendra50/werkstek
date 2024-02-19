<template>
  <div class="border-r bg-white">
    <div class="flex h-full max-h-screen flex-col gap-4">
      <div class="flex h-[60px] items-center border-b px-6 justify-between">
        <NuxtLink to="/admin" class="flex items-center gap-2 font-semibold">
          <Werkstek />
        </NuxtLink>
        <div class="block lg:hidden">
          <button
            type="button"
            @click="showDrawer = false"
            class="btn btn-square btn-sm"
          >
            <icon name="i-heroicons-x-mark" />
            <span class="sr-only">Toggle notifications</span>
          </button>
        </div>
      </div>
      <div class="flex-1 overflow-auto py-2">
        <nav class="grid items-start px-4 text-sm font-medium">
          <!-- Home -->
          <NuxtLink
            to="/admin"
            :class="{
              'bg-red-500 text-white': isHomeActive,
              'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50':
                !isHomeActive,
            }"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50 border-2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </NuxtLink>
          <NuxtLink
            to="/admin/location"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-opacity-25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Location
          </NuxtLink>
          <NuxtLink
            to="/admin/contact"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-opacity-25"
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
              class="h-4 w-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Contact
            <div
              class="whitespace-nowrap border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
            >
              6
            </div>
          </NuxtLink>
          <NuxtLink
            to="/admin/Category"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-opacity-25"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="M3 3v18h18"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
            Category
          </NuxtLink>
          <NuxtLink
            to="/admin/Facility"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-opacity-25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              />
            </svg>
            Facility
          </NuxtLink>
          <NuxtLink
            to="/admin/article"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-opacity-25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Article
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-opacity-25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Article Copy
          </NuxtLink>
          <button @click="$logout()" class="btn btn-error mt-20">Logout</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showDrawer = inject("showTableOrMobileSidebar");
const { $logout } = useAuth();

const route = useRoute();
const isHomeActive = route.path === "/";
</script>

<style scoped></style>
