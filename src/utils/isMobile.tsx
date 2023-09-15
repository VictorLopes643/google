"use client";

import React, { useEffect, useState } from "react";

export default function IsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobileWidth = 768;
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileWidth]);

  return isMobile;
}
