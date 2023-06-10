import React from "react";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header>
      <h1>{title}</h1>
      <p>{width}</p>
    </header>
  );
};

export default Header;
