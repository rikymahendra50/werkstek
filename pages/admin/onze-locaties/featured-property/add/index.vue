<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-4 lg:px-6 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-5xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-lg md:text-2xl font-bold">
            <CompAdminBackButton
              link="onze-locaties"
              linkTitle="Sort list Property Slider"
            />
          </div>
        </div>
        <CompAdminButtonAddIndex
          name="Sort Property"
          link="onze-locaties/featured-property/add-sortlist"
        />
      </div>
      <VeeForm @submit="onSubmit">
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th class="font-medium">Position</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in sortedSliderData"
                :key="item.id"
              >
                <td
                  class="text-gray-500 text-[12px] font-normal !py-2 md:text-sm"
                >
                  {{ item?.product?.name }}
                </td>
                <td
                  class="text-gray-500 text-[12px] font-normal !py-2 md:text-sm"
                >
                  {{ item?.position }}
                </td>
                <td class="flex items-center gap-3">
                  <div
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                    @click="showModal(index)"
                  >
                    <icon
                      name="i-heroicons-pencil-square"
                      class="cursor-pointer"
                    />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">
                        Edit Position Sort of {{ item?.product?.name }}?
                      </h3>
                      <input
                        :id="item?.product?.name"
                        type="number"
                        placeholder="Type here"
                        class="input input-bordered input-sm w-full max-w-xs my-3"
                        v-model="item.position"
                      />
                      <div class="modal-action">
                        <div
                          @click="
                            addPosition(
                              item?.product?.id,
                              item?.product?.name,
                              item?.position,
                              index
                            )
                          "
                          class="btn btn-outline btn-warning mr-3 text-[12px]"
                        >
                          Edit
                        </div>
                        <div @click="closeModal(index)" class="btn">Close</div>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-end w-full mt-5">
          <CompAdminButtonAddForm
            buttonName="Save Sorting"
            :isLoading="loading"
            :disabled="!hasChanges"
          />
        </div>
      </VeeForm>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Add Featured Property",
});

const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const router = useRouter();
const route = useRoute();
const slug = computed(() => route.params.slug);

const { data: sliderDataFeatured } = useFetch(`/admins/featured-products`, {
  method: "get",
  ...requestOptions,
});

const sortedSliderData = computed(() => {
  return sliderDataFeatured.value?.data
    ?.slice()
    .sort((a, b) => a.position - b.position);
});

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const closeModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.close();
  }
};

const featured_products = ref([]);

function addPosition(id, name, position, index) {
  featured_products.value.push({ position: position, product_id: id });
  closeModal(index);
}

const hasChanges = computed(() => {
  if (featured_products.value.length === 0) {
    return false;
  }
  return true;
});

async function onSubmit(ctx) {
  loading.value = true;

  const { data, error } = await useFetch("/admins/featured-products", {
    method: "POST",
    body: { featured_products: featured_products.value },
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Success Change Sort",
    });
    router.push("/admin/onze-locaties");
  }

  loading.value = false;
}

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
