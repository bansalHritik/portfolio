import React from 'react';

export const TypeWriter = ({ text, texts }) => {
  return (
    <p className="animate-type text-4xl my-5 w-fit overflow-hidden whitespace-nowrap border-r-4 border-r-white font-bold">
      {text}
    </p>
  );
};
