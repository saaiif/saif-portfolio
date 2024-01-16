import { useState } from "react";

export default function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return !localStorage.getItem("selectedTheme") ? "dark" : localStorage.getItem("selectedTheme");
  });

  return { isDarkMode, setIsDarkMode };
}
