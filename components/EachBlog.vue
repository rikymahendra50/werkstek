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
        class="text-[#404040] text-lg sm:text-[26px] md:text-[30px] mb-3 lg:mb-10 mt-3 md:leading-normal"
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
      <div class="grid grid-cols-12 lg:mt-20 lg:gap-5">
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
          <!-- input comment -->
          <!-- <div
            class="form-control w-full flex flex-col gap-4 justify-end h-fit"
          >
            <div class="flex gap-3 px-5 justify-center">
              <button
                type="button"
                class="bg-primary max-w-[300px] mt-10 focus:outline-none rounded-md text-white p-3 hover:bg-secondary transition"
                @click="inputEmailFirst"
              >
                Add Comment
              </button>
            </div>
            <div class="flex justify-end gap-3 px-5" v-if="canComment">
              <button
                class="w-fit btn btn-outline bg-secondary text-white hover:text-white hover:bg-secondary hover:border-secondary"
              >
                Cancel
              </button>
              <button
                class="w-fit btn btn-outline border-primary text-primary hover:text-white hover:bg-secondary hover:border-secondary"
              >
                SEND
              </button>
            </div>

            <modal v-model="showModal" :clickOutsite="true">
              <div class="grid gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered rounded-md w-full max-w-full border-primary"
                  v-model="name"
                />
                <input
                  type="text"
                  placeholder="Email"
                  class="input input-bordered rounded-md w-full max-w-full border-primary"
                  v-model="email"
                />
                <input
                  type="text"
                  placeholder="Comment"
                  class="input input-bordered rounded-md w-full max-w-full border-primary"
                  v-model="commentT"
                />
                <div class="flex justify-end" @click="sendMessage">
                  <button type="submit" class="btn-md btn w-fit">Send</button>
                </div>
              </div>
            </modal>
          </div> -->
          <!-- end input comment -->
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
        <div class="hidden lg:grid lg:col-span-3 lg:item-center">
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
              class="text-center text-sm leading-9 text-[#ADADAD] cursor-pointer"
              :class="{ 'line-clamp-2': isClamped }"
              @click="toggleClamp"
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

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const props = defineProps({
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
  slugT: {
    type: String,
  },
});

const showMore = ref(false);
const visibleCommentCount = ref(3);
const isClamped = ref(true);
const canComment = ref(false);
const showModal = ref(false);

const name = ref();
const email = ref();
const comment = ref();
const commentT = ref();

async function sendMessage() {
  loading.value = true;

  const { error } = await useFetch(`/articles/${props.slugT}/comments`, {
    method: "POST",
    body: { name: name.value, email: email.value, comment: commentT.value },
    ...requestOptions,
  });

  if (error.value) {
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Success Add Comment",
    });
  }
  loading.value = false;
  showModal.value = false;
}

function showMoreFunc() {
  showMore.value = !showMore.value;
  if (showMore.value) {
    visibleCommentCount.value = comment.value.length;
  } else {
    visibleCommentCount = 3;
  }
}

function toggleClamp() {
  isClamped.value = !isClamped.value;
}

function inputEmailFirst() {
  // (name.value = ""), (email.value = ""), (comment.value = "");
  showModal.value = true;
}

function sharePage() {
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
}
</script>
