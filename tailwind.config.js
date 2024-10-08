/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "rgba(244, 244, 245, 1)",
          200: "rgba(229, 231, 235, 1)",
          300: "rgba(209, 213, 219, 1)",
          400: "rgba(156, 163, 175, 1)",
          500: "rgba(107, 114, 128, 1)",
          600: "rgba(75, 85, 99, 1)",
          700: "rgba(55, 65, 81, 1)",
          800: "rgba(31, 41, 55, 1)",
          900: "rgba(17, 24, 39, 1)",
        },
        primary: {
          100: "rgba(214, 228, 255, 1)",
          200: "rgba(173, 200, 255, 1)",
          300: "rgba(132, 169, 255, 1)",
          400: "rgba(102, 144, 255, 1)",
          500: "rgba(51, 102, 255, 1)",
          600: "rgba(37, 78, 219, 1)",
          700: "rgba(25, 57, 183, 1)",
          800: "rgba(16, 38, 147, 1)",
          900: "rgba(9, 26, 122, 1)",
        },
        success: {
          600: "rgba(69, 170, 35, 1)",
          100: "rgba(236, 252, 214, 1)",
          200: "rgba(212, 249, 174, 1)",
          300: "rgba(178, 237, 130, 1)",
          400: "rgba(143, 220, 96, 1)",
          500: "rgba(96, 198, 49, 1)",
          700: "rgba(46, 142, 24, 1)",
          800: "rgba(27, 114, 15, 1)",
          900: "rgba(13, 95, 9, 1)",
        },
        info: {
          100: "rgba(206, 251, 255, 1)",
          200: "rgba(157, 241, 255, 1)",
          300: "rgba(109, 225, 255, 1)",
          400: "rgba(72, 205, 255, 1)",
          500: "rgba(12, 174, 255, 1)",
          600: "rgba(8, 135, 219, 1)",
          700: "rgba(6, 101, 183, 1)",
          800: "rgba(3, 72, 147, 1)",
          900: "rgba(2, 51, 122, 1)",
        },
        warning: {
          100: "rgba(255, 250, 208, 1)",
          200: "rgba(255, 243, 161, 1)",
          300: "rgba(255, 235, 114, 1)",
          400: "rgba(255, 228, 78, 1)",
          500: "rgba(255, 215, 20, 1)",
          600: "rgba(219, 180, 14, 1)",
          700: "rgba(183, 147, 10, 1)",
          800: "rgba(147, 116, 6, 1)",
          900: "rgba(122, 93, 3, 1)",
        },
        danger: {
          100: "rgba(255, 231, 212, 1)",
          200: "rgba(255, 201, 170, 1)",
          300: "rgba(255, 164, 127, 1)",
          400: "rgba(255, 129, 96, 1)",
          500: "rgba(255, 71, 43, 1)",
          600: "rgba(219, 41, 31, 1)",
          700: "rgba(183, 21, 25, 1)",
          800: "rgba(147, 13, 27, 1)",
          900: "rgba(122, 8, 29, 1)",
        },
      },
      fontSize: {
        "heading-1-bold": "2rem",
        "heading-1-medium": "2rem",
        "heading-1-reguler": "2rem",
        "heading-2-bold": "1.75rem",
        "heading-2-medium": "1.75rem",
        "heading-2-reguler": "1.75rem",
        "heading-3-reguler": "1.5rem",
        "heading-3-medium": "1.5rem",
        "heading-3-bold": "1.5rem",
        "heading-4-reguler": "1.25rem",
        "heading-4-medium": "1.25rem",
        "heading-4-bold": "1.25rem",
        "heading-5-reguler": "1.125rem",
        "heading-5-medium": "1.125rem",
        "heading-5-bold": "1.125rem",
        "text-l-reguler": "1rem",
        "text-l-medium": "1rem",
        "text-l-bold": "1rem",
        "text-m-reguler": "0.875rem",
        "text-m-medium": "0.875rem",
        "text-m-bold": "0.875rem",
        "text-s-reguler": "0.75rem",
        "text-s-medium": "0.75rem",
        "text-s-bold": "0.75rem",
        "text-xs-bold": "0.625rem",
        "text-xs-reguler": "0.625rem",
        "text-xs-medium": "0.625rem",
      },
      fontWeight: {
        "heading-1-bold": 700,
        "heading-1-medium": 500,
        "heading-1-reguler": 400,
        "heading-2-bold": 700,
        "heading-2-medium": 500,
        "heading-2-reguler": 400,
        "heading-3-reguler": 400,
        "heading-3-medium": 500,
        "heading-3-bold": 700,
        "heading-4-reguler": 400,
        "heading-4-medium": 500,
        "heading-4-bold": 700,
        "heading-5-reguler": 400,
        "heading-5-medium": 500,
        "heading-5-bold": 700,
        "text-l-reguler": 400,
        "text-l-medium": 500,
        "text-l-bold": 700,
        "text-m-reguler": 400,
        "text-m-medium": 500,
        "text-m-bold": 700,
        "text-s-reguler": 400,
        "text-s-medium": 500,
        "text-s-bold": 700,
        "text-xs-bold": 700,
        "text-xs-reguler": 400,
        "text-xs-medium": 500,
      },
      fontFamily: {
        "SF-Pro": ["SF-Pro", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
