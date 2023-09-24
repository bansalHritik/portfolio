import React from 'react';

export const Textfield = ({ placeholder, name, id, className, ...props }) => (
  <input
    placeholder={placeholder}
    type="text"
    name={name}
    id={id}
    className={
      'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' +
      (className ?? '')
    }
    {...props}
  />
);
