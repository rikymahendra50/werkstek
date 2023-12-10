<template>
    <header class="w-full">
        <div class="container flex mx-auto relative lg:px-20 w-full">
            <div class="nav border-pink-600 h-[86px] w-full bg-white flex items-center">
                <img src="../assets/images/logo-wekstek.png" alt="logo-weksted" class="sm:w-[175px] sm:h-[41px] w-[87px] h-[20px]">
                <button id="hamburger" name="hamburger" type="button" class="block absolute right-9 lg:hidden lg:w-[30px] sm:h-[10px] w-[15px] h-[5px]">
                    <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </button>

                <nav id="nav-menu" class="hidden absolute lg:block right-9 lg:px-16">
                    <ul class="block lg:flex items-center">
                        <li class="pr-4"><NuxtLink to="/Verhuur">Verhuur</NuxtLink></li>
                        <li class="pr-4"><NuxtLink to="/Onze locaties">Onze locaties</NuxtLink></li>
                        <li class="pr-4"><NuxtLink to="/Over wekstek">Over wekstek</NuxtLink></li>
                        <li class="pr-4"><NuxtLink to="/Werkstek updates">Werkstek updates</NuxtLink></li>
                        <li class="bg-[#F0912D] relative w-[172px] h-[52px] rounded-[14px] justify-center flex items-center text-white text-[15px]"><NuxtLink to="/Contact">Contact opnemen</NuxtLink></li>
                    </ul> 
                </nav>
            </div>
        </div>

    </header>
</template>

<script>
export default {
  // Components navbar
};
</script>