"use client";
import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import bg_light from "../../public/assets/bg_white.webp";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`bg-${theme === "dark" ? "gray-900" : "gray-200"} text-${
        theme === "dark" ? "white" : "black"
      }`}
    >
      {theme === "dark" ? (
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/bg_dark.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src={bg_light}
          alt="Light Background"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 text-start font-semibold flex flex-col items-start justify-center w-1/2 md:w-auto mr-32 ml-32">
        <h1
          className={` font-rale text-5xl md:text-7xl ${
            theme === "dark" ? "text-white" : "text-primary-color"
          } text-start mb-2`}
        >
          We are at the
        </h1>
        <h1
          className={` font-rale text-5xl md:text-7xl ${
            theme === "dark" ? "text-white" : "text-primary-color"
          } text-start mb-2`}
        >
          {" "}
          forefront of AI
        </h1>
        <div className="text-left text-lg font-light font-sans text-primary-color mt-4 ">
          From Conserving Wildlife to Automatically
        </div>
        <div className="text-left text-lg font-light font-sans text-primary-color mb-5 ">
          Generating Caricatures–{" "}
          <span className="font-bold">We Do It All </span>{" "}
        </div>
        <button className={`transition duration-300 ease-in-out border ${theme === 'dark' ? 'bg-white text-black border-white' : 'bg-black text-white border-black'} rounded-lg px-8 py-3 text-lg hover:bg-${theme === 'dark' ? 'black' : 'white'} hover:text-${theme === 'dark' ? 'white' : 'black'} focus:outline-none`}>
  Learn More
</button>
      </div>
    </div>
  );
};

export default Hero;
