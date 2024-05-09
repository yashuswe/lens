"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Sun from "../../public/assets/sun.png";
import Moon from "../../public/assets/moon.png";
import Logo from "../../public/assets/logo.webp";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={` sticky bg-${theme === "dark" ? "gray-900" : "white"} text-${
        theme === "dark" ? "white" : "black"
      } fixed top-0 left-0 w-full flex justify-center items-center py-1 px-0 z-50 transition duration-500`}
      style={{
        background: theme === "dark" ? "hsla(0, 11%, 88%, .06)" : "white",
        WebkitBackdropFilter: theme === "dark" ? "blur(80px)" : "none",
        backdropFilter: theme === "dark" ? "blur(80px)" : "none",
      }}
    >
      <div className={`flex w-[85%] justify-between items-center`}>
        <Image src={Logo} height={70} width={80} className="mt-2 pt-1" alt="" />
        <div className="flex min-h-fit-content min-h-fit-content w-fit-content flex-row items-center gap-x-30 bg-transparent">
          <div>
            <a
              className={` nav__link hover:font-semibold `}
              target="_blank"
              href="https://makemyweb.ai/"
            >
              MakeMyWeb.
            </a>
            <a
              className={` nav__link  hover:font-semibold `}
              target="_blank"
              href="https://makemyweb.ai/"
            >
              Home
            </a>
            <a
              className={` nav__link  hover:font-semibold`}
              target="_blank"
              href="https://makemyweb.ai/"
            >
              Company
            </a>
            <a
              className={` nav__link  hover:font-semibold`}
              target="_blank"
              href="https://makemyweb.ai/"
            >
              Blogs
            </a>
          </div>
        </div>
      </div>
      <button onClick={toggleTheme} className="p-3 focus:outline-none">
        {theme === "dark" ? (
          <Image src={Sun} alt="Light Theme" width={20} height={20} />
        ) : (
          <Image src={Moon} alt="Dark Theme" width={20} height={20} />
        )}
      </button>
    </nav>
  );
};

export default Header;
