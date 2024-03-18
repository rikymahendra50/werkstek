import { defineNuxtPlugin } from "#app";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDlXDm2XgaaHSltV5byiQHe9P4HFWtZgOo",
      libraries: "places",
    },
  });
});
