<template>
  <section class="mx-5 lg:container-custom py-10">
    <div v-if="dontShowTitle">
      <div v-if="!showTitleHeader">
        <div class="pl-3 pb-5 md:pb-10 sm:w-[70%]">
          <h1 class="text-[26px] md:text-[32px] font-bold">
            Lees onze laatste blog’s
          </h1>
          <p class="text-[14px] sm:text-[18px] md:text-[20px] text-[#777]">
            Lorem ipsum dolor sit amet, solor ut adipiscing elit.Lorem ipsum
            dolor sit amet, solor ut adipiscing elit.
          </p>
        </div>
      </div>
      <TitleHeader
        v-else-if="showTitleHeader"
        :title="`Updates & blogs`"
        :secondTitle="`Lees de Werkstek blog`"
        :description="`Op de hoogte blijven van de nieuwste kantoortrends? Op zoek naar tips en tricks voor ondernemers? Lees dan ook onze inspirerende blogs!`"
      />
    </div>
    <div class="flex w-full">
      <div class="flex w-full lg:w-[60%] justify-center">
        <EachBlogBig
          v-for="article in data.data.slice(0, 2)"
          :key="article.id"
          :imageSrc="article.image"
          :title="article.title"
          :description="article.meta"
          :link="`/blog/${article.slug}`"
        />
      </div>
      <div class="flex-col justify-between lg:flex hidden lg:w-[40%]">
        <EachBlogSmall
          v-for="article in data.data.slice(2, 5)"
          :key="article.id"
          :imageSrc="article.image"
          :title="article.title"
          :description="article.meta"
          :link="`/blog/${article.slug}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/articles`, {
  method: "get",
  ...requestOptions,
});

const { dontShowTitle, showTitleHeader } = defineProps({
  dontShowTitle: Boolean,
  showTitleHeader: Boolean,
});
</script>
