<template>
  <section class="mx-2 md:mx-5 lg:mx-10">
    <TitleHeader2
      title1="Locaties"
      title2="werf5, Utrecht"
      title3="Categorie"
    />
    <div class="flex">
      <div class="flex flex-col w-[60%] md:w-[70%]">
        <div class="flex">
          <img src="/images/img-page3-1.jpg" class="md:w-[75%] rounded-[8px]" />
          <div class="md:flex-col md:flex mx-1 md:mx-2 hidden">
            <img src="/images/img-page3-2.jpeg" />
            <img src="/images/img-page3-3.jpeg" class="mt-3" />
            <img src="/images/img-page3-2.jpeg" class="mt-3" />
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
        <div class="border w-[95%]">
          <div class="overflow-x-auto sm:px-3">
            <table class="table">
              <tbody>
                <tr
                  class="flex justify-between items-center"
                  v-for="(itemCheckBox, index) in checkBoxData"
                  :key="itemCheckBox.id"
                >
                  <td class="text-[13px] w-[50%]">{{ itemCheckBox.name }}</td>
                  <td class="w-[50%] flex items-start text-black">
                    <!-- <div class="form-control">
                      <label class="cursor-pointer label">
                        <input type="checkbox" class="checkbox" />
                        <p
                          class="label-text pl-2 text-[13px] text-sm text-black"
                        >
                          {{ itemCheckBox.checkBoxTitle }}
                        </p>
                      </label>
                    </div> -->
                    <Checkbox :titleCheckBox="itemCheckBox.checkBoxTitle" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="w-[40%] md:w-[30%]">
        <ul class="rounded-[8px] bg-[#859C811A] py-4 px-2 md:px-5">
          <li class="py-1 lg:py-2 flex">
            <img
              src="/images/icon-orange-page3.svg"
              alt="icon-orange-page3"
              class="w-5 md:w-7"
            />
            <span class="pl-2 text-[12px] md:text-[15px]">Kleinschalig</span>
          </li>
          <li class="py-1 lg:py-2 flex">
            <img
              src="/images/icon-orange-page3.svg"
              alt="icon-orange-page3"
              class="w-5 md:w-7"
            />
            <span class="pl-2 text-[12px] md:text-[15px]">Informeel</span>
          </li>
          <li class="py-1 lg:py-2 flex">
            <img
              src="/images/icon-orange-page3.svg"
              alt="icon-orange-page3"
              class="w-5 md:w-7"
            />
            <span class="pl-2 text-[12px] md:text-[15px]"
              >Flexwerken mogelijk</span
            >
          </li>
          <li class="py-1 lg:py-2 flex">
            <img
              src="/images/icon-orange-page3.svg"
              alt="icon-orange-page3"
              class="w-5 md:w-7"
            />
            <span class="pl-2 text-[12px] md:text-[15px]"
              >Prachtige locatie aan de gracht</span
            >
          </li>
          <li class="py-1 lg:py-2 flex">
            <img
              src="/images/icon-orange-page3.svg"
              alt="icon-orange-page3"
              class="w-5 md:w-7"
            />
            <span class="pl-2 text-[12px] md:text-[15px]"
              >Internationale groep mensen lore</span
            >
          </li>
        </ul>
        <div class="ml-1 md:ml-3">
          <p class="text-[18px] lg:text-[24px] text-[#363636] my-4">
            Adresgegevens
          </p>
          <ul>
            <li class="text-[14px] md:text-[16px]">Oudegracht aan de Werf 5</li>
            <li class="text-[12px] md:text-[14px] text-[#4A4A4A]">Postcode</li>
            <li class="text-[12px] md:text-[15px] text-[#4A4A4A]">Utrecht</li>
            <li class="text-[13px] md:text-[15px] text-[#4A4A4A]">Nederland</li>
          </ul>
          <p class="text-[#404040] text-[13px] md:text-[15px] mt-2">
            Tel : <span>085-0290598</span>
          </p>
          <p class="text-[#404040] text-[13px] md:text-[16px]">
            E-mail: <span>info@werkstek.nl</span>
          </p>
          <div
            class="bg-[#E9EBEC] mt-5 outline-[#E9EBEC] text-[#777777] max-w-[243px] w-full md:w-[50%] p-3 flex justify-end rounded-[8px]"
            style="
              border: 1px dashed #e9ebec;
              background: rgba(133, 156, 129, 0.1);
            "
          >
            <div class="flex flex-col text-[#777]">
              <p class="text-[10px] md:text-[13px]">Prijs :</p>
              <p class="text-[12px] md:text-[16px]">€ 450 per/maand</p>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row text-white justify-between mt-5 items-center"
        >
          <ButtonLarge buttonTitle="Aanvragen" buttonLink="/" />
          <ButtonLarge buttonTitle="Contact opnemen" buttonLink="/contact" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58334447.393653534!2d54.64843750000003!3d26.82556878670093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sid!2sid!4v1705553884962!5m2!1sid!2sid"
          loading="lazy"
          class="w-full mt-5 h-[300px]"
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
