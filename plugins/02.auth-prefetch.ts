export default defineNuxtPlugin({
  name: "02.auth-prefetch",
  enforce: "post", // working on client
  async setup() {
    const { $isLogin, $useFetchAuthProfile } = useAuth();
    if ($isLogin) {
      await $useFetchAuthProfile();
    }
  },
});
