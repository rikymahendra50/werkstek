<template>

    <div class="search-parent relative w-[1130px] h-[288px] bg-[#859C81] rounded flex flex-col px-20 py-12">
        <h1 class="text-white font-semibold text-[25px] block">Waar bent u op zoek naar?</h1>
        <div class="search flex flex-row justify-between">
            <div class="flex flex-col mt-10">
                <p class="text-[14px] text-white pb-2">Zoek een Locatie</p>
                <div class="dropdown flex bg-white font-normal rounded-[10px] w-[286px] h-[47.67px] items-center justify-between cursor-pointer px-10">
                    <p class="text-[14px] text-[#676767]">Utrecht</p>
                    <img src="../assets/images/dropdown-green.svg" alt="dropdown-green">
                    <!-- <div class="dropdown-content">
                        <p>Test</p>
                    </div> -->
                </div>
            </div>
            <div class="flex flex-col mt-10">
                <p class="text-[14px] text-white pb-2">Type</p>
                <div class="dropdown flex bg-white font-normal rounded-[10px] w-[286px] h-[47.67px] items-center justify-between cursor-pointer px-10">
                    <p class="text-[14px] text-[#676767]">Kantoorruimte</p>
                    <img src="../assets/images/dropdown-green.svg" alt="dropdown-green">
                    <!-- <div class="dropdown-content">
                        <p>Test</p>
                    </div> -->
                </div>
            </div>
            <div class="flex flex-col mt-10">
                <p class="text-[14px] text-white pb-2">Zoek een Locatie</p>
                <div class="dropdown flex bg-white font-normal rounded-[10px] w-[286px] h-[47.67px] items-center justify-between cursor-pointer px-10">
                    <p class="text-[14px] text-[#676767]">Vanaf € 50</p>
                    <img src="../assets/images/dropdown-green.svg" alt="dropdown-green">
                    <!-- <div class="dropdown-content">
                        <p>Test</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

</template>

<style>
/* .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
} */

.dropdown:hover .dropdown-content {
  display: block;
}

.search-parent {
    border-radius: 0 20px 50px 0;
}
</style>