import React, { FC, MouseEventHandler } from 'react';

interface SelectItemProps {
  value: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

export const SelectItem: FC<SelectItemProps> = ({ value, onClick, children }) => {
  return (
    <div onClick={onClick} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
      {children}
    </div>
  );
};