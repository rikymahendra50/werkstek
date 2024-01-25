<template>
  <section class="mx-5 lg:container-custom">
    <div v-if="dontShowTitle">
      <div v-if="!showTitleHeader">
        <div class="py-5 sm:w-[70%]">
          <h1 class="text-[26px] md:text-[32px] font-bold">
            Lees onze laatste blog’s
          </h1>
          <p class="text-[14px] sm:text-[18px] md:text-[22px]">
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
        <div class="card mr-5 max-w-[366px] w-[50%]">
          <img :src="perBlog[0].image" alt="image-person1" class="w-full" />
          <h1 class="text-[14px] sm:text-[18px] md:text-[24px] font-medium">
            {{ perBlog[0].title }}
          </h1>
          <p class="font-normal text-[12px] sm:text-[14px] md:text-[18px] py-3">
            {{ perBlog[0].description }}
          </p>
          <ButtonBlog :perBlogLink="perBlog[0].description" v-if="showButton" />
        </div>
        <div class="card max-w-[366px] w-[50%]">
          <img :src="perBlog[1].image" alt="image-person2" class="w-full" />
          <h1 class="text-[14px] sm:text-[18px] md:text-[24px] font-medium">
            {{ perBlog[1].title }}
          </h1>
          <p class="font-normal text-[12px] sm:text-[14px] md:text-[18px] py-3">
            {{ perBlog[1].description }}
          </p>
          <ButtonBlog :perBlogLink="perBlog[1].description" v-if="showButton" />
        </div>
      </div>
      <div class="flex-col justify-between lg:flex hidden lg:w-[40%]">
        <div class="flex">
          <img
            :src="perBlog[2].image"
            alt="image-person2"
            class="max-w-[176px] max-h-[154px] mx-2 w-full"
          />
          <div class="flex-col flex">
            <h1 class="text-[14px] lg:text-[18px] font-bold">
              {{ perBlog[2].title }}
            </h1>
            <p class="text-[12px] lg:text-[14px]">
              {{ perBlog[2].description }}
            </p>
            <ButtonBlog
              :perBlogLink="perBlog[2].description"
              v-if="showButton"
            />
          </div>
        </div>
        <div class="flex">
          <img
            :src="perBlog[3].image"
            alt="image-person2"
            class="max-w-[176px] max-h-[154px] mx-2 w-full"
          />
          <div class="flex-col flex">
            <h1 class="text-[14px] lg:text-[18px] font-bold">
              {{ perBlog[3].title }}
            </h1>
            <p class="text-[12px] lg:text-[14px]">
              {{ perBlog[3].description }}
            </p>
            <ButtonBlog
              :perBlogLink="perBlog[3].description"
              v-if="showButton"
            />
          </div>
        </div>
        <div class="flex">
          <img
            :src="perBlog[4].image"
            alt="image-person2"
            class="max-w-[176px] max-h-[154px] mx-2 w-full"
          />
          <div class="flex-col flex">
            <h1 class="text-[14px] lg:text-[18px] font-bold">
              {{ perBlog[4].title }}
            </h1>
            <p class="text-[12px] lg:text-[14px]">
              {{ perBlog[4].description }}
            </p>
            <ButtonBlog
              :perBlogLink="perBlog[4].description"
              v-if="showButton"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    showTitleHeader: {
      type: Boolean,
      default: false,
    },
    showButton: {
      type: Boolean,
      default: true,
    },
    dontShowTitle: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      perBlog: [
        {
          image: "/images/img-big-blog-1.png",
          title:
            "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp imuvåning, och pesask vyfisat.",
          link: "#",
        },
        {
          image: "/images/img-big-blog-2.png",
          title:
            "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp imuvåning, och pesask vyfisat.",
        },
        {
          image: "/images/img-small-blog-1.png",
          title: "BASAL METABOLIC RATE: WHAT IS IT ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska",
        },
        {
          image: "/images/img-small-blog-2.png",
          title: "BASAL METABOLIC RATE: WHAT IS IT ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska",
        },
        {
          image: "/images/img-small-blog-3.png",
          title: "BASAL METABOLIC RATE: WHAT IS IT ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska",
        },
      ],
    };
  },
};
</script>
