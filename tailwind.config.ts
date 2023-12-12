import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",
          secondary: "#4b5563",
          accent: "#33e8c9",
          neutral: "#000000",
          "base-100": "#ffffff",
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "mytheme", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  theme: {
    container: {
      center: true,
      padding: '0px'
    },
    extend: {
    //   screens: {
    //     'cs'  : '228px',
    //     'sm' : '400px',
    //     'kcs' : '50px',
    //     'lg' : '1033px'
    // },
      boxShadow: {
        'custom': '0px 18px 34px 0px rgba(218, 154, 59, 0.2)',
      },

      backgroundImage: {
        'hero' : "url('/assets/images/bg-dot.svg')",
        'orange' : "url('/assets/images/bg-orange.svg')"
      },
      colors: {
        primary: colors.blue,
        gold: colors.amber,
      },
    },
    fontFamily: {
      sans: ["ClashGrotesk"],
      display: ["ClashGrotesk"],
      body: ["ClashGrotesk"],
    },
  },
};
