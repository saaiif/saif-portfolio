import React from "react";
import "./Dropdown.css";

type DropdownProps = {
  tabs: any[];
  setClickedIndex: (val: number) => void;
};

function Dropdown({ tabs, setClickedIndex }: DropdownProps) {
  return (
    <select onChange={(e) => setClickedIndex(tabs?.indexOf(e.target.value))}>
      {tabs?.map((tab) => (
        <option value={tab} key={tab}>
          {tab}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
