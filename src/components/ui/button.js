import React from 'react';

export const Button = ({ type, className, children, ...props }) => {
  return (
    <button type={type} className={`px-4 py-2 rounded ${className}`} {...props}>
      {children}
    </button>
  );
};