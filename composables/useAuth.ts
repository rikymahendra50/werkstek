import { Role, AuthCredential, AuthUser } from "@/types";

export default function () {
  const $credetial = useCookie<AuthCredential | null>("auth-token").value;
  const $user = useState<AuthUser | undefined>("auth-user");
  const $loading = ref<boolean>(false);
  const { $clearCredential } = useNuxtApp();

  /**
   * set auth user property s
   */
  function $setAuthUser(user: AuthUser | undefined) {
    $user.value = user;
  }

  async function fetchAuth(url: string) {
    const { data } = await useCustomFetch(url, {
      method: "GET",
    });
    // @ts-ignore
    const user = data.value?.data as AuthUser;
    $setAuthUser(user);
  }

  async function logoutAuth(url: string) {
    await useCustomFetch(url, {
      method: "POST",
    });
    $clearCredential();
  }

  /**
   * fetch credential current logged in user
   */
  async function $useFetchAuthProfile() {
    $loading.value = true;
    let url = "/users/profile";
    if ($credetial?.role === Role.ADMIN) {
      url = "/admins/profile";
    } else if ($credetial?.role === Role.AGEN) {
      url = "/agents/profile";
    }

    await fetchAuth(url);
    $loading.value = false;
  }

  /**
   * handle logout for all users
   */
  async function $logout() {
    $loading.value = true;

    let url = "/users/logout";
    if ($credetial?.role === Role.ADMIN) {
      url = "/admins/logout";
    } else if ($credetial?.role === Role.AGEN) {
      url = "/agents/logout";
    }
    await logoutAuth(url);
    $loading.value = false;
  }

  const $isAdmin = computed(() => {
    return $credetial?.role === Role.ADMIN;
  });

  const $isAgen = computed(() => {
    return $credetial?.role === Role.AGEN;
  });

  const $isUser = computed(() => {
    return $credetial?.role === Role.USER;
  });

  return {
    $credetial,
    $isLogin: !!$credetial,
    $logout,
    $loading,
    $setAuthUser,
    $user,
    $useFetchAuthProfile,
    $isAdmin,
    $isUser,
    $isAgen,
  };
}
