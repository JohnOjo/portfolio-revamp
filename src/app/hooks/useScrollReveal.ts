import { useEffect } from "react";

export const useScrollReveal = (
  selector: string,
  visibleOffset: number = 80
) => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(selector);
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - visibleOffset) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, [selector, visibleOffset]);
};
