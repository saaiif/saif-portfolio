export const darkMode = localStorage.getItem("selectedTheme")
  ? localStorage.getItem("selectedTheme") === "dark"
  : localStorage.getItem("selectedTheme") === null;
