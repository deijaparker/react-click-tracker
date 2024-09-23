// src/Counter.js
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // Increment the click count when mousedown event happens
  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener("mousedown", increment);

    // Clean up event listener on unmount or re-render
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return <h1>Document Clicks: {clickCount}</h1>;
}
