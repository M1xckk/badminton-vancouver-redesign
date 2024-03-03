import React from 'react';

interface SelectItemProps {
  value: string;
  onSelect: (value: string) => void; // Function to handle selection of an item
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, onSelect, children }) => {
  return <li onClick={() => onSelect(value)}>{children}</li>;
};
