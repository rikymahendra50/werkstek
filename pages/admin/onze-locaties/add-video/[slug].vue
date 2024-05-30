<template>
  <section>
    <CompAdminBackButton
      link="onze-locaties"
      linkTitle="Add Or Edit Video"
      class="w-fit"
    />
    <VeeForm @submit="onSubmit">
      <div class="grid gap-4 relative">
        <div
          class="grid md:grid-cols-12 gap-5 border rounded-2xl py-3 px-4 text-center"
        >
          <div class="md:col-span-6">
            <div class="grid gap-4">
              <h3>Video</h3>
              <hr />
              <div
                class="overflow-hidden rounded-lg relative h-full w-full draggable"
                data-draggable="true"
                v-if="videoPreview"
              >
                <video class="max-h-full md:h-[350px] aspect-video" controls>
                  <source :src="videoPreview" />
                  Your browser does not support HTML video.
                </video>
              </div>
              <div>
                <div
                  class="h-full w-full min-h-[150px] overflow-hidden rounded-lg border border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
                  role="button"
                  @click="clickUpload"
                  v-if="!videoPreview"
                >
                  <label
                    for="fileInput"
                    class="h-full w-full min-h-[150px] overflow-hidden rounded-lg border border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
                    role="button"
                  >
                    <div class="flex flex-col">
                      <div class="flex justify-center">
                        <svg
                          data-v-9c34c54e=""
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          class="icon h-24 w-24 stroke-0 fill-none opacity-90"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 4.5v15m7.5-7.5h-15"
                          ></path>
                        </svg>
                      </div>
                      <input
                        ref="fileInput"
                        type="file"
                        accept="video/mp4,video/x-m4v,video/*"
                        @change="saveToPreviewVideo"
                        style="display: none"
                        name="video"
                      />
                      <span>Add Video</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-5">
            <div class="grid gap-4">
              <h3>Thumbnail</h3>
              <hr />
              <div
                class="overflow-hidden rounded-lg relative h-full w-full draggable"
                data-draggable="true"
                v-if="thumbnailPreview"
              >
                <img
                  :src="thumbnailPreview"
                  alt="video review"
                  class="object-cover md:h-[350px] aspect-video"
                />
              </div>
              <div>
                <div
                  class="h-full w-full min-h-[150px] overflow-hidden rounded-lg border border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
                  role="button"
                  @click="clickUploadThumbnail"
                  v-if="!thumbnailPreview"
                >
                  <label
                    for="fileInput2"
                    class="h-full w-full min-h-[150px] overflow-hidden rounded-lg border border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
                    role="button"
                  >
                    <div class="flex flex-col">
                      <div class="flex justify-center">
                        <svg
                          data-v-9c34c54e=""
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          class="icon h-24 w-24 stroke-0 fill-none opacity-90"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 4.5v15m7.5-7.5h-15"
                          ></path>
                        </svg>
                      </div>
                      <input
                        ref="fileInput2"
                        type="file"
                        name="thumbnail"
                        accept="image/png, image/gif, image/jpeg"
                        @change="saveToPreviewThumbnail"
                        style="display: none"
                      />
                      <span>Add Thumbnail</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-end z-10 p-2">
            <div>
              <button
                v-if="thumbnailPreview"
                class="btn btn-square btn-sm btn-error"
                type="button"
                @click="showModal"
              >
                <svg
                  data-v-9c34c54e=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-6 w-6"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog :id="'my_modal_'" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">Dangers!</h3>
          <p class="py-4 text-sm">
            Are you sure want to delete this video and thumbnail?
          </p>
          <div class="modal-action">
            <form method="dialog">
              <button
                @click="deleteVideo"
                class="btn btn-outline btn-error mr-3 text-[12px]"
              >
                Delete
              </button>
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div class="flex justify-end mt-5"></div>
      <span class="block mb-3"
        >If you made some changes to your images. please save them.</span
      >
      <CompAdminButtonAddForm
        buttonName="Save Videos"
        :isLoading="loading"
        class="w-fit"
        :disabled="
          !selectedVideo ||
          !selectedThumbnail ||
          !videoPreview ||
          !thumbnailPreview
        "
      />
    </VeeForm>
  </section>
</template>

<script setup>
const { axiosRequest } = useAxios();
const { inputVideoSchema } = useSchema();
const { requestOptions } = useRequestOptions();
const { loading, transformErrors } = useRequestHelper();
const router = useRouter();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

useHead({
  title: "Add or Edit Video",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});

const fileInput = ref(null);
const clickUpload = () => {
  fileInput.value.click();
};

const fileInput2 = ref(null);
const clickUploadThumbnail = () => {
  fileInput2.value.click();
};

const { data } = await useFetch(`/admins/products/${slug.value}/videos`, {
  method: "get",
  ...requestOptions,
});

const selectedVideo = ref();
const selectedVideos = ref();
const videoPreview = ref();
const thumbnailPreview = ref();
const selectedThumbnail = ref();

if (data.value.data) {
  selectedVideo.value = data.value.data.video;
  selectedThumbnail.value = data.value.data.thumbnail;
  videoPreview.value = data.value.data.video;
  thumbnailPreview.value = data.value.data.thumbnail;
}

const deleteVideoLocal = (index) => {
  selectedVideo.value = null;
  videoPreview.value = null;
  selectedThumbnail.value = null;
  thumbnailPreview.value = null;
};

// const deleteThumbnail = (index) => {
//   selectedThumbnail.value = null;
//   thumbnailPreview.value = null;
// };

const showModal = () => {
  const modalId = `my_modal_`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const MAX_FILE_SIZE_MB = 2;
const saveToPreviewVideo = (event) => {
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(
        `File ${file.name} too big. Please chose file width maximum ${MAX_FILE_SIZE_MB} MB.`
      );
      return;
    } else {
      videoPreview.value = URL.createObjectURL(file);
      selectedVideo.value = file;
      // StoreProduct();
    }
  }
};

const saveToPreviewThumbnail = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(
        `File ${file.name} too big. Please chose file width maximum ${MAX_FILE_SIZE_MB} MB.`
      );
      return;
    } else {
      thumbnailPreview.value = URL.createObjectURL(file);
      selectedThumbnail.value = file;
      // StoreProduct();
    }
  }
};

async function onSubmit(values, ctx) {
  loading.value = true;

  const formData = new FormData();

  if (selectedVideo.value instanceof File || selectedVideo.value === null) {
    formData.append("video", selectedVideo.value);
  }

  if (
    selectedThumbnail.value instanceof File ||
    selectedThumbnail.value === null
  ) {
    formData.append("thumbnail", selectedThumbnail.value);
  }

  try {
    const response = await axiosRequest.post(
      `/admins/products/${slug.value}/videos`,
      formData
    );

    if (response.status >= 200 && response.status < 300) {
      snackbar.add({
        type: "success",
        text: "Add or Edit Video Success",
      });
      router.push("/admin/onze-locaties");
    }
  } catch (error) {
    if (error?.response?.data?.message) {
      ctx.setErrors(transformErrors(error.response.data.message));
      snackbar.add({
        type: "error",
        text: error.response.data.message ?? "Something went wrong",
      });
    } else {
      snackbar.add({
        type: "error",
        text: "Something went wrong",
      });
    }
  }
  loading.value = false;
}

async function deleteVideo() {
  loading.value = true;

  const { error, data } = await useFetch(
    `/admins/products/${slug.value}/delete-videos`,
    {
      method: "POST",
      ...requestOptions,
    }
  );

  if (error.value) {
    snackbar.add({
      type: "error",
      text: error?.value.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Delete Video Success",
    });
    router.push("/admin/onze-locaties");
  }

  loading.value = false;
}
</script>
