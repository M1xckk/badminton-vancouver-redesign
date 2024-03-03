// components/ui/button.tsx
import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Extend with any additional props as needed
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;
