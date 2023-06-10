import React from "react";
const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <h6>React Router 5</h6>
      <p>
        Copy &copy; {today.getFullYear()} || <small>All Rights Reserved</small>
      </p>
    </footer>
  );
};

export default Footer;
