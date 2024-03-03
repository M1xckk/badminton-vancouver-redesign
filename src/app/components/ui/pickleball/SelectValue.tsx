import React, { FC } from 'react';

interface SelectValueProps {
  placeholder: string;
}

export const SelectValue: FC<SelectValueProps> = ({ placeholder }) => {
  return <span className="px-4 py-2">{placeholder}</span>;
};