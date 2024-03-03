import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyle = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black';

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};
