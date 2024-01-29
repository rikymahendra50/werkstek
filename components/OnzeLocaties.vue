<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="container-custom flex flex-col lg:flex-row" v-if="showLocaties">
      <div class="w-full lg:w-[35%]">
        <p class="text-base opacity-50">Kies een locatie</p>
        <details class="dropdown">
          <summary
            class="m-1 btn bg-[white] normal-case font-normal w-[300px] max-w-[90%] justify-between"
          >
            <div class="flex items-center">
              <img src="/images/location.svg" class="pl-1 pr-3" />
              Utrecht
            </div>

            <img src="/images/arrow-down.svg" class="p-1" />
          </summary>
          <ul
            class="p-2 shadow menu dropdown-content z-[1] bg-white rounded-[8px] w-52"
          >
            <li><a>Utrecht</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
        <div class="flex flex-col">
          <p class="text-base mt-3 opacity-50">Soort locatie</p>
          <div class="grid grid-cols-2 grid-rows-2 gap-2">
            <Checkbox titleCheckBox="Alles" :checkedOrNo="checked" />
            <Checkbox titleCheckBox="Flex plek" :checkedOrNo="checked" />
            <Checkbox titleCheckBox="Kantoorruimte" :checkedOrNo="checked" />
            <Checkbox titleCheckBox="Anders" :checkedOrNo="checked" />
          </div>
          <!-- slider -->
          <div class="card">
            <div class="w-[100%] my-4">
              <p class="text-base mt-3 opacity-50">De prijs per maand</p>
              <div class="range-slider">
                <div class="range-fill"></div>
                <input
                  type="range"
                  class="min-price"
                  value="100"
                  min="10"
                  max="500"
                  step="10"
                />
                <input
                  type="range"
                  class="max-price"
                  value="400"
                  min="10"
                  max="500"
                  step="10"
                />
              </div>
              <div class="price-content w-[80%]">
                <p id="min-value text-[14px] opacity-50">€100</p>
                <p id="max-value text-[14px] opacity-50">€1000</p>
              </div>
            </div>
          </div>
          <!-- end slider -->
          <p class="text-sm mt-3 opacity-50">De opervlakte m²</p>
          <div class="flex my-2">
            <input
              type="text"
              placeholder="Min"
              class="input input-bordered w-[35%] p-[10px] mr-2 input-md"
            />
            <input
              type="text"
              placeholder="Max"
              class="input input-bordered w-[35%] p-[10px] input-md"
            />
          </div>
          <!-- checkbox -->
          <p class="my-3">-</p>
          <div class="flex justify-between">
            <div class="flex flex-col w-[33%] gap-2">
              <Checkbox titleCheckBox="Wifi" />
              <Checkbox titleCheckBox="Parkeerplaats" />
              <Checkbox titleCheckBox="Receptie" />
              <Checkbox titleCheckBox="Koffiebar" />
            </div>
            <div class="flex flex-col w-[67%] gap-2">
              <Checkbox titleCheckBox="Keuken" />
              <Checkbox titleCheckBox="Vlakbij het treinstation" />
              <Checkbox titleCheckBox="Loungeplekken" />
              <Checkbox titleCheckBox="Vergaderruimtes met videoschermen" />
            </div>
          </div>
          <img
            src="/images/Filter Icon.svg"
            alt="filter"
            class="w-8 h-8 mt-3"
          />
          <p class="text-base mt-3 opacity-50">Meer filter opties</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58334447.393653534!2d54.64843750000003!3d26.82556878670093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sid!2sid!4v1705553884962!5m2!1sid!2sid"
            loading="lazy"
            class="w-[90%] my-5"
          ></iframe>
        </div>
      </div>
      <div class="py-5 lg:w-[65%] overflow-auto max-h-[400px] md:max-h-[800px]">
        <!-- elemen each locatie -->
        <NuxtLink
          to="/onze-locaties/onze-locaties-single"
          v-for="items in eachLocaties"
        >
          <div
            class="bg-[#859C8142] bg-opacity-20 rounded-md shadow-xl w-full max-w-[786.406px] flex mb-3"
          >
            <img
              :src="items.image"
              alt="page2"
              class="max-w-[256px] w-[50%] lg:w-full"
            />
            <div class="flex flex-col min-[400px]:flex-row ml-4 w-full">
              <div class="flex flex-col justify-center w-[90%]">
                <p class="text-[#404040] text-sm lg:text-base mt-1">
                  {{ items.locatie }}
                </p>
                <p class="text-[#777] lg:text-sm mt-1">{{ items.adres }}</p>
                <p class="text-xs lg:text-sm font-semibold mt-1 text-[#777]">
                  {{ items.opervlakte }}
                </p>
                <p class="text-xs lg:text-sm mt-1">{{ items.pricePerMonth }}</p>
                <p class="text-xs lg:text-[13px] text-[#859C81] mt-1">
                  {{ items.phoneNumber }}
                </p>
                <p class="text-[10px] lg:text-[13px] text-[#859C81] mt-1">
                  {{ items.mailAdres }}
                </p>
                <NuxtLink
                  :to="eachLocaties.detailLink"
                  class="text-[10px] lg:text-[12px]"
                  >{{ items.detailLinkTitle }}></NuxtLink
                >
              </div>
              <div class="items-end flex mr-3 mb-2">
                <div
                  class="bg-primary1 max-w-[61px] flex justify-center items-center gap-2 text-white rounded-full lg:py-1 px-6 mb-2 mr-2"
                >
                  <img
                    src="/images/icon-rating-white.svg"
                    alt="page2"
                    class="w-[14px]"
                  />
                  <p class="text-sm">{{ items.rating }}</p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- other version -->
    <div class="flex container-custom" v-if="!showLocaties">
      <div class="w-full lg:w-[35%]">
        <p class="text-base opacity-50">Kies een locatie</p>
        <details class="dropdown">
          <summary
            class="m-1 btn bg-[white] normal-case font-normal w-[300px] max-w-[90%] justify-between"
          >
            <div class="flex items-center">
              <img src="/images/location.svg" class="pl-1 pr-3" />
              Utrecht
            </div>

            <img src="/images/arrow-down.svg" class="p-1" />
          </summary>
          <ul
            class="p-2 shadow menu dropdown-content z-[1] bg-white rounded-[8px] w-52"
          >
            <li>
              <a>Utrecht</a>
            </li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
        <div class="flex flex-col">
          <p class="text-base mt-3 opacity-50">Soort locatie</p>
          <div class="form-control w-[90%]">
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                checked="checked"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">Alles</p>
            </label>
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">Stage plaats</p>
            </label>
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">Functie 1</p>
            </label>
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">Functie 2</p>
            </label>
          </div>

          <p class="text-base mt-3 opacity-50">Aantal uur per week</p>
          <!-- slider -->
          <p class="text-base mt-3 opacity-50">De prijs per maand</p>
          <p class="text-red-600 text-2xl">this place is the slider</p>
          <!-- end slider -->
          <p class="text-base mt-3 opacity-50">Opleidings niveau</p>
          <div class="form-control w-[90%]">
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                checked="checked"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">Alles</p>
            </label>
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">MBO</p>
            </label>
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">HBO</p>
            </label>
            <label class="cursor-pointer label flex justify-start">
              <input
                type="checkbox"
                class="checkbox checkbox-secondary mr-4 checkbox-sm"
              />
              <p class="text-sm">Universiteit</p>
            </label>
          </div>
          <img src="/images/filter icon.svg" class="w-5 h-5 my-4" />
          <p class="text-base mt-3 opacity-50">Meer filter opties</p>
        </div>
      </div>
      <div>test</div>
    </div>
  </section>
</template>

<style>
.price-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.range-slider {
  width: 80%;
  position: relative;
  margin: 15px 0 30px 0;
}

.range-fill {
  height: 6px;
  background-color: orange;
  position: absolute;
  z-index: 1;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: absolute;
  left: 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: orange;
  cursor: pointer;
  margin-top: -5px;
  position: relative;
  z-index: 1;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: #e8e8e8;
  border-radius: 3px;
  border: none;
}
</style>

<script>
export default {
  data() {
    return {
      eachLocaties: [
        {
          image: "/images/img-each-locatie-1.png",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/onze-locaties-single",
          rating: 9.4,
        },
        {
          image: "/images/img-each-locatie-2.jpg",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/onze-locaties-single",
          rating: 9.4,
        },
        {
          image: "/images/img-each-locatie-3.jpg",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/onze-locaties-single",
          rating: 9.4,
        },
      ],
    };
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
