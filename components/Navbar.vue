<template>
    <header class="w-full">
        <div class="container flex mx-auto relative lg:px-20 w-full">
            <div class="nav h-[86px] w-full bg-white flex items-center">
                <img src="../assets/images/logo-wekstek.svg" alt="logo-weksted" class="sm:w-[175px] sm:h-[41px] absolute top-4">
                <button id="hamburger" name="hamburger" type="button" class="block absolute right-9 lg:hidden lg:w-[30px] sm:h-[10px] w-[15px] h-[5px] top-7">
                    <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </button>

                <nav id="nav-menu" class="hidden absolute lg:block right-9 lg:px-16">
                    <ul class="block lg:flex items-center text-[16px] font-medium">
                        <li class="pr-4"><NuxtLink to="/Verhuur">Verhuur</NuxtLink></li>
                        <li class="pr-4"><NuxtLink to="/Onze locaties">Onze locaties</NuxtLink></li>
                        <li class="pr-4 relative group flex">
                            <NuxtLink to="/Over wekstek">Over wekstek</NuxtLink>
                            <ul class="absolute top-5 hidden group-hover:block bg-[#F0912D] shadow-lg mt-2 py-1 rounded-md w-full text-white">
                                <!-- Dropdown items -->
                                <li><NuxtLink to="/submenu1" class="p-5">Submenu 1</NuxtLink></li>
                                <li><NuxtLink to="/submenu2" class="p-5">Submenu 2</NuxtLink></li>
                                <!-- Add more submenu items as needed -->
                            </ul>
                            <img src="../assets/images/icon-dropdown.svg" alt="icon-dropdown" class="pl-1">
                        </li>
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
    mounted() {
        // Logic untuk navbar fixed
        this.$nextTick(() => {
            window.addEventListener('scroll', this.handleScroll);
        });

        // Logic untuk hamburger nav
        const hamburger = this.$refs.hamburger;
        const navMenu = this.$refs.navMenu;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            navMenu.classList.toggle('hidden');
        });
    },
    methods: {
        handleScroll() {
            const header = this.$refs.header;
            const fixedNav = header.offsetTop;

            if (window.pageYOffset > fixedNav) {
                header.classList.add('navbar-fixed');
            } else {
                header.classList.remove('navbar-fixed');
            }
        }
    }
};
</script>