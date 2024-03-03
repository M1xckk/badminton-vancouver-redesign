import React, { FC } from 'react';

interface SelectContentProps {
  isOpen: boolean;
      children: React.ReactNode;
      position?: string;
}

export const SelectContent: FC<SelectContentProps> = ({ isOpen, children }) => {
  return isOpen ? <div className="absolute border mt-1">{children}</div> : null;
};