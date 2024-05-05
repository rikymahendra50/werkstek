<template>
  <section>
    <span
      class="bg-tertiary absolute top-0 z-[-99] w-full min-h-[315px] md:min-h-[515px]"
    ></span>
    <div class="lg:container-custom mx-10 flex flex-col py-10 lg:py-20">
      <h1 class="text-primary text-[14px] sm:text-[18px] md:text-[30px]">
        {{ typeArticle }}
      </h1>
      <p
        class="text-[#404040] text-lg sm:text-[26px] md:text-[30px] mb-3 lg:mb-10 mt-3"
      >
        {{ title }}
      </p>
      <div
        class="min-h-[200px] md:min-h-[500px]"
        :style="{
          backgroundImage: `url('${imageSrc}')`,
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>

      <!-- author small screen -->
      <div class="block lg:hidden my-3 min-[400px]:my-5 sm:my-7 p-3">
        <div class="flex items-center max-h-[150px] overflow-hidden shadow-sm">
          <img
            v-if="authorImage"
            :src="authorImage"
            alt="author"
            class="max-w-[15%] sm:max-w-[4rem]"
          />
          <div class="max-w-[15%] sm:max-w-[4rem]" v-else-if="!authorImage">
            <Icon
              name="iconamoon:profile-circle-fill"
              class="text-gray-400 w-12 h-12"
            />
          </div>
          <div class="flex flex-col pl-4 max-w-[70%]">
            <p
              class="text-[0.9rem] overflow-ellipsis overflow-hidden sm:text-lg font-bold"
            >
              {{ author }}
            </p>
            <p
              class="text-[0.5rem] min-[400px]:text-[12px] sm:text-[14px] overflow-ellipsis overflow-hidden"
            >
              {{ authorDescription }}
            </p>
            <!-- <div class="flex gap-2 mt-2">
              <NuxtLink to="/"
                ><img
                  src="/images/behance.svg"
                  alt="behance"
                  class="max-w-[20px] sm:max-w-[30px]"
                />
              </NuxtLink>
              <NuxtLink to="/"
                ><img
                  src="/images/myspace.svg"
                  alt="myspace"
                  class="max-w-[20px] sm:max-w-[30px]"
                />
              </NuxtLink>
              <NuxtLink to="/">
                <img
                  src="/images/medium.svg"
                  alt="medium"
                  class="max-w-[20px] sm:max-w-[30px]"
                />
              </NuxtLink>
              <NuxtLink to="/">
                <img
                  src="/images/github.svg"
                  alt="github"
                  class="max-w-[20px] sm:max-w-[30px]"
                />
              </NuxtLink>
            </div> -->
          </div>
        </div>
        <div class="w-full mt-4 md:mt-4 flex justify-end">
          <NuxtLink to="/">
            <div class="flex flex-col items-center">
              <img src="/images/share.svg" class="max-w-[20px] h-[20px]" />
              <p class="text-[14px] md:text-[16px]">share</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="grid grid-cols-12 lg:mt-20 lg:gap-10">
        <div class="grid lg:col-span-9 col-span-12">
          <div v-html="body" class="leading-9 text-[14px]"></div>
          <div
            class="flex mt-10 gap-5 items-center sm:items-start p-2 shadow-md rounded-lg"
            v-for="(DataComment, index) in comment?.slice(
              0,
              visibleCommentCount
            )"
            :key="DataComment.id"
          >
            <img
              :src="`/images/person-comment-1.png`"
              alt="person-comment-1"
              class="object-cover max-w-[100px] max-h-[100px]"
            />
            <div class="flex flex-col gap-2 md:gap-4 w-full">
              <h3 class="text-[#121416] text-[20px] md:text-[24px]">
                {{ DataComment.name }}
              </h3>
              <p class="text-[#6D767E] text-[14px] lg:text-[18px]">
                {{ DataComment.comment }}
              </p>
              <div class="flex gap-2 mt-2">
                <NuxtLink :to="DataComment.behance"
                  ><img src="/images/behance.svg" alt="behance" />
                </NuxtLink>
                <NuxtLink :to="DataComment.myspace"
                  ><img src="/images/myspace.svg" alt="myspace"
                /></NuxtLink>
                <NuxtLink :to="DataComment.medium">
                  <img src="/images/medium.svg" alt="medium" />
                </NuxtLink>
                <NuxtLink :to="DataComment.github">
                  <img src="/images/github.svg" alt="github" />
                </NuxtLink>
              </div>
              <span class="text-right opacity-50">{{
                DataComment.created_at
              }}</span>
            </div>
          </div>
          <div
            class="flex justify-center"
            v-if="comment?.length > visibleCommentCount"
          >
            <button
              @click="showMoreFunc"
              class="bg-primary max-w-[300px] mt-10 focus:outline-none rounded-full text-white p-3 hover:bg-secondary transition"
            >
              {{ showMore ? "Zie minder" : "Bekijk meer" }}
            </button>
          </div>
        </div>
        <!-- author -->
        <div class="hidden lg:grid col-span-3">
          <div class="lg:flex flex-col items-center">
            <h1 class="text-[#121416] text-[18px] pb-3">AUTHOR</h1>
            <h3 class="text-[18px]">{{ author }}</h3>
            <img
              v-if="authorImage"
              :src="authorImage"
              alt="author"
              class="my-4 rounded-full max-w-[100px] aspect-square object-cover"
            />
            <div
              class="my-4 rounded-full max-w-[100px] aspect-square"
              v-else-if="!authorImage"
            >
              <Icon
                name="iconamoon:profile-circle-fill"
                class="text-gray-400 w-12 h-12"
              />
            </div>
            <p
              class="text-center text-sm leading-9 text-[#ADADAD] line-clamp-2"
            >
              {{ authorDescription }}
            </p>
            <!-- <div class="flex gap-2 mt-2">
              <NuxtLink to="/"
                ><img src="/images/behance.svg" alt="behance" />
              </NuxtLink>
              <NuxtLink to="/"
                ><img src="/images/myspace.svg" alt="myspace"
              /></NuxtLink>
              <NuxtLink to="/">
                <img src="/images/medium.svg" alt="medium" />
              </NuxtLink>
              <NuxtLink to="/">
                <img src="/images/github.svg" alt="github" />
              </NuxtLink>
            </div> -->
          </div>
          <div class="flex justify-center">
            <div @click="sharePage" class="cursor-pointer">
              <div
                class="flex flex-col mt-24 max-w-[20px] h-[20px] justify-center items-center"
              >
                <img src="/images/share.svg" />
                <p class="text-[14px] md:text-[16px]">share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      visibleCommentCount: 3,
    };
  },
  methods: {
    showMoreFunc() {
      this.showMore = !this.showMore;
      if (this.showMore) {
        this.visibleCommentCount = this.comment.length;
      } else {
        this.visibleCommentCount = 3;
      }
    },
    sharePage() {
      if (navigator.share) {
        navigator
          .share({
            title: document.title,
            text: "Check out this page!",
            url: window.location.href,
          })
          .then(() => console.log("Page shared successfully"))
          .catch((error) => console.error("Error sharing page:", error));
      } else {
        console.log("Web Share API is not supported");
      }
    },
  },
  props: {
    title: {
      type: String,
    },
    typeArticle: {
      type: String,
    },
    imageSrc: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    body: {
      type: String,
    },
    comment: {},
    author: {
      type: String,
    },
    authorImage: {
      type: String,
    },
    authorDescription: {
      type: String,
    },
  },
};
</script>
