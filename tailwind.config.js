

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         bubbleUp: {
//           '0%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
//           '100%': { transform: 'translateY(-100vh) scale(0.6)', opacity: '0' },
//         },
//       },
//       animation: {
//         bubbleUp: 'bubbleUp 6s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         bubble: {
//           "0%": { transform: "translateY(0) scale(1)", opacity: "0.9" },
//           "30%": { opacity: "0.8" },
//           "100%": { transform: "translateY(-120vh) scale(0.6)", opacity: "0" },
//         },
//       },
//       animation: {
//         "bubble-slow": "bubble 9s ease-in-out infinite",
//         "bubble-med": "bubble 7s ease-in-out infinite",
//         "bubble-fast": "bubble 5s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         bubbleUp: {
//           '0%': { transform: 'translateY(0)', opacity: 1 },
//           '100%': { transform: 'translateY(-80px)', opacity: 0.2 },
//         },
//       },
//       animation: {
//         bubble: 'none',
//         bubbleUp: 'bubbleUp 3s infinite',
//       },
//       transitionDelay: {
//         75: '75ms',
//         100: '100ms',
//         150: '150ms',
//         200: '200ms',
//       },
//     },
//   },
//   plugins: [],
// };