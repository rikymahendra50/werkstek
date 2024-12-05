import { AuthCredential } from "@/types";
export default defineNuxtPlugin({
  name: "01.auth-base",
  enforce: "pre",
  async setup(nuxtApp) {
    const credential = useCookie<AuthCredential | null>("auth-token", {
      expires: new Date(Date.now() + 12096e5), // 2 weeks from now
      sameSite: "lax",
      path: "/",
      watch: true,
    });

    addRouteMiddleware("guest", async () => {
      if (credential.value?.token) {
        return await navigateTo("/admin");
      }
    });

    addRouteMiddleware("auth", async () => {
      if (!credential.value?.token) {
        return await navigateTo("/admin/sign-in");
      }
    });

    const setCredential = (credentialProperty: Required<AuthCredential>) => {
      credential.value = credentialProperty;

      console.log("ini credential" + credential.value.token);
      console.log("ini dari credentialProperty" + credentialProperty.token);
    };

    const clearCredential = async () => {
      if (process.client) {
        useCookie("auth-token").value = null;
        window.location.replace("/admin/sign-in");
      }
    };

    return {
      provide: {
        clearCredential,
        setCredential,
      },
    };
  },
});
