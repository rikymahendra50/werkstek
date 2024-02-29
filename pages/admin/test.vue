<template>
  <input
    type="file"
    ref="fileInput"
    accept="image/*"
    style="display: none"
    @change="handleFileChange"
  />

  <div>
    <VuePictureCropper
      :img="option.img"
      :output-size="option.outputSize"
      :output-type="option.outputType"
      :info="true"
      :full="option.full"
      :can-move="option.canMove"
      :can-move-box="option.canMoveBox"
      :original="option.original"
      :auto-crop="option.autoCrop"
      :auto-crop-width="option.autoCropWidth"
      :auto-crop-height="option.autoCropHeight"
      :center-box="option.centerBox"
      :high="option.high"
      :info-true="option.infoTrue"
      @ready="handleReady"
      @crop="handleCrop"
    ></VuePictureCropper>
    <button @click="openFilePicker">Pilih Gambar</button>
  </div>
</template>

<script>
import VuePictureCropper from "vue-picture-cropper";

export default {
  data() {
    return {
      option: {
        img: "", // the path of your image file
        outputSize: 0.8, // the size of the output image, between 0 and 1
        outputType: "jpeg", // the type of the output image, can be 'jpeg' or 'png'
        full: false, // whether to crop the entire image
        canMove: true, // whether to allow moving the image
        canMoveBox: true, // whether to allow moving the crop box
        original: false, // whether to keep the original aspect ratio
        autoCrop: true, // whether to automatically crop the image
        autoCropWidth: 200, // the width of the automatically cropped image
        autoCropHeight: 200, // the height of the automatically cropped image
        centerBox: true, // whether to center the crop box
        high: true, // whether to use high-resolution mode
        infoTrue: true, // whether to show the crop box info
      },
    };
  },
  methods: {
    handleReady(instance) {
      // do something when the cropper is ready
    },
    handleCrop(data) {
      // do something with the cropped image data
      console.log(data.img); // the cropped image data URL
      console.log(data.info); // the cropped image info
    },
    handleFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.option.img = URL.createObjectURL(file);
      }
    },
  },
};
</script>
