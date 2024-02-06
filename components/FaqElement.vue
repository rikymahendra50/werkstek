<template>
  <div
    class="flex flex-col container-custom w-[90%] md:w-[80%] my-28 justify-center"
  >
    <div class="flex flex-col justify-center items-center my-10">
      <h1
        class="text-[#404040] text-[20px] md:text-[34px] lg:text-[48px] font-semibold text-center"
      >
        {{ HeaderFaq.title }}
      </h1>
      <p class="w-full md:w-[80%] my-5 font-normal text-center text-[16px]">
        {{ HeaderFaq.description }}
      </p>
    </div>

    <div
      v-for="(eachFaq, index) in Faq"
      :key="eachFaq.id"
      class="max-w-[970px]"
    >
      <div
        @click="toggleDetail(index)"
        :class="[
          'rounded-[8px] text-white px-5 md:px-10 py-3 w-[100%] cursor-pointer mb-3 transition',
          activeIndex === index
            ? 'bg-secondary w-full'
            : 'bg-[#859C8121] border-2 border-[#1FAB71]',
        ]"
      >
        <h1
          :class="[
            'font-semibold text-[18px] sm:text-[20px] md:text-[24px]',
            activeIndex === index ? 'text-white mb-2' : 'text-[#404040] py-1',
          ]"
        >
          {{ eachFaq.header }}
        </h1>
        <p
          :class="[
            'text-[12px] md:text-[14px] leading-6',
            activeIndex === index
              ? 'block text-white'
              : 'hidden text-[#404040]',
          ]"
        >
          {{ eachFaq.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      HeaderFaq: {
        title: "FAQ’s – De meest gestelde vragen",
        description:
          "t amet, solor ut adipiscing elit.Lorem ipsum dolor sit amet, solor ut adipiscing elit.Lorem ipsum dolor sit amet, solor ut adipiscing elit.Lorem ipsum dolor sit amet, solor ut adipiscing elit.",
      },
      Faq: [
        {
          header: "How can I build equity into my house?",
          description:
            "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
        },
        {
          header: "How big is an acre?",
          description: "-",
        },
        {
          header: "What are closing costs?",
          description: "-",
        },
        {
          header: "What is Title Insurance?",
          description: "-",
        },
      ],
    };
  },
  methods: {
    toggleDetail(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
  },
};
</script>
