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
          v-for="(blog, index) in perBlog.slice(0, 2)"
          :key="index"
          :imageSrc="blog.image"
          :title="blog.title"
          :description="blog.description"
          :link="blog.link"
        />
      </div>
      <div class="flex-col justify-between lg:flex hidden lg:w-[40%]">
        <EachBlogSmall
          v-for="(blog, index) in perBlog.slice(2, 5)"
          :key="index"
          :imageSrc="blog.image"
          :title="blog.title"
          :description="blog.description"
          :link="blog.link"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      perBlog: [
        {
          image: "/images/img-big-blog-1.png",
          title:
            "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp imuvåning, och pesask vyfisat.",
          link: "/blog/rikymahendra",
        },
        {
          image: "/images/img-big-blog-2.png",
          title:
            "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp imuvåning, och pesask vyfisat.",
          link: "/blog/rikymahendra",
        },
        {
          image: "/images/img-small-blog-1.png",
          title: "BASAL METABOLIC RATE: WHAT IS IT ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska",
          link: "/blog/rikymahendra",
        },
        {
          image: "/images/img-small-blog-2.png",
          title: "BASAL METABOLIC RATE: WHAT IS IT ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska",
          link: "/blog/rikymahendra",
        },
        {
          image: "/images/img-small-blog-3.png",
          title: "BASAL METABOLIC RATE: WHAT IS IT ...",
          description:
            "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska",
          link: "/blog/rikymahendra",
        },
      ],
    };
  },
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
};
</script>
