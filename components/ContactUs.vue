<template>
  <div class="flex flex-col justify-center items-center md:my-10">
    <h1 class="text-[#404040] text-[35px] font-semibold my-4">
      Neem contact op
    </h1>
    <p class="text-[14px] text-center">
      Heb je vragen of opmerkingen? Wil je een afspraak maken of een rondleiding
      aanvragen?
    </p>
    <div
      class="flex my-5 w-full flex-col md:flex-row justify-center px-10 md:px-0 gap-5"
    >
      <div
        class="flex flex-col mt-2 mx-2 md:mx-0 md:w-[400px] py-5 pl-2 md:pl-5 bg-[#F7F7F7] box-shadow2 max-h-[400px] order-2 md:order-1"
      >
        <p class="text-[16px] text-[#230000] leading-9">
          Dan kun je een mail sturen of bellen:
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          info@werkstek.nl
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          085 – 0290598
        </p>
        <h1
          class="text-[12px] sm:text-[16px] text-[#230000] leading-9 my-1 md:my-4"
        >
          Ons Werkstek hoofdkantoor:
        </h1>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Werkstek B.V.
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Tussen de Bogen 81
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          1013 JB AMSTERDAM
        </p>
        <div class="flex gap-1 mt-2">
          <img
            src="/images/icon-facebook-black.svg"
            alt="icon-facebook-black"
          />
          <img
            src="/images/icon-instagram-black.svg"
            alt="icon-instagram-black"
          />
          <img src="/images/icon-youtube-black.svg" alt="icon-youtube-black" />
          <img
            src="/images/icon-linkedin-black.svg"
            alt="icon-linkedin-black"
          />
        </div>
      </div>
      <div class="login-box md:order-2 md:w-[400px]">
        <form class="text-[12px] md:text-[16px]">
          <div class="user-box">
            <input type="text" name="#495057" />
            <label>Je naam (verplicht)</label>
          </div>
          <div class="user-box">
            <input type="text" name="#" />
            <label>Je e-mailadres (verplicht)</label>
          </div>
          <div class="user-box">
            <input type="text" name="#" />
            <label>Onderwerp</label>
          </div>
          <div class="user-box">
            <textarea
              type="text"
              name="#"
              class="h-[100px] min-h-[50px] max-h-[150px]"
            />
            <label>Je bericht</label>
          </div>
          <ButtonSM buttonTitle="Contact opnemen" />
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.login-box {
  box-sizing: border-box;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input,
.login-box .user-box textarea {
  width: 100%;
  padding: 10px 0;
  color: #777;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #777;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #777;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label,
.login-box .user-box textarea:focus ~ label,
.login-box .user-box textarea:valid ~ label {
  top: -20px;
  left: 0;
  color: #777;
  font-size: 12px;
}
</style>
