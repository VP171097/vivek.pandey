import React from 'react';

export const Badge = ({ variant, className, children }) => {
  let variantClasses = "";

  switch (variant) {
    case 'secondary':
      variantClasses = "bg-purple-800 text-purple-200 hover:bg-purple-700 border border-purple-700";
      break;
    // Add more variants as needed
    default:
      variantClasses = "";
  }

  return (
    <span className={`inline-block px-2 py-1 rounded text-sm font-medium ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};