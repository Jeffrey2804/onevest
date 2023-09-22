module.exports = {
  content: [
    "./index.html",
    "./src/Components/Companies/*.{js,jsx,ts,tsx}",
    "./src/Components/SignUp/*.{js,jsx,ts,tsx}",
    "./src/Components/FounderOnboarding/*.{js,jsx,ts,tsx}",
    "./src/Components/Message/*.{js,jsx,ts,tsx}",
    "./src/Components/MyProfile/*.{js,jsx,ts,tsx}",
    "./src/Components/PartnersRow/*.{js,jsx,ts,tsx}",
    "./src/Components/Footer/*.{js,jsx,ts,tsx}",
    "./src/Components/FAQAccordion/*.{js,jsx,ts,tsx}",
    "./src/Pages/FAQ/*.{js,jsx,ts,tsx}",
    "./src/Pages/Notifications/*.{js,jsx,ts,tsx}",
    "./src/Pages/NewGoal/*.{js,jsx,ts,tsx}",
    "./src/Pages/ForAdvisors/*.{js,jsx,ts,tsx}",
    "./src/Pages/ForCompanies/*.{js,jsx,ts,tsx}",
    "./src/Pages/Objectives/*.{js,jsx,ts,tsx}",
    "./src/Pages/*/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],

  // ...
  theme: {
    extend: {
      screens: {
        pc: "1920px",
        xs1: "400px",
      },
      colors: {
        "primary-color": "#0E6EFF",
        "primary-50": "#E7F1FF",
        "primary-100": "#B4D2FF",
        "primary-dark": "#063173",
      },
      borderWidth: {
        3: "3px",
      },
      padding: {
        7.5: "30px",
      },
      margin: {
        7.5: "30px",
      },
      borderRadius: {
        input: "15px",
        pill: "40px",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      width: {
        16: "60px",
        18: "72px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      height: {
        16: "60px",
        18: "72px",
      },
    },
  },
};
