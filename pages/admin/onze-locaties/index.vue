<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-4 lg:px-6 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-5xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-lg md:text-2xl font-bold">Property</div>
        </div>
        <NuxtLink
          :to="`/admin/onze-locaties/featured-property/add`"
          class="btn btn-sm normal-case btn-ghost btn-square"
          ><Icon name="cil:sort-numeric-up" class="text-black"
        /></NuxtLink>
        <CompAdminButtonAddIndex name="Property" link="onze-locaties" />
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in property?.data"
                :key="item.id"
              >
                <td
                  class="text-gray-500 text-[12px] font-normal !py-2 md:text-sm"
                >
                  {{ item.name }}
                </td>
                <td class="flex items-center gap-3">
                  <NuxtLink
                    :to="`/onze-locaties/${item.slug}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                    target="_blank"
                  >
                    <icon name="i-heroicons-eye" class="cursor-pointer" />
                  </NuxtLink>
                  <NuxtLink
                    :to="`/admin/onze-locaties/add-image/${item.slug}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <img
                      src="/images/add-image-admin.svg"
                      alt="add-image-admin"
                      class="w-4"
                    />
                  </NuxtLink>
                  <NuxtLink
                    :to="`/admin/onze-locaties/add-video/${item.slug}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <Icon
                      name="fluent:video-add-24-filled"
                      class="text-black"
                    />
                  </NuxtLink>
                  <NuxtLink
                    :to="`/admin/onze-locaties/edit-locaties/${item.slug}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <icon
                      name="i-heroicons-pencil-square"
                      class="cursor-pointer"
                    />
                  </NuxtLink>
                  <div
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                    @click="showModal(index)"
                  >
                    <icon name="i-heroicons-trash" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg text-red-500">Warning !</h3>
                      <p class="py-4 text-sm">
                        Are you sure want to delete this property called
                        {{ item.name }}?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteProperty(item.slug)"
                            class="btn btn-outline btn-error mr-3 text-[12px]"
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
    :total="property?.meta?.total"
    :per-page="property?.meta?.per_page"
    class="flex justify-center"
  />
</template>

<style>
.scrollBarAdmin::-webkit-scrollbar {
  display: none;
}
</style>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const { $setCredential, credential } = useNuxtApp();

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const {
  data: property,
  error,
  refresh,
} = await useAsyncData("property", () =>
  $fetch(`/admins/products?page=${page.value}&filter[search]=${search.value}`, {
    method: "get",
    Authorization: "Bearer " + credential.value.token,
    Accept: "application/json",
    ...requestOptions,
  })
);

console.log("ini dari credential token", credential.value.token);

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

function replaceWindow() {
  router.replace(
    `/admin/onze-locaties?page=${page.value}&search=${search.value}`
  );
  refresh();
}

onMounted(() => {
  stop();
  if (route.query.page) {
    page.value = route.query.page ?? 1;
  }

  if (route.query.search) {
    search.value = route.query?.search ?? "";
  }
});

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteProperty = async (slug) => {
  loading.value = true;
  await useFetch(`/admins/products/${slug}`, {
    method: "DELETE",
    ...requestOptions,
  });

  if (error.value) {
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Delete Property Success",
    });
    window.location.reload();
  }
  loading.value = false;
};

useHead({
  title: "Admin Property",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
