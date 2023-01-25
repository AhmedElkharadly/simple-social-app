import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

import "./scrollBottom.css";

const ScrollToBottom = () => {
  const [showTopBtn, setShowTopBtn] = useState(
    document.body.offsetHeight > 700 ? true : false
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: "smooth",
    });
    console.log("down");
  };
  return (
    <div className="btm-to-top">
      {" "}
      {showTopBtn && (
        <FaAngleDown className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
    </div>
  );
};
export default ScrollToBottom;
