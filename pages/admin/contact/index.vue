<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Contact</div>
        </div>
      </div>
      <div class="space-y-4">
        <!-- <div class="max-w-sm">
          <Search v-model="search" placeholder="search" />
        </div> -->
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">First Name</th>
                <th class="font-medium">Last Name</th>
                <th class="font-medum">Email</th>
                <th class="font-medium">Subject</th>
                <th class="font-medium">Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in contact?.data"
              >
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.first_name }}
                </td>
                <td class="font-medium">{{ item.last_name }}</td>
                <td class="font-medum">{{ item.email }}</td>
                <td class="font-medium">{{ item.subject }}</td>
                <td
                  class="font-medium max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <NuxtLink :to="`/admin/contact/${item.id}`">
                    {{ item.message }}
                  </NuxtLink>
                </td>
                <td class="flex justify-center items-center gap-4 my-1">
                  <!-- <NuxtLink :to="`/admin/contact/reply/${item.id}`">
                    <button
                      type="button"
                      class="btn btn-sm normal-case btn-ghost btn-square"
                    >
                      <icon name="i-heroicons-chat-bubble-oval-left-ellipsis" />
                    </button>
                  </NuxtLink> -->
                  <span class="text-gray-500 text-sm font-normal !py-1.5">
                    <NuxtLink
                      :to="`/admin/contact/${item.id}`"
                      class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                    >
                      <icon name="i-heroicons-eye" class="cursor-pointer" />
                    </NuxtLink>
                  </span>
                  <div
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                    @click="showModal(index)"
                  >
                    <icon name="i-heroicons-trash" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-xl text-red-500">Warning !</h3>
                      <p class="py-4 text-lg">
                        Are you sure want to delete this item?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteContact(item.id)"
                            class="btn btn-outline btn-error mr-3"
                          >
                            Delete
                          </button>
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <Pagination
    v-model="page"
    :total="contact?.meta?.total"
    :per-page="contact?.meta?.per_page"
    class="flex justify-center"
  />
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const {
  data: contact,
  error,
  refresh,
} = await useAsyncData("contact", () =>
  $fetch(`/admins/contacts?page=${page.value}&filter[search]=${search.value}`, {
    method: "get",
    ...requestOptions,
  })
);

const { start, stop } = useTimeoutFn(() => {
  replaceWindow();
}, 1000);

watch(
  () => page.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      start();
    }
  }
);

watch(
  () => search.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

onMounted(() => {
  stop();
  if (route.query.page) {
    page.value = route.query.page ?? 1;
  }

  if (route.query.search) {
    search.value = route.query?.search ?? "";
  }
});

function replaceWindow() {
  router.replace(`/admin/contact?page=${page.value}&search=${search.value}`);
  refresh();
}

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteContact = async (contactslug) => {
  loading.value = true;
  try {
    await useFetch(`/admins/contacts/${contactslug}`, {
      method: "DELETE",
      ...requestOptions,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};

useHead({
  title: "Contact",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
<style scoped>
.overflow-auto {
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>
