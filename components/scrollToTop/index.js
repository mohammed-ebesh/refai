"use client";
import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function App() {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  return (
    <div>
      {scrollToTop && (
        <button
          className="bg-[#EECF73] text-[#fff] z-[500] text-center fixed p-[1rem] text-[20px] hover:bg-[#e2c263] bottom-[40px] right-[20px]"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      )}
    </div>
  );
}
