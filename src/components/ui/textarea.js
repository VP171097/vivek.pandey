import React from 'react';

export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`w-full px-3 py-2 rounded ${className}`}
      {...props}
    ></textarea>
  );
};