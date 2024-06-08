export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "pulse-slow": "pulse 5s linear infinite",
        "ping-gone": "ping 1s cubic-bezier(0, 0, 0.2, 1) 1 forwards",
      },
      fontFamily: {
        hind: ['"Hind Siliguri"'],
      },
    },
  },
  plugins: [],
};
