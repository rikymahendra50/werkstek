<template>
  <div
    class="flex flex-col container-custom w-[90%] md:w-[80%] my-28 justify-center"
  >
    <div class="flex flex-col justify-center items-center my-10">
      <h1
        class="text-[#404040] text-[20px] md:text-[34px] lg:text-[40px] font-semibold text-center"
      >
        {{ HeaderFaq.title }}
      </h1>
      <p
        class="w-full md:w-[80%] my-5 font-normal text-center text-[14px] md:text-[16px]"
      >
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
            'font-semibold text-[16px] sm:text-[18px] md:text-[20px]',
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
          header: "Hoe kan ik overwaarde inbouwen in mijn huis?",
          description:
            "U kunt op drie manieren eigen vermogen opbouwen. De eerste (en gemakkelijkste) is de waardering van de markt. Ten tweede: probeer bij het doen van uw maandelijkse hypotheekbetaling een klein beetje meer te sturen.",
        },
        {
          header: "Hoe groot is een hectare?",
          description: "-",
        },
        {
          header: "Wat zijn afsluitkosten?",
          description: "-",
        },
        {
          header: "Wat is een eigendomsverzekering?",
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
