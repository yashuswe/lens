import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import join from "../../public/assets/join.svg";
import ethics from "../../public/assets/ethics.svg";
import goal from "../../public/assets/goal.svg";

const OurVision = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center text-center mx-auto w-3/5 mb-16">
      <Heading HeadingText="OUR VISION" />
      <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-center">
        AI for Social Good{" "}
      </h1>{" "}
      <div className="text-gray-600 dark:text-[#8a8a8a]  lg:text-lg md:text-lg sm:text-sm leading-[29.58px] mt-6 mb-6 text-center">
        Explainable AI (XAI) is an emerging subject of machine learning research
        that refers to strategies that try to provide transparency to typically
        opaque AI models and their predictions. market.
      </div>
      <div className="grid-check mt-6">
        <div className="mx-auto px-56">
          <div className="grid-check">
            <div className="transform hover:scale-110 transition duration-300 ease-in-out">
              <h3 className="text-[28px] font-semibold text-black dark:text-white transition-[0.3s]">
                Diversity and Fairness
              </h3>
              <span className="w-[250px] text-left inline-block text-base text-black dark:text-[#8a8a8a] transition-[0.3s] mx-0 my-4">
                When training our AI models, we consider ethical and social
                implications of algorithm-based decision making. Our solutions
                use high-quality and fairly-represented data sets to eliminate
                human cognitive biases.
              </span>
            </div>
            <div>
              <span className="inline-block z-20 bg-white dark:bg-transparent border-1-[#717171] dark:border-l-[#717171] p-1 rounded-[29.297px] border-4 border-solid">
                <Image src={join} alt=""></Image>
              </span>
              <span className="z-10 w-0 h-[85%] translate-x-[27.5px] translate-y-[-3px] border-l-2 border-l-[#717171] border-dashed hidden md:block"></span>
            </div>
          </div>
          <div className="grid-check ml-32 mt-2">
            <div className=""></div>
            <div>
              <span className="inline-block z-20 bg-white dark:bg-transparent border-1-[#717171] dark:border-l-[#717171] p-1 rounded-[29.297px] border-4 border-solid">
                <Image src={goal} alt=""></Image>
              </span>
              <span className="z-10 w-0 h-[85%] translate-x-[27.5px] translate-y-[-3px] border-l-2 border-l-[#717171] border-dashed hidden md:block"></span>
            </div>
            <div className="transform hover:scale-110 transition duration-300 ease-in-out">
              <h3 className="text-[28px] font-semibold text-black dark:text-white text-left transition-[0.3s] ">
                Regulatory Compliance
              </h3>
              <span className="w-[250px] text-left inline-block text-base text-black dark:text-[#8a8a8a] transition-[0.3s] mx-0 my-4">
                When training our AI models, we consider ethical and social
                implications of algorithm-based decision making. Our solutions
                use high-quality and fairly-represented data sets to eliminate
                human cognitive biases.
              </span>
            </div>
          </div>
          <div className="grid-check">
            <div className="transform hover:scale-110 transition duration-300 ease-in-out">
              <h3 className="text-[28px] font-semibold text-black dark:text-white transition-[0.3s] text-left">
                Code of Ethics{" "}
              </h3>
              <span className="w-[250px] text-left inline-block text-base text-black dark:text-[#8a8a8a] transition-[0.3s] mx-0 my-4">
                LENS believes in a just, non-violent world of equality and
                fairness. We prize democratic values, civil liberties and open
                and informed debate. When used to further these values,
                algorithm-based decision-making models can continue to make the
                world a safer, better place for everyone.
              </span>
            </div>
            <div>
              <span className="inline-block z-20 bg-white dark:bg-transparent border-1-[#717171] dark:border-l-[#717171] p-1 rounded-[29.297px] border-4 border-solid">
                <Image src={ethics} alt=""></Image>
              </span>
              <span className="z-10 w-0 h-[85%] translate-x-[27.5px] translate-y-[-3px] border-l-2 border-l-[#717171] border-dashed hidden md:block"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
