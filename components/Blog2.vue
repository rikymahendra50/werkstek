<template>
  <section class="container-custom">
    <div class="flex flex-col">
      <div
        v-if="ShowTitleCategory"
        class="flex gap-4 lg:gap-6 text-[12px] sm:text-[14px] md:text-[18px] text-[#121416] border-b-2 w-full lg:w-[97%] mt-6 justify-between overflow-auto"
      >
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
        <p>Categorie naam</p>
      </div>
      <div class="flex flex-wrap justify-between mt-10">
        <NuxtLink to="/" class="w-[48%] lg:w-[32%] max-w-[347px] mb-3">
          <img
            src="/images/image-page8-1.png"
            alt="image-page8-1"
            class="max-h-[196px]"
          />
          <h4
            class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5 font-semibold"
          >
            De kracht van samenwerking
          </h4>
          <p class="text-[#777] text-[14px] md:text-[16px] md:leading-9">
            In de snel evoluerende wereld van vandaag, waar flexibiliteit,
            innovatie en samenwerking centraal staan, zijn gedeelde
            kantoorruimtes uitgegroeid tot een [...]
          </p>
        </NuxtLink>
        <div class="w-[48%] lg:w-[32%] mb-3">
          <img src="/images/image-page8-2.png" alt="image-page8-1" />
          <h4 class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5">
            De kracht van samenwerking
          </h4>
          <p class="text-[#777] text-[14px] md:text-[16px] md:leading-9">
            In de snel evoluerende wereld van vandaag, waar flexibiliteit,
            innovatie en samenwerking centraal staan, zijn gedeelde
            kantoorruimtes uitgegroeid tot een [...]
          </p>
        </div>
        <div class="w-[48%] lg:w-[32%] mb-3">
          <img src="/images/image-page8-3.png" alt="image-page8-1" />
          <h4 class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5">
            De kracht van samenwerking
          </h4>
          <p class="text-[#777] text-[14px] md:text-[16px] md:leading-9">
            In de snel evoluerende wereld van vandaag, waar flexibiliteit,
            innovatie en samenwerking centraal staan, zijn gedeelde
            kantoorruimtes uitgegroeid tot een [...]
          </p>
        </div>
        <div class="w-[48%] lg:w-[32%] mb-3">
          <img src="/images/image-page8-4.png" alt="image-page8-1" />
          <h4 class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5">
            De kracht van samenwerking
          </h4>
          <p class="text-[#777] text-[14px] md:text-[16px] md:leading-9">
            In de snel evoluerende wereld van vandaag, waar flexibiliteit,
            innovatie en samenwerking centraal staan, zijn gedeelde
            kantoorruimtes uitgegroeid tot een [...]
          </p>
        </div>
        <div class="w-[48%] lg:w-[32%] mb-3">
          <img src="/images/image-page8-5.png" alt="image-page8-1" />
          <h4 class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5">
            De kracht van samenwerking
          </h4>
          <p class="text-[#777] text-[14px] md:text-[16px] md:leading-9">
            In de snel evoluerende wereld van vandaag, waar flexibiliteit,
            innovatie en samenwerking centraal staan, zijn gedeelde
            kantoorruimtes uitgegroeid tot een [...]
          </p>
        </div>
        <div class="w-[48%] lg:w-[32%] mb-3">
          <img src="/images/image-page8-6.png" alt="image-page8-1" />
          <h4 class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5">
            De kracht van samenwerking
          </h4>
          <p
            class="text-[#777] text-[14px] md:text-[16px] md:leading-9 line-clamp-3"
          >
            In de snel evoluerende wereld van vandaag, waar flexibiliteit,
            innovatie en samenwerking centraal staan, zijn gedeelde
            kantoorruimtes uitgegroeid tot een
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BlogItem v-for="i in 6" :key="i" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ShowTitleCategory: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
