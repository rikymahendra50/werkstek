<template>
  <ClientOnly>
    <NuxtLink to="/blogs/example">
      <div
        class="overflow-hidden p-1.5 transition-shadow hover:shadow-md duration-500 rounded-md"
      >
        <div class="h-[250px] w-full">
          <img
            src="/images/image-page8-6.png"
            class="object-cover w-[400px] h-[250px]"
            alt="image-page8-1"
          />
        </div>

        <h4 class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5">
          De kracht van samenwerking
        </h4>
        <p
          class="text-[#777] text-[14px] md:text-[16px] md:leading-9 line-clamp-3"
        >
          In de snel evoluerende wereld van vandaag, waar flexibiliteit,
          innovatie en samenwerking centraal staan, zijn gedeelde kantoorruimtes
          uitgegroeid tot een
        </p>
      </div>
    </NuxtLink>
  </ClientOnly>
</template>

<script setup></script>

<style lang="scss" scoped></style>
