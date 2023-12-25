import React from "react";
// Styles
import "./footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <main>
        <span>
          Copyright © 2023 <Link href="/">hawkdeveloper.com</Link>
        </span>
        <span>
          <h2>
            By Hawk<span>.</span>
          </h2>
        </span>
      </main>
    </footer>
  );
};

export default Footer;
