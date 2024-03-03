import React from 'react';

interface SelectContentProps {
  position: string;
  children: React.ReactNode;
  isOpen: boolean; // Boolean to control the visibility of the dropdown content
}

export const SelectContent: React.FC<SelectContentProps> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return <ul>{children}</ul>;
};
