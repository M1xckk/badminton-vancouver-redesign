import React from 'react';

interface SelectValueProps {
  placeholder: string;
  value?: string; // Optional value to display if selected
}

export const SelectValue: React.FC<SelectValueProps> = ({ placeholder, value }) => {
  return <span>{value || placeholder}</span>;
};
