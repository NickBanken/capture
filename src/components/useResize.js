import React, { useEffect, useState } from "react";

export const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    console.log(windowWidth, windowHeight);
  };

  useEffect(() => {
    resizeWindow();

    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return [windowWidth, windowHeight];
};
