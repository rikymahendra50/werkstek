<template>

    <section class="section bg-[#EEF3ED] w-full justify-center flex items-center">
        <!-- <img src="../assets/images/bg-dot.svg" alt="bg-dot" class="absolute"> -->
        
        <div class="relative flex flex-row text-[#F5F5F5] text-[20px] lg:text-[35px] font-normal">
            <BgSmallOrange class="absolute left-[-20px] top-[-40px] w-[355px] lg:w-[710px]"/>
            <div class="flex flex-col">
                <p class="kol-1-1 gradient-overlay w-[306px] h-[231px] lg:w-[613px] lg:h-[462px] flex items-center rounded-[5px] z-10"><span class="z-10">Lees alles over Werkstek</span></p>
                <p class="kol-1-2 w-[306px] h-[195.5px] lg:w-[613px] lg:h-[391px] flex items-center rounded-[5px] z-10"><span class="z-10">Bekijk alle locaties van Werkstek</span></p>
            </div> 
            <div class="flex flex-col">
                <p class="kol-2-1 w-[231px] h-[217px] lg:w-[512px] lg:h-[434px] flex items-center rounded-[5px] z-10"><span class="z-10">Bekijk onze Vacatures</span></p>
                <p class="kol-2-2 gradient-overlay w-[231px] h-[214px] lg:w-[512px] lg:h-[428px] flex items-center rounded-[5px] z-10"><span class="z-10">Bekijk alle over de Werkstek communitie</span></p>
            </div>
            <BgSmallOrange class="absolute right-[-20px] bottom-[-40px] w-[355px] lg:w-[710px]"/>
        </div>
    </section>

</template>
<style>

    .kol-1-1, .kol-1-2, .kol-2-1, .kol-2-2 {
        background-position: center center;
        background-repeat: no-repeat;
        border: 1px solid;
        border-image-source: linear-gradient(233.57deg, #1F1F1F 0%, rgba(0, 0, 0, 0) 104.75%);
    }

    .kol-1-1 {
        position: relative;
        background-image: url('./assets/images/Lees alles over Werkstek.png');
    }

    /* .kol-1-1::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        box-shadow: 2px 4px 22px 0px #00000038;
    }  */

    .kol-1-2{
        position: relative;
        background-image: url('./assets/images/Bekijk alle locaties van Werkstek.png');
    }

    .kol-2-1{
        background-image: url('./assets/images/Bekijk onze Vacatures.png');
    }

    .kol-2-2{
        background-image: url('./assets/images/Bekijk alle over de Werkstek communitie.png');
    }

    .section {
        background-image: url('./assets/images/bg-dot.svg');
        background-repeat: no-repeat;
    }

    .gradient-overlay {
        position: relative;
    }

    .gradient-overlay::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        box-shadow: 2px 4px 22px 0px #00000038;
    }

</style>