"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import About from "../../public/assets/aboutLatest.webp";

const AboutUs = () => {
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? "gray-900" : "white";

  return (
    <div>
        <div>
        <Heading HeadingText="About Us" />
        <div>
    </div>
    <div
      className={`flex w-auto bg-${
        theme === "dark" ? "[#1b1c1e]" : "[#e2f2ff]"
      } rounded-xl p-8 transition duration-300 ease-in-out`}
    >
      
          <div className="flex flex-col items-start justify-center">
            <div className="text-2xl font-semibold mt-8 dark:text-white light:text-black">
              Welcometo LENS
            </div>
            <div className="light:text-[rgba(57,57,57,.9)] dark:text-[#cfcfcf;] text-xs sm:text-sm md:text-base lg:text-lg font-light mt-1 md:mt-2 opacity-80 px-1 md:px-0 w-3/4 md:w-75 leading-relaxed">
              We put our hearts, souls and sweat into designing and developing
              custom AI - powered solutions for your business so you don{`&apos`}t have
              to.
            </div>
            <Button btnText="Learn More" darkText="white" lightText="black" />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default AboutUs;
