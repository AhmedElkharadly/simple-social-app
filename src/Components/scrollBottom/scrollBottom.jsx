import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

// import { FaAngleDown } from "react-icons-fa";
import "./scrollBottom.css";

const ScrollToBottom = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    if (document.body.offsetHeight > 700) {
      setShowTopBtn(true);
    }
  }, []);
  useEffect(() => {
    setShowTopBtn(true);
  }, [document.body.offsetHeight > 700]);
  const goToTop = () => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: "smooth",
    });
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
