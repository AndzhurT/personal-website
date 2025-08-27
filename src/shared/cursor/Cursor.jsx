import React, { useRef, useEffect } from "react";
import "./Cursor.css";

const Cursor = ({ children }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    const isBlog = /\/blog\/\S*/gm.test(path)

    const removeMouse = () => {
      cursor.setAttribute("style", `display: none`);
    };

    // Add hover functionality
    const addHoverEffect = () => {
      cursor.classList.add("hover-mode");
    };

    const removeHoverEffect = () => {
      cursor.classList.remove("hover-mode");
    };

    // trailing cursor function
    const trail = (ev) => {
      if (isBlog) {
        cursor.setAttribute("style", `display: none`);
      } else {
        cursor.setAttribute(
          "style",
          `transform: translate3d(${ev.clientX - 10}px, ${ev.clientY - 10}px, 0px)`
        );
      }
    };

    // add event listeners
    document.addEventListener("mousemove", trail);
    document.addEventListener("mouseleave", removeMouse);


    // BASED ON SPAN AND OTHER ELEMENTS, YOU CAN MAKE THE CURSOR HOVER

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, h1, h2, h3, img, input, textarea, select, [role="button"], .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", trail);
      document.removeEventListener("mouseleave", removeMouse);
      
      // Clean up hover event listeners
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    }
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      {children}
    </>
  );
};

export default Cursor;
