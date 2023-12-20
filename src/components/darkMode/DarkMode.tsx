import "./DarkMode.scss";
import { MoonIcon, SunIcon } from "../../assets/icons/DarkmodeToggle";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark-mode">
      <input
        className="dark-mode--input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark-mode--label" htmlFor="darkmode-toggle">
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default DarkMode;
