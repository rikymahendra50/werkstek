<template>
  <main class="flex-grow overflow-y-auto max-h-[500px]">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Blog</div>
        </div>
        <div>
          <NuxtLink
            to="/admin/community/add"
            class="btn btn-sm h-11 btn-neutral normal-case"
          >
            Add new Community
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Image</th>
                <th class="font-medium">Title</th>
                <th class="font-medium">Meta</th>
                <th class="font-medium">Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in community?.data"
              >
                <td class="max-w-[100px]">
                  <!-- <img :src="item.image" :alt="index" /> -->
                  <label
                    :for="`modal-${item.id}`"
                    class="btn btn-sm btn-outline modal-button"
                    >Images</label
                  >
                  <input
                    type="checkbox"
                    :id="`modal-${item.id}`"
                    class="modal-toggle"
                  />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Images</h3>
                      <img :src="item.image" :alt="index" />
                      <div class="modal-action">
                        <label :for="`modal-${item.id}`" class="btn"
                          >Close</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.title }}
                </td>
                <td class="font-medium max-w-[200px]">{{ item.meta }}</td>
                <td class="font-medium">
                  <NuxtLink
                    :to="`/admin/community/${item.slug}`"
                    class="btn btn-sm btn-outline text-[12px]"
                    >Item Category</NuxtLink
                  >
                </td>
                <td>
                  <div class="flex justify-center items-center gap-4 my-1">
                    <NuxtLink
                      :to="`/admin/community/edit/${item.slug}`"
                      class="m-2"
                    >
                      <icon
                        name="i-heroicons-pencil-square"
                        class="cursor-pointer mr-1"
                      />
                    </NuxtLink>
                    <div class="cursor-pointer m-2" @click="showModal(index)">
                      <icon name="i-heroicons-trash" class="mr-1" />
                    </div>
                    <dialog :id="'my_modal_' + index" class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-xl text-red-500">
                          Warning !
                        </h3>
                        <p class="py-4 text-lg">
                          Are you sure want to delete this called
                          {{ item.name }}?
                        </p>
                        <div class="modal-action">
                          <form method="dialog">
                            <button
                              @click="deleteCommunity(item.slug)"
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
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const { data: community, error } = await useFetch(`/admins/community-blogs`, {
  method: "get",
  ...requestOptions,
});

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteCommunity = async (slug) => {
  loading.value = true;
  await useFetch(`/admins/community-blogs/${slug}`, {
    method: "DELETE",
    ...requestOptions,
  });
  window.location.reload();

  if (error.value) {
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Delete Community Success",
    });
  }
  loading.value = false;
};

useHead({
  title: "Community",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});

const articleData = ref({
  image: "",
  title: "",
  body: "",
  category: "",
  meta: "",
});
</script>

<style scoped>
.overflow-auto {
  max-height: 400px;
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>
