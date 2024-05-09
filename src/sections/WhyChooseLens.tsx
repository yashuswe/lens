import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import tick from "../../public/assets/tick.svg";
import green from "../../public/assets/green.webp";
import blue from "../../public/assets/blue.webp";
import red from "../../public/assets/red.webp";
import yellow from "../../public/assets/yellow.webp";

const ListItem = ({ text }: { text: string }) => (
  <div className="light:text-primary-black dark:text-white font-light text-base flex items-center gap-1.5 px-4 py-1">
    <Image src={tick} alt="" />
    <span>{text}</span>
  </div>
);

const WhyChooseLens = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center text-center mx-auto w-3/5">
      <Heading HeadingText="WHY CHOOSE LENS" />
      <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-center">
        AI-driven solutions backed by science
      </h1>{" "}
      <div className="text-gray-600 dark:text-[#8a8a8a] lg:text-lg md:text-lg sm:text-sm leading-[29.58px] mt-6 mb-6 text-center">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked
        via rigorous evaluations. With a global network of experts and
        academicians, we guarantee the most accurate and robust solutions in the
        market.
      </div>
      <div className="flex mt-4 mb-4 gap-1">
        <div className="flex flex-col gap-1">
          <ListItem text="State-of-the-art solutions" />
          <ListItem text="Fast & Efficient" />
          <ListItem text="No extra computation fee" />
          <ListItem text="No licensing fee" />
        </div>
        <div className="flex flex-col gap-1">
          <ListItem text="Lifetime support & upgrades" />
          <ListItem text="Plug-and-Play" />
          <ListItem text="24x7 Progress Monitoring" />
          <ListItem text="Incremental Updates" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-0 my-20 font-sans">
        <div className="relative">
          <div className=" w-[250px] h-[200px] shrink-0 blur-[170px] absolute rounded-[172px] -left-10 -top-10 bg-[#01c99b]"></div>
          <div className=" w-[250px] h-[450px] p-2 light:text-black dark:text-white flex flex-col justify-between items-center hover:border border-[#01c99b] hover:bg-transparent-green  relative m-2 rounded-3xl bg-white dark:bg-[#1b1c1e]">
            <div className="font-semibold text-[1.7rem] text-left flex p-2">
              Exclusive Rights
            </div>
            <Image className="animate-fadeInOut" src={green} alt="" />
            <div className=" font-light text-[#828282] text-base text-center pt-0 pb-6 px-6">
              Our mission is to make an impact in empowering human society with
              AI. Hence, all Intellectual Property Rights belongs to you.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-[299px] h-[200px] shrink-0 blur-[190px] absolute top-[-50px] right-[-90px] rounded-[199px] bg-[#00b2fc]"></div>
          <div className=" w-[250px] h-[450px] p-2  light:text-black dark:text-white flex flex-col justify-between items-center hover:border border-[#00b2fc] hover:bg-transparent-blue  relative m-2 rounded-3xl bg-white dark:bg-[#1b1c1e]">
            <div className="font-semibold text-[1.7rem] text-left flex p-2">
              Research Driven{" "}
            </div>
            <Image className="animate-fadeInOut" src={blue} alt="" />
            <div className=" font-light text-[#828282] text-base text-center pt-0 pb-6 px-6">
              We regularly benchmark our solutions via comparing industry-vide
              evaluations so our partners only get the best that AI can offer.
            </div>
          </div>{" "}
        </div>
        <div className="relative">
          <div className="w-[120px] h-[100px] shrink-0 blur-[80px] absolute bottom-[-30px] rounded-[191px] left-[60px] bg-[#ff6160]"></div>
          <div className=" w-[250px] h-[450px] p-2 light:text-black dark:text-white flex flex-col justify-between items-center hover:border border-[#ff6160] hover:bg-transparent-red  relative m-2 rounded-3xl bg-white dark:bg-[#1b1c1e]">
            <div className="font-semibold text-[1.7rem] text-left flex p-2">
              Plug and Play
            </div>
            <Image className="animate-fadeInOut" src={red} alt="" />
            <div className=" font-light text-[#828282] text-base text-center pt-0 pb-6 px-6">
              We provide AI-driven solutions into businesses where they can
              bring tangible value. Each solution is customized as per your
              needs and deployed on any computing device of your choice.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-[150px] h-[200px] shrink-0 blur-[170px] absolute right-[-70px] top-[-50px] rounded-[255px] bg-[#fbc976]"></div>
          <div className="w-[250px] h-[450px] p-2 light:text-black dark:text-white flex flex-col justify-between items-center hover:border border-[#fbc976] hover:bg-transparent-yellow  relative m-2 rounded-3xl bg-white dark:bg-[#1b1c1e]">
            <div className="font-semibold text-[1.7rem] text-left flex p-2">
              Lifetime Support{" "}
            </div>
            <Image className="animate-fadeInOut" src={yellow} alt="" />
            <div className=" font-light text-[#828282] text-base text-center pt-0 pb-6 px-6">
              Should you face any issues, we are always at your service. We
              provide lifetime technical support & upgrade options.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLens;
