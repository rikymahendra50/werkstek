<template>
  <div class="border-r bg-white">
    <div class="flex h-full max-h-screen flex-col gap-4">
      <div class="flex h-[60px] items-center border-b px-6 justify-between">
        <NuxtLink
          to="/admin"
          class="flex items-center justify-center gap-2 font-semibold my-10"
        >
          <img
            src="/images/werstek-logo-secondary.png"
            alt="image-logo-secondary"
            class="w-[170px] ml-6"
          />
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
      <div class="flex-1 py-2 bg-white">
        <nav class="grid items-start px-4 text-[12px] font-medium">
          <!-- Home -->
          <NuxtLink
            to="/admin"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin'),
            }"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Profile
          </NuxtLink>
          <NuxtLink
            to="/admin/admin-list"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/admin-list'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/admin-list'),
            }"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Admin List
          </NuxtLink>
          <NuxtLink
            to="/admin/onze-locaties"
            :class="{
              'bg-transparent text-black hover:bg-gray-100': !isRouteActive(
                '/admin/onze-locaties'
              ),
              'bg-black text-black hover:bg-opacity-30': isRouteActive(
                '/admin/onze-locaties'
              ),
            }"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              />
            </svg>
            Property
          </NuxtLink>

          <details @click="toggleDropdown">
            <summary
              class="group bg-black cursor-pointer flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all relative"
              :class="{
                'bg-transparent text-black hover:bg-gray-100':
                  !isRouteActive('/admin/onze-vacatures') &&
                  !isRouteActive('/admin/type-vacatures'),
                'bg-gray-200 text-black hover:bg-opacity-30':
                  isRouteActive('/admin/onze-vacatures') ||
                  isRouteActive('/admin/type-vacatures'),
              }"
            >
              <Icon name="solar:suitcase-broken" class="text-black w-5 h-5" />
              <span>Vacancies</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 absolute right-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <ul class="ml-9 grid">
              <li class="mt-1">
                <NuxtLink to="/admin/onze-vacatures" class="w-full">
                  <div
                    class="text-gray-600 hover:text-black transition-all hover:bg-gray-100 pl-2 py-2 rounded-lg"
                    :class="{
                      'bg-transparent text-black hover:bg-gray-100':
                        !isRouteActive('/admin/onze-vacatures'),
                      'bg-gray-200 text-black hover:bg-opacity-30':
                        isRouteActive('/admin/onze-vacatures'),
                    }"
                  >
                    Vacancies List
                  </div>
                </NuxtLink>
              </li>
              <li class="mt-1">
                <NuxtLink to="/admin/type-vacatures" class="w-full">
                  <div
                    class="text-gray-600 hover:text-black transition-all hover:bg-gray-100 pl-2 py-2 rounded-lg"
                    :class="{
                      'bg-transparent text-black hover:bg-gray-100':
                        !isRouteActive('/admin/type-vacatures'),
                      'bg-gray-200 text-black hover:bg-opacity-30':
                        isRouteActive('/admin/type-vacatures'),
                    }"
                  >
                    Vacancies Type
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </details>

          <NuxtLink
            to="/admin/location"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/location'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/location'),
            }"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
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
            to="/admin/level-type"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/level-type'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/level-type'),
            }"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
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
              class="h-5 w-5"
            >
              <path d="M3 3v18h18"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
            Level Type
          </NuxtLink>
          <NuxtLink
            to="/admin/privilages"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/privilages'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/privilages'),
            }"
          >
            <Icon name="streamline:give-gift" class="text-black w-5 h-5" />
            Privilages
          </NuxtLink>
          <NuxtLink
            to="/admin/type"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/type'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/type'),
            }"
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
              class="h-5 w-5"
            >
              <path d="M3 3v18h18"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
            Type
          </NuxtLink>
          <NuxtLink
            to="/admin/facility"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/facility'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/facility'),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
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
            to="/admin/blog"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/blog'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/blog'),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Blog
          </NuxtLink>
          <NuxtLink
            to="/admin/blog-category"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100': !isRouteActive(
                '/admin/blog-category'
              ),
              'bg-black text-black hover:bg-opacity-30': isRouteActive(
                '/admin/blog-category'
              ),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Blog / Community Category
          </NuxtLink>
          <NuxtLink
            to="/admin/author"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/author'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/author'),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Blog / Community Author
          </NuxtLink>
          <NuxtLink
            to="/admin/community"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/community'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/community'),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Community
          </NuxtLink>
          <NuxtLink
            to="/admin/contact"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/contact'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/contact'),
            }"
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
              class="h-5 w-5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Contact
            <!-- <div
              class="whitespace-nowrap border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
            >
              6
            </div> -->
          </NuxtLink>

          <NuxtLink
            to="/admin/newsletter"
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-600 transition-all"
            :class="{
              'bg-transparent text-black hover:bg-gray-100':
                !isRouteActive('/admin/newsletter'),
              'bg-black text-black hover:bg-opacity-30':
                isRouteActive('/admin/newsletter'),
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M1.756 4.568A1.5 1.5 0 0 0 1 5.871V12.5A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5V5.87a1.5 1.5 0 0 0-.756-1.302l-5.5-3.143a1.5 1.5 0 0 0-1.488 0l-5.5 3.143Zm1.82 2.963a.75.75 0 0 0-.653 1.35l4.1 1.98a2.25 2.25 0 0 0 1.955 0l4.1-1.98a.75.75 0 1 0-.653-1.35L8.326 9.51a.75.75 0 0 1-.652 0L3.575 7.53Z"
                clip-rule="evenodd"
              />
            </svg>
            Newsletter
          </NuxtLink>

          <button
            @click="$logout()"
            :disabled="loading"
            class="btn btn-error mt-20"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showDrawer = inject("showTableOrMobileSidebar");
const { loading, transformErrors } = useRequestHelper();
const { $logout } = useAuth();

const route = useRoute();

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const isRouteActive = (route: string) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
};
</script>

<style scoped></style>
