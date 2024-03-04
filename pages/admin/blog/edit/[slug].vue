<template>
  <section>
    <div class="flex gap-4">
      <NuxtLink to="/admin/blog" class="btn btn-warning btn-outline btn-sm">
        Back
      </NuxtLink>
      <span class="text-2xl font-bold">Edit Blog</span>
    </div>
    <updateAdmin :eachBlog="eachBlog?.data" :categoryBlog="categoryBlog?.data" />
  </section>
</template>

<script setup>
import axios from "axios";
const { axiosRequest } = useAxios();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();
const route = useRoute();
const slug = computed(() => route.params.slug);

const { data: eachBlog, pending: eachBlogPending } = await useFetch(`/admins/articles/${slug.value}`, {
  method: "get",
  ...requestOptions,
});

const { data: categoryBlog, pending: categoryBlogPending } = await useFetch(
  `/admins/article-categories`,
  {
    method: "get",
    ...requestOptions,
  }
);

// const category = categoryBlog.value.data.map((item) => item.name);

useHead({
  title: "Edit Blog",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
