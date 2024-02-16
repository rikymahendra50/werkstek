<template>
  <section class="container-custom">
    <TitleHeader2 :title1="title" :title2="subTitle" :title3="thirdTitle" />
    <div class="flex gap-2 sm:gap-5">
      <div class="flex flex-col w-[50%] sm:w-[60%] max-w-[727px]">
        <div class="flex flex-col md:min-h-[400px]">
          <div
            class="min-h-[200px] md:min-h-[400px] bg-no-repeat bg-cover relative"
            :style="{ backgroundImage: 'url(' + imageBanner + ')' }"
          >
            <div
              class="bg-primary absolute top-5 text-white p-1 md:p-3 md:w-[30%]"
            >
              <span class="text-sm md:text-lg">Prijs :</span> <br />
              <span class="text-sm md:text-lg font-semibold"
                >€ {{ price }} per/maand</span
              >
            </div>
          </div>
          <div class="grid grid-cols-3 items-center gap-2 mt-3">
            <div class="max-w-[245px]">
              <img :src="imageSrc1" class="w-full" />
            </div>
            <div class="max-w-[245px]">
              <img :src="imageSrc2" class="w-full" />
            </div>
            <div class="max-w-[245px]">
              <img :src="imageSrc3" class="w-full" />
            </div>
          </div>
        </div>
        <div class="mt-2 sm:mt-10 md:mt-16 w-[100%] text-justify">
          <h1
            class="text-[#363636] text-[20px] md:text-[25px] font-semibold my-3"
          >
            <!-- Over WERF5 -->
            {{ title }}
          </h1>
          <p class="text-[12px] md:text-[14px] lg:text-[16px]">
            <!-- WERF5 is een gedeelde werkplek / kantoor-, en activiteitenruimte in
            een knusse werfkelder aan de Oudegracht. Overdag werken freelancers
            binnen WERF5 aan hun eigen projecten. Er zijn 8 vaste werkplekken en
            8 flexwerkplekken, een vergaderruimte en een kayak die vrij te
            gebruiken is voor WERF5’ers. ‘savonds en in het weekend kan de
            ruimte gebruikt worden voor workshops / Brainstorm sessies /
            trainingen / lezingen met een maximale bezetting van 40 mensen.
            Co-werken en kruisbestuiving staan centraal binnen WERF5. We helpen
            elkaar graag bij projecten en bij vragen. Er zijn regelmatig
            werkplekken beschikbaar binnen WERF5 en het is altijd mogelijk om
            een of twee daagjes kosteloos te komen werken om het uit te
            proberen. We drinken trouwens alleen maar goeie bonenkoffie. ? -->
            {{ description }}
          </p>
        </div>
        <p class="text-[#495057] text-base mt-10 mb-3 ml-5">
          De faciliteiten op de locatie
        </p>
        <div class="border w-[95%] min-w-[70px] relative">
          <span class="absolute top-[-39px] text-primary text-4xl">____</span>
          <div class="overflow-x-auto sm:px-3">
            <table class="table">
              <tbody>
                <tr
                  class="flex justify-between items-center"
                  v-for="(itemCheckBox, index) in checkBoxData"
                  :key="itemCheckBox.id"
                >
                  <td class="text-[13px] w-[40%] sm:w-[50%]">
                    {{ itemCheckBox.name }}
                  </td>
                  <td
                    class="w-[60%] sm:w-[50%] flex items-start text-quaternary gap-3"
                  >
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked
                      disabled
                      value="1"
                    />
                    <label for="checkbox">Fiture</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="w-[50%] sm:w-[40%] block">
        <ul class="rounded-[8px] bg-[#859C811A] py-4 px-2 md:px-5">
          <li class="py-1 lg:py-2 flex">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_3781)">
                <path
                  d="M12.2786 23C4.34698 22.4668 0.575981 14.2711 0.0558555 10.4064C-0.186019 9.40702 -0.139144 -0.387909 11.1086 0.0119072C22.356 0.411724 23.9014 8.14509 23.9816 9.00721C24.2415 11.8059 21.8359 21.7339 12.2786 23Z"
                  class="fill-current text-primary"
                />
                <path
                  d="M7.53746 11.021L10.8247 14.3813L16.4621 8.61868"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_3781">
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V13C24 18.5228 19.5228 23 14 23H10C4.47715 23 0 18.5228 0 13V10Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="pl-2 text-[12px] md:text-[15px]">Kleinschalig</span>
          </li>
          <li class="py-1 lg:py-2 flex">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_3781)">
                <path
                  d="M12.2786 23C4.34698 22.4668 0.575981 14.2711 0.0558555 10.4064C-0.186019 9.40702 -0.139144 -0.387909 11.1086 0.0119072C22.356 0.411724 23.9014 8.14509 23.9816 9.00721C24.2415 11.8059 21.8359 21.7339 12.2786 23Z"
                  class="fill-current text-primary"
                />
                <path
                  d="M7.53746 11.021L10.8247 14.3813L16.4621 8.61868"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_3781">
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V13C24 18.5228 19.5228 23 14 23H10C4.47715 23 0 18.5228 0 13V10Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="pl-2 text-[12px] md:text-[15px]">Informeel</span>
          </li>
          <li class="py-1 lg:py-2 flex">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_3781)">
                <path
                  d="M12.2786 23C4.34698 22.4668 0.575981 14.2711 0.0558555 10.4064C-0.186019 9.40702 -0.139144 -0.387909 11.1086 0.0119072C22.356 0.411724 23.9014 8.14509 23.9816 9.00721C24.2415 11.8059 21.8359 21.7339 12.2786 23Z"
                  class="fill-current text-primary"
                />
                <path
                  d="M7.53746 11.021L10.8247 14.3813L16.4621 8.61868"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_3781">
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V13C24 18.5228 19.5228 23 14 23H10C4.47715 23 0 18.5228 0 13V10Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="pl-2 text-[12px] md:text-[15px]"
              >Flexwerken mogelijk</span
            >
          </li>
          <li class="py-1 lg:py-2 flex">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_3781)">
                <path
                  d="M12.2786 23C4.34698 22.4668 0.575981 14.2711 0.0558555 10.4064C-0.186019 9.40702 -0.139144 -0.387909 11.1086 0.0119072C22.356 0.411724 23.9014 8.14509 23.9816 9.00721C24.2415 11.8059 21.8359 21.7339 12.2786 23Z"
                  class="fill-current text-primary"
                />
                <path
                  d="M7.53746 11.021L10.8247 14.3813L16.4621 8.61868"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_3781">
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V13C24 18.5228 19.5228 23 14 23H10C4.47715 23 0 18.5228 0 13V10Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="pl-2 text-[12px] md:text-[15px]"
              >Prachtige locatie aan de gracht</span
            >
          </li>
          <li class="py-1 lg:py-2 flex">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_3781)">
                <path
                  d="M12.2786 23C4.34698 22.4668 0.575981 14.2711 0.0558555 10.4064C-0.186019 9.40702 -0.139144 -0.387909 11.1086 0.0119072C22.356 0.411724 23.9014 8.14509 23.9816 9.00721C24.2415 11.8059 21.8359 21.7339 12.2786 23Z"
                  class="fill-current text-primary"
                />
                <path
                  d="M7.53746 11.021L10.8247 14.3813L16.4621 8.61868"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_3781">
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V13C24 18.5228 19.5228 23 14 23H10C4.47715 23 0 18.5228 0 13V10Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="pl-2 text-[12px] md:text-[15px]"
              >Internationale groep mensen lore</span
            >
          </li>
        </ul>
        <div class="ml-1 md:ml-3">
          <p class="text-[18px] lg:text-[24px] text-[#363636] my-4">
            Adresgegevens
          </p>
          <ul class="flex flex-col gap-1">
            <li class="text-[14px] md:text-[16px] text-[#4A4A4A]">
              Oudegracht aan de Werf 5
            </li>
            <li class="text-[12px] md:text-[14px] text-[#4A4A4A]">Postcode</li>
            <li class="text-[12px] md:text-[15px] text-[#4A4A4A]">Utrecht</li>
            <li class="text-[13px] md:text-[15px] text-[#4A4A4A]">Nederland</li>
          </ul>
          <div class="my-4 flex flex-col gap-3">
            <NuxtLink :to="'tel:085-0290598'" class="flex gap-3">
              <img src="/images/telp-bg-primary.svg" alt="phone-icon" />
              <p class="text-[#404040] text-[13px] md:text-[15px] mt-2">
                Tel : <span>085-0290598</span>
              </p>
            </NuxtLink>
            <NuxtLink :to="'mailto:' + 'info@werkstek.nl'" class="flex gap-3">
              <img src="/images/email-bg-primary.svg" alt="phone-icon" />
              <p class="text-[#404040] text-[13px] md:text-[16px]">
                E-mail: <span>info@werkstek.nl</span>
              </p>
            </NuxtLink>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row text-white justify-between mt-5 items-center"
        >
          <ButtonLarge
            buttonTitle="Aanvragen"
            buttonLink="/voor-verhuurders"
            class="my-2 rounded-full text-sm"
          />
          <ButtonLarge
            buttonTitle="Contact opnemen"
            buttonLink="/contact"
            class="my-2 rounded-full text-sm"
          />
        </div>
        <Map />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imageBanner: {
      type: String,
    },
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    thirdTitle: {
      type: String,
    },
    imageSrc1: {
      type: String,
    },
    imageSrc2: {
      type: String,
    },
    imageSrc3: {
      type: String,
    },
    location: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      dataLocatiesSingle: {},
      checkBoxData: [
        {
          id: 1,
          name: "Wifi",
          checkBoxTitle: "Lorem Epsum",
        },
        {
          id: 2,
          name: "Parkeerplaats",
          checkBoxTitle: "Lorem Epsum",
        },
        {
          id: 3,
          name: "Receptie",
          checkBoxTitle: "Lorem Epsum",
        },
        {
          id: 4,
          name: "Koffiebar",
          checkBoxTitle: "Lorem Epsum",
        },
        {
          id: 5,
          name: "Vlakbij het treinstation",
          checkBoxTitle: "Lorem Epsum",
        },
        {
          id: 6,
          name: "Loungeplekken",
          checkBoxTitle: "Lorem Epsum",
        },
        {
          id: 7,
          name: "Vergaderruimtes met videoschermenn",
          checkBoxTitle: "Lorem Epsum",
        },
      ],
    };
  },
};
</script>
