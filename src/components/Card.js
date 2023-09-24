import React from 'react';

export const Card = ({ className, children }) => {
  return (
    <div className={'flex shadow-md shadow-blue-primary border rounded-md border-blue-primary ' + (className ?? '')}>
      {children}
    </div>
  );
};
