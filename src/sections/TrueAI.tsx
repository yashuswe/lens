"use client";
import { useTheme } from "next-themes";
import React from "react";
import vector from "../../public/assets/vectorAi.webp";
import Image from "next/image";
import underline from "../../public/assets/underline_true.svg";
import Button from "@/components/Button";

const TrueAI = () => {
    const theme = useTheme();
    return (
        <div className="flex justify-center items-center w-full">
            <section className="trueAiBox bg-[#272e5c] dark:bg-[#242424] ">
                <div className="w-1/3 z-20 mt-4">
                    <Image src={vector} className="" alt=""></Image>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center mt-4">
                    <div className="flex justify-center items-center text-white text-4xl font-bold capitalize gap-4 mb-5">
                        MEET
                        <div className="relative">
                            <div>
                                <div className="flex animated-text">True-AI</div>
                                <Image src={underline} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=" text-white text-base font-medium leading-normal mb-4">
                        Design. Create. Deploy.
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="border-b-2 border-gray-300 w-10 rounded-lg"></div>
                        <div className="animated-text">
                            the Future of AI | Power to EDIT
                        </div>
                        <div className="text-white text-center text-sm capitalize mb-4">
                            Based On Your Website & Traffic Trends, Tru-AI Optimises Your
                            Website
                        </div>
                    </div>
                    <div className="text-white ">
                        {" "}
                        <Button btnText="Learn More" lightText="white" darkText="white" />
                    </div>
                </div>
                <div className="w-1/3 flex justify-end">
                    <video src="/assets/true_Ai.mp4" className="trueVid" autoPlay muted loop></video>
                </div>
            </section>
        </div>
    );
};

export default TrueAI;
