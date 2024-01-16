import React from "react";

import { MoonIcon, SunIcon } from "../../assets/icons/DarkmodeToggle";
import { Dispatch, SetStateAction } from "react";

import "./DarkMode.scss";

type DarkModeProps = {
  setIsDarkMode?: Dispatch<SetStateAction<string | null>> | undefined;
};

const DarkMode = ({ setIsDarkMode }: DarkModeProps) => {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");

    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark" || selectedTheme === null) {
    setDarkMode();
  }

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode?.(e.target.checked ? "dark" : "light");
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className='dark-mode'>
      <input
        className='dark-mode--input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark" || selectedTheme === null}
      />
      <label className='dark-mode--label' htmlFor='darkmode-toggle'>
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default DarkMode;
