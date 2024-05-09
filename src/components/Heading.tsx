import React from "react";

const Heading = ({HeadingText}:{HeadingText:string}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mt-20 font-rale gap-5 justify-center text-center lg:text-3xl md:text-2xl sm:text-xl font-semibold">{HeadingText}</div>
      <div className="underline"></div>
    </div>
  );
};

export default Heading;
