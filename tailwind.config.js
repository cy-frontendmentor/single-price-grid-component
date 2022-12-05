/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-karla)"],
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        "yellow-bright": "hsl(71, 73%, 54%)",
        "gray-light": "hsl(204, 43%, 93%)",
        "blue-grayish": "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
