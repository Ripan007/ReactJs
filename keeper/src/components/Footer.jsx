import React from "react";

var year = new Date().getFullYear();
console.log(year);

function Footer() {
  return (
    <footer className="footer">
      <p>CopyRight &copy; {year} </p>
    </footer>
  );
}

export default Footer;
