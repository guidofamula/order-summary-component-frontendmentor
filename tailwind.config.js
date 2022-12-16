/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      backgroundImage: {
        "mobile-pattern": "url('../images/pattern-background-mobile.svg')",
        "desktop-pattern": "url('../images/pattern-background-desktop.svg')",
      },
      screens: {
        sm: "359px",
        "2xl": "1440px",
      },
      colors: {
        custom: {
          "pale-blue": "hsl(var(--pale-blue) / <alpha-value>)",
          "bright-blue": "hsl(var(--bright-blue) / <alpha-value>)",
          "v-p-blue": "hsl(var(--very-pale-blue) / <alpha-value>)",
          "desa-blue": "hsl(var(--desaturated-blue) / <alpha-value>)",
          "dark-blue": "hsl(var(--dark-blue) / <alpha-value>)",
        },
      },
      fontSize: {
        paragraph: "16px",
      },
    },
  },
  plugins: [],
};
