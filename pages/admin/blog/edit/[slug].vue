<template>
  <section>
    <CompAdminBackButton link="blog" linkTitle="Edit Blog" />
    <updateAdmin
      :eachBlog="eachBlog?.data"
      :categoryBlog="categoryBlog?.data"
    />
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const route = useRoute();
const slug = computed(() => route.params.slug);

const { data: eachBlog, pending: eachBlogPending } = await useFetch(
  `/admins/articles/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

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
