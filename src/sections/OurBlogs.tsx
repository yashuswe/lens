import Heading from "@/components/Heading";
import React from "react";

const OurBlogs = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center text-center mx-auto  mb-16">
      <Heading HeadingText="OUR BLOGS" />
      <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-center w-3/5">
        Inhouse Mindscape{" "}
      </h1>{" "}
      <div className="w-[70%] grid grid-cols-[1fr_1fr] gap-5">
        <div className="flex relative">
          <div className="w-[150px] h-[100px] shrink-0 blur-[70px] absolute right-[-70px] bottom-[-100px] rounded-[255px] bg-[#fbc976]"></div>
          <div className=" border overflow-hidden px-[25px] mt-4 w-auto py-5 rounded-[20px] border-solid border-transparent bg-white dark:bg-[#1b1c1e]">
            <div className="group hover:opacity-100 hover:translate-y-[-3rem] transition duration-300 ease-in-out hover:bg-[#fff6e6] px-6">
              <span className="text-[rgb(248,99,96)] text-xl font-medium leading-[140.7%] text-left">
                New!
              </span>
              <div>
                <h2 className="text-[28px] font-normal leading-[36.8px] tracking-[1.1px] text-black dark:text-white">
                  Generative AI
                </h2>
                <div className="bg-[rgb(255,246,205)] mt-2 flex justify-center items-center shrink-0 px-4 py-[26px] rounded-2xl">
                  In today{`&apos`}s data-driven marketing world, keeping up with
                  content creation demands can be a challenge. Read our latest
                  blog to explore the power of Generative AI and its potential
                  to reshape the marketing landscape....
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 mt-3 transition duration-500 ease-in-out">
                <a href="https://lenscorp.ai/blogs/The%20Evolution%20of%20AI%20in%20Games">
                  <button className="text-[#ff5d5b] bg-transparent text-[17px] flex items-center gap-1 relative transition-[top] duration-[0.5s] ease-[ease] p-0 border-[none] top-0">
                    Read More&gt;&gt;&gt;
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div className="w-[150px] h-[100px] shrink-0 blur-[100px] absolute top-[-50px] right-[-90px] rounded-[199px] bg-[#00b2fc]"></div>
          <div className=" border overflow-hidden px-[25px] mt-4 w-auto rounded-[20px] border-solid border-transparent bg-white dark:bg-[#1b1c1e]">
            <div className="group hover:opacity-100 hover:translate-y-[-3rem] transition duration-300 ease-in-out hover:bg-[rgb(242,249,255)] px-6">
              <span className="text-gray-600 text-xl font-medium leading-[140.7%] text-left">
                April 25, 2024{" "}
              </span>
              <div>
                <h2 className="text-[28px] font-normal leading-[36.8px] tracking-[1.1px] text-black dark:text-white">
                  The Evolution of AI in Games
                </h2>
                <div className="bg-[rgb(242,246,255)] mt-2 flex justify-center items-center shrink-0 px-4 py-[26px] rounded-2xl">
                  The integration of artificial intelligence (AI) within the
                  gaming industry has been a remarkable journey, marked by
                  continual innovation. Read our latest blog to dive deep into
                  the fascinating history of AI in games and discover the
                  evolution that continues to shape the future of play!...
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 mt-3 transition duration-500 ease-in-out">
                <a href="https://lenscorp.ai/blogs/Generative%20AI">
                  <button className="text-[#ff5d5b] bg-transparent text-[17px] flex items-center gap-1 relative transition-[top] duration-[0.5s] ease-[ease] p-0 border-[none] top-0">
                    Read More&gt;&gt;&gt;
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
