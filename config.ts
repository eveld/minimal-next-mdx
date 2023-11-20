// Tailwind theme config
export const theme = {
  colors: {
    primary: {
      DEFAULT: "#6d28d9",
      dark: "#312e81",
      light: "#a5b4fc",
    },
    secondary: {
      DEFAULT: "#16a34a",
      dark: "#14532d",
      light: "#6ee7b7",
    },
    black: "#000",
    white: "#fff",
  },
};

// Navigation
export const navigation = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Introduction",
    children: [
      {
        title: "Introduction",
        link: "/introduction",
      },
      {
        title: "Getting Started",
        link: "/introduction/getting-started",
      },
      {
        title: "Installation",
        link: "/introduction/installation",
      },
    ],
  },
  {
    title: "Contact",
    link: "https://instruqt.com/",
  },
];
