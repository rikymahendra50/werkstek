import { Role, AuthCredential, AuthUser } from "@/types";

export default function () {
  /**
   * use cookie for auth
   */
  const $credential = useCookie<AuthCredential | null>("auth-token", {
    expires: new Date(Date.now() + 31536e5), // 1 year from now
    sameSite: "lax",
    path: "/",
    watch: true,
  });

  const $user = useState<AuthUser | undefined>("auth-user");
  const $loading = ref<boolean>(false);

  const { requestOptions } = useRequestOptions();

  /**
   * set auth user property s
   */
  function $setAuthUser(user: AuthUser | undefined) {
    $user.value = user;
  }

  async function fetchAuth(url: string) {
    const { data } = await $fetch<{ data: AuthUser }>(url, {
      method: "GET",
      ...requestOptions,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    $setAuthUser(data);
  }

  async function logoutAuth(url: string) {
    await $fetch(url, {
      method: "POST",
      ...requestOptions,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    $credential.value = null;
    if (process.client) {
      window.location.replace("/admin/sign-in");
    }
  }

  /**
   * fetch credential current logged in user
   */
  async function $useFetchAuthProfile() {
    $loading.value = true;
    let url = "/users/profile";
    if ($credential.value?.role === Role.ADMIN) {
      url = "/admins/profile";
    } else if ($credential.value?.role === Role.AGEN) {
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
    if ($credential.value?.role === Role.ADMIN) {
      url = "/admins/logout";
    } else if ($credential.value?.role === Role.AGEN) {
      url = "/agents/logout";
    }
    await logoutAuth(url);
    $loading.value = false;
  }

  const $isAdmin = computed(() => {
    return $credential.value?.role === Role.ADMIN;
  });

  const $isAgen = computed(() => {
    return $credential.value?.role === Role.AGEN;
  });

  const $isUser = computed(() => {
    return $credential.value?.role === Role.USER;
  });

  return {
    $credential,
    $isLogin: !!$credential.value,
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
