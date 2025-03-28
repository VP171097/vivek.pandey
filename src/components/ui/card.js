import React from 'react';

export const Card = ({ className, children }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const CardTitle = ({ className, children }) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

export const CardDescription = ({ className, children }) => {
  return <p className={`text-gray-500 ${className}`}>{children}</p>;
};

export const CardContent = ({ children }) => {
  return <div>{children}</div>;
};