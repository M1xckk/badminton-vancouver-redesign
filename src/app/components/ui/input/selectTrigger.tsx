import React from 'react';

interface SelectTriggerProps {
  id: string;
  children: React.ReactNode;
  onClick: () => void; // Function to handle the opening of the select dropdown
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
