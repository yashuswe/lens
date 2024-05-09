import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";

const Services = () => {
  return (
    <div className="grid place-items-center pb-4 overflow-hidden">
      <Heading HeadingText="Services" />
      <div className="w-auto text-center text-4xl font-medium mb-5 font-sans">
        We provide Artificial Intelligence Services
      </div>
      <div className="flex flex-col gap-5">
        <div className="lg:flex md:flex-row sm:flex-col gap-5">
          <div
            className="absolute pointer-events-none h-52 w-64 border bg-[#01c99b] rounded-full blur-[170px] top-neg-40 left-neg-5
          0"
          ></div>
          <div className="relative w-[470px] h-min overflow-hidden bg-serviceCard transition duration-300 rounded-lg">
            <div className="light:bg-white dark:bg-[#1b1c1e] rounded-lg pb-4 hover:bg-transparent hover:border border-[#01c99b]">
              <div className="flex flex-row justify-start relative group">
                <div>
                  <span className="flex-shrink-0 text-gray-700 text-7xl font-semibold leading-tight absolute top-8 left-10 opacity-20 transition duration-300">
                    0
                  </span>
                  <span className="flex-shrink-0 text-gray-400 text-7xl font-semibold leading-tight absolute top-8 left-20 transition duration-300 group-hover:text-green-500">
                    1
                  </span>
                </div>
                <div className="border-none text-green-500 text-4xl font-medium leading-normal ml-[90px] mt-12 transition duration-300 transform-gpu group-hover:translate-x-6 group-hover:text-[#707070]">
                  Biometrics
                </div>
              </div>

              <h5 className="w-4/5 text-gray-600 mx-auto mt-6 text-lg font-bold leading-7">
                Academia-backed & In-house researched State-of-the-Art Face,
                Fingerprint, and Iris Recognition SDKs. Enable real-time
                automated Biometric applications on edge devices even without an
                active internet connection.
              </h5>
            </div>
          </div>
          <div className="absolute pointer-events-none h-52 w-64 border bg-[#00b2fc] rounded-full blur-[170px] top-neg-40 right-10"></div>
          <div className="relative w-[470px] h-min overflow-hidden bg-serviceCard transition duration-300 rounded-lg">
            <div className="light:bg-white dark:bg-[#1b1c1e] rounded-lg pb-4 hover:bg-transparent hover:border border-[#00b2fc]">
              <div className="flex flex-row justify-start relative group">
                <div>
                  <span className="flex-shrink-0 text-gray-700 text-7xl font-semibold leading-tight absolute top-8 left-10 opacity-20 transition duration-300">
                    0
                  </span>
                  <span className="flex-shrink-0 text-gray-300 text-7xl font-semibold leading-tight absolute top-8 left-20 transition duration-300 group-hover:text-[#00b2fc]">
                    2
                  </span>
                </div>
                <div className="border-none text-[#00b2fc] text-4xl font-medium leading-normal ml-[90px] mt-12 transition duration-300 transform-gpu group-hover:translate-x-6 group-hover:text-[#707070]">
                  Image Analysis
                </div>
              </div>

              <h5 className="w-4/5 text-gray-600 mx-auto mt-6 text-lg font-bold leading-7">
                Outsource the overly complex image analysis work to our
                intelligent machines that adaptively learn, so you can focus on
                making the best decisions for your business.
              </h5>
            </div>
          </div>
        </div>
        <div className="gap-5 lg:flex md:flex-row sm:flex-col">
          {" "}
          <div className="absolute pointer-events-none h-52 w-64 border bg-[#FF605F] rounded-full blur-[170px] top-neg-40 left-neg-40"></div>
          <div className="relative w-[470px] h-min overflow-hidden bg-serviceCard transition duration-300 rounded-lg">
            <div className="light:bg-white dark:bg-[#1b1c1e] rounded-lg pb-4 hover:bg-transparent hover:border border-[#FF605F]">
              <div className="flex flex-row justify-start relative group">
                <div>
                  <span className="flex-shrink-0 text-gray-700 text-7xl font-semibold leading-tight absolute top-8 left-10 opacity-20 transition duration-300">
                    0
                  </span>
                  <span className="flex-shrink-0 text-gray-300 text-7xl font-semibold leading-tight absolute top-8 left-20 transition duration-300 group-hover:text-[#FF605F]">
                    3
                  </span>
                </div>
                <div className="border-none text-[#FF605F] text-4xl font-medium leading-normal ml-[90px] mt-12 transition duration-300 transform-gpu group-hover:translate-x-6 group-hover:text-[#707070]">
                  Cross-Media Translation{" "}
                </div>
              </div>

              <h5 className="w-4/5 text-gray-600 mx-auto mt-6 text-lg font-bold leading-7">
                Will something like Siri or Alexa enhance your business? We can
                deliver text-to-speech, text-to-image, speech-to-text,
                speech-to-image, speech-to-image, image-to-text and
                image-to-speech solutions for maximum convenience.
              </h5>
            </div>
          </div>
          <div className="absolute pointer-events-none h-52 w-64 border bg-[#FF9F31] rounded-full blur-[170px] top-neg-40 right-10"></div>
          <div className="relative w-[470px] h-min overflow-hidden bg-serviceCard transition duration-300 rounded-lg">
            <div className="light:bg-white dark:bg-[#1b1c1e] rounded-lg pb-4 hover:bg-transparent hover:border border-[#FF9F31]">
              <div className="flex flex-row justify-start relative group">
                <div>
                  <span className="flex-shrink-0 text-gray-700 text-7xl font-semibold leading-tight absolute top-8 left-10 opacity-20 transition duration-300">
                    0
                  </span>
                  <span className="flex-shrink-0 text-gray-300 text-7xl font-semibold leading-tight absolute top-8 left-20 transition duration-300 group-hover:text-[#FF9F31]">
                    4
                  </span>
                </div>
                <div className="border-none text-[#FF9F31] text-4xl font-medium leading-normal ml-[90px] mt-12 transition duration-300 transform-gpu group-hover:translate-x-6 group-hover:text-[#707070]">
                  3D Modelling and Design.
                </div>
              </div>

              <h5 className="w-4/5 text-gray-600 mx-auto mt-6 text-lg font-bold leading-7">
                We offer services for automated generation of 3D assets with
                realistic shapes and textures. We animate the 3D models with
                voice and videos with an aim to retarget voice and/or
                expressions with pose from a single Image/video.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
