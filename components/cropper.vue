<template>
  <ClientOnly>
    <modal v-model="modalInput" class="p-0 rounded-lg w-10/12 max-w-3xl">
      <div class="card card-compact border rounded-lg">
        <div class="card-body space-y-4">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-lg font-bold">Image Crop</h3>
            </div>
            <div></div>
          </div>

          <p>
            Max image size is 2MB
          </p>

          <template v-if="imageUrl">
            <VuePictureCropper :boxStyle="{
              width: '100%',
              height: '100%',
              backgroundColor: '#f8f8f8',
              margin: 'auto',
            }" :img="imageUrl" :options="{
  viewMode: 1,
  dragMode: 'move',
  aspectRatio: 4 / 3,
  cropBoxResizable: false,
  imageSmoothingEnabled: true,
  imageSmoothingQuality: 'high',
  zoomable: false,
}" :presetMode="{
  width: 1000,
  height: 750,
  mode: 'fixedSize',
}" />
          </template>
          <div v-if="imageReviewUrl">
            <img class="h-full w-full aspect-square" :src="imageReviewUrl" alt="review" />
          </div>
          <progress v-if="props.loading" class="progress w-100"></progress>
          <span v-if="imageFileSizeMsg" class="text-error text-sm my-2">
            {{ imageFileSizeMsg }}
          </span>
          <div class="flex justify-between">
            <div>
              <button :disabled="loading" class="btn btn-neutral" type="button" @click="cancelCrop">
                Cancel
              </button>
            </div>
            <div>
              <button :disabled="loading" class="btn btn-success" type="button" @click="crop">
                Crop
              </button>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <div
      class="h-full w-full min-h-[150px] overflow-hidden rounded-lg border border-dashed flex items-center justify-center hover:shadow-md transition-all duration-500"
      role="button" @click="open()" v-if="!image">
      <div class="flex flex-col">
        <div class="flex justify-center">
          <Icon name="i-heroicons-plus" class="h-24 w-24 stroke-0 fill-none opacity-90" />
        </div>

        <span> Add Image </span>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useFileDialog } from "@vueuse/core";
import VuePictureCropper, { cropper } from "vue-picture-cropper";


const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:image", "upload"]);

const modalInput = ref(false);

const image = ref<File | null>(null);

const imageUrl = computed(() => {
  return image.value ? URL.createObjectURL(image.value) : null;
});

const imageFileSizeMsg = ref();

const imageReview = ref<File | null>(null);

const imageReviewUrl = computed(() => {
  return imageReview.value ? URL.createObjectURL(imageReview.value) : null;
});

const { files, open, reset, onChange } = useFileDialog({
  accept: "image/*", // Set to accept only image files
  multiple: false,
});
onChange((files) => {
  if (!files) {
    return;
  }
  // @ts-ignore
  image.value = files[0];
  reset();
  modalInput.value = true;
});

async function crop() {
  imageFileSizeMsg.value = undefined;

  const blob = await cropper
    ?.getBlob({
      height: 750,
      width: 1000,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: "high",
    })
    .then((file) => {
      return file;
    });

  if (!blob) {
    return;
  }

  /**
   * convert the blob file to file
   *
   */
  const file = new File([blob], image.value?.name ?? "cropped.jpeg", {
    type: image.value?.type,
  });

  // check if file is more than 2mb

  if (file.size > 2 * 1024 * 1024) {
    imageFileSizeMsg.value = "File size should not be more than 2mb";
    return;
  }

  imageReview.value = file

  emit("upload", file);
}

watch(
  () => modalInput.value,
  (value) => {
    if (!value) {
      image.value = null;
    }
  }
);

function cancelCrop() {
  modalInput.value = false;
}

defineExpose({
  modalInput,
});
</script>

<style scoped></style>
