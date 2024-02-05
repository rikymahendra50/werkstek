<template>
  <section class="mx-2 md:mx-5 lg:mx-10">
    <TitleHeader2
      title1="Locaties"
      title2="werf5, Utrecht"
      title3="Categorie"
    />
    <div class="flex gap-2 sm:gap-5">
      <div class="flex flex-col w-[60%] max-w-[727px]">
        <div class="flex flex-col">
          <img
            src="/images/img-page3-1.jpg"
            class="rounded-[8px] max-h-[364px]"
          />
          <div class="grid grid-cols-3 items-center gap-2 mt-3">
            <div class="max-w-[245px]">
              <img src="/images/img-page3-2.png" class="w-full" />
            </div>
            <div class="max-w-[245px]">
              <img src="/images/img-page3-3.png" class="w-full" />
            </div>
            <div class="max-w-[245px]">
              <img src="/images/img-page3-4.jpg" class="w-full" />
            </div>
          </div>
        </div>
        <div class="mt-10 md:mt-16 w-[95%] text-justify">
          <h1
            class="text-[#363636] text-[20px] md:text-[25px] font-semibold my-3"
          >
            Over WERF5
          </h1>
          <p class="text-[12px] md:text-[14px] lg:text-[16px]">
            WERF5 is een gedeelde werkplek / kantoor-, en activiteitenruimte in
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
            proberen. We drinken trouwens alleen maar goeie bonenkoffie. ?
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
                    class="w-[60%] sm:w-[50%] flex items-start text-quaternary"
                  >
                    <Checkbox :titleCheckBox="itemCheckBox.checkBoxTitle" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="w-[40%] block">
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
            class="my-2 rounded-full"
          />
          <ButtonLarge buttonTitle="Contact opnemen" buttonLink="/contact" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58334447.393653534!2d54.64843750000003!3d26.82556878670093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sid!2sid!4v1705553884962!5m2!1sid!2sid"
          loading="lazy"
          class="w-full mt-5 max-h-[300px]"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
