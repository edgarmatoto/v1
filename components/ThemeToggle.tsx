"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoonFill } from 'react-icons/bs';


export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`rounded-md mr-2`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <BsMoonFill size={26} /> : <BsSun size={26} />}
    </button>
  );
};