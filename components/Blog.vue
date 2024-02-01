<template>
  <section class="mx-5 lg:container-custom py-10">
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
        <EachBlogBig
          :imageSrc="perBlog[0].image"
          :title="perBlog[0].title"
          :description="perBlog[0].description"
          perBlogLink="/"
        />
        <EachBlogBig
          :imageSrc="perBlog[1].image"
          :title="perBlog[1].title"
          :description="perBlog[1].description"
          perBlogLink="/"
        />
      </div>
      <div class="flex-col justify-between lg:flex hidden lg:w-[40%]">
        <EachBlogSmall
          :imageSrc="perBlog[2].image"
          :title="perBlog[2].title"
          :description="perBlog[2].description"
          :perBlogLink="perBlog[2].description"
          perBlogLink="/"
        />
        <EachBlogSmall
          :imageSrc="perBlog[3].image"
          :title="perBlog[3].title"
          :description="perBlog[3].description"
          :perBlogLink="perBlog[3].description"
          perBlogLink="/"
        />
        <EachBlogSmall
          :imageSrc="perBlog[4].image"
          :title="perBlog[4].title"
          :description="perBlog[4].description"
          :perBlogLink="perBlog[4].description"
          perBlogLink="/"
        />
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
          link: "/",
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
