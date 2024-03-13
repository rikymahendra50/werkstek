<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Category Blog</div>
        </div>
        <CompAdminButtonAddIndex name="Category Blog" link="blog-category" />
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in categoryBlog?.data"
              >
                <td class="max-w-[100px]">{{ item.name }}</td>
                <td>
                  <div class="flex justify-center items-center gap-4 my-1">
                    <NuxtLink
                      :to="`/admin/blog-category/edit/${item.slug}`"
                      class="m-2 btn btn-sm normal-case btn-ghost btn-square"
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
                        <h3 class="font-bold text-xl text-red-500">
                          Warning !
                        </h3>
                        <p class="py-4 text-lg">
                          Are you sure want to delete this category blog
                          {{ item.name }}?
                        </p>
                        <div class="modal-action">
                          <form method="dialog">
                            <button
                              @click="deleteCategoryBlog(item.slug)"
                              class="btn btn-outline btn-error mr-3"
                            >
                              Delete
                            </button>
                            <button class="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
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
    :total="categoryBlog?.meta?.total"
    :per-page="categoryBlog?.meta?.per_page"
    class="flex justify-center"
  />
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const {
  data: categoryBlog,
  error,
  refresh,
} = await useAsyncData("categoryBlog", () =>
  $fetch(
    `/admins/article-categories?page=${page.value}&filter[search]=${search.value}`,
    {
      method: "get",
      ...requestOptions,
    }
  )
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

function replaceWindow() {
  router.replace(
    `/admin/blog-category?page=${page.value}&search=${search.value}`
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

const deleteCategoryBlog = async (slug) => {
  loading.value = true;
  const { error } = await useFetch(`/admins/article-categories/${slug}`, {
    method: "delete",
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
      text: "Delete Blog Category Success",
    });
    window.location.reload();
  }
  loading.value = false;
};

useHead({
  title: "Blog Category",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
