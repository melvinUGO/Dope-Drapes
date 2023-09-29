"use client";
import React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-fit mx-auto p-3 my-10 border rounded-md dark:border-[#666666]">
      <button
        className={` dark:text-[#FFFFFF] ${theme === "light" && "hidden"}`}
        onClick={() => setTheme("light")}
      >
        <FaSun />
      </button>
      <button
        className={`${theme === "dark" && "hidden"}`}
        onClick={() => setTheme("dark")}
      >
        <FaMoon />
      </button>
    </div>
  );
};

export default ThemeToggleButton;
