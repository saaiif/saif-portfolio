import React, { Children, ReactNode } from "react";

export const darkMode = localStorage.getItem("selectedTheme")
  ? localStorage.getItem("selectedTheme") === "dark"
  : localStorage.getItem("selectedTheme") === null;

interface EachProps {
  of: ReactNode[];
  render: (item: ReactNode, index: number) => ReactNode;
}

export const Each: React.FC<EachProps> = ({ of, render }) => {
  return Children.toArray(of?.map((item, index) => render(item, index)));
};
