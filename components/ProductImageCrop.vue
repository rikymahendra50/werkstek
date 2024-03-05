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

          <p>Max image size is 2MB</p>

          <template v-if="imageUrl">
            <VuePictureCropper
              :boxStyle="{
                width: '100%',
                height: '100%',
                backgroundColor: '#f8f8f8',
                margin: 'auto',
              }"
              :img="imageUrl"
              :options="{
                viewMode: 1,
                dragMode: 'move',
                aspectRatio: 4 / 3,
                cropBoxResizable: false,
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high',
                zoomable: false,
              }"
              :presetMode="{
                width: 1000,
                height: 750,
                mode: 'fixedSize',
              }"
            />
          </template>

          <div class="flex justify-between">
            <div>
              <button
                :disabled="loading"
                class="btn btn-neutral"
                type="button"
                @click="cancelCrop"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                :disabled="loading"
                class="btn btn-success"
                type="button"
                @click="crop"
              >
                Crop
              </button>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <div class="space-y-2 border p-2 rounded-lg">
      <div
        v-if="imageReviewUrl"
        class="lg:h-[500px] rounded-lg overflow-hidden bg-gray-100"
      >
        <img
          class="h-full w-full aspect-square object-cover"
          :src="imageReviewUrl"
          alt="review"
        />
      </div>
      <div class="flex flex-row items-center space-x-4">
        <div>
          <button
            type="button"
            class="btn btn-ghost btn-outline normal-case"
            @click="open()"
            v-if="!image"
          >
            <span>
              {{ imageReviewUrl ? "Change Image" : "Upload Image" }}
            </span>
          </button>
        </div>

        <div>
          <p>Max image size is 2MB</p>
          <progress v-if="props.loading" class="progress w-100"></progress>
          <span v-if="imageFileSizeMsg" class="text-error text-sm my-2">
            {{ imageFileSizeMsg }}
          </span>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useFileDialog } from "@vueuse/core";
import VuePictureCropper, { cropper } from "vue-picture-cropper";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  existingimage: {
    type: String,
    default: null,
  },
  modelValue: {
    type: File,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const modalInput = ref(false);

const image = ref(null);

const imageUrl = computed(() => {
  return image.value ? URL.createObjectURL(image.value) : null;
});

const imageFileSizeMsg = ref();

const imageReview = ref();

const imageReviewUrl = computed(() => {
  return imageReview.value
    ? URL.createObjectURL(imageReview.value)
    : props.existingimage ?? null;
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

  imageReview.value = file;
  emit("update:modelValue", file);
  modalInput.value = false;
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
