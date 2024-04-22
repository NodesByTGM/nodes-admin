/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#085A55",
          hover: "#085A55",
          active: "#085A55",
          darker: "#031F1E",
          light: {
            DEFAULT: "#E6EFEE",
            active: "#B2CCCA",
            hover: "#DAE6E6",
          },
          dark: {
            DEFAULT: "#064440",
            active: "#B2CCCA",
            hover: "#042826",
          },
        },
        secondary: "#D6DE21",
        success: "#018E51",
        danger: "#D11F54",
        warning: "#F7B307",
        light: "#FBFBFB",
        placeholder: "#757575",
        tooltip: "#828282",
        grey: {
          DEFAULT: "#EFEFEF",
          dark: "#D6D6D6",
          footer: "#F9F9F9",
        },
        adminprimary: {
          DEFAULT: "#212121",
        },
        customprimary: {
          DEFAULT: "#085A55",
        },
        customsecondary: {
          DEFAULT: "#212121",
        },
        paleyellow: {
          DEFAULT: "#FBFCE9",
        },
      },
      boxShadow: {
        normal: "0px 6px 20px 0px #0000000A",
        overlay: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
      },
      fontSize: {
        md: "16px",
      },
      backgroundImage: {
        darkgradient: "linear-gradient(180deg, #00000000 0%, #000000b3 62.92%)",
      },
    },
  },
  // plugins: [],
  // plugins: [
  //   // ...
  //   require('@tailwindcss/forms'),
  // ],
};
