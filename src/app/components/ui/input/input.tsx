import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-600 block w-full sm:text-lg border-gray-300 rounded-md" {...props} />;
};
