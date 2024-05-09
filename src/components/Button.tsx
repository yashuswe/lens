import React from 'react';

const Button = ({ btnText, lightText, darkText }: { btnText: string; lightText: string; darkText: string; }) => {
  return (
    <button className={`dark:text-${darkText} light:text-${lightText} p-3 rounded-2xl border light:border-${lightText} dark:border-${darkText} text-md mt-4 mb-20 flex items-center justify-center gap-15 transition duration-300`}>
      {btnText}
    </button>
  );
};

export default Button;
