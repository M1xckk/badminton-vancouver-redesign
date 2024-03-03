// components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
