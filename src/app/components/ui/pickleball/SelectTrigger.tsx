import React, { FC } from 'react';

interface SelectTriggerProps {
      id: string;
      isOpen: boolean;
      setIsOpen: Function;
      children: React.ReactNode; // Add the children property
}

export const SelectTrigger: FC<SelectTriggerProps> = ({ id, isOpen, setIsOpen, children }) => {
      return (
            <button id={id} onClick={() => setIsOpen(!isOpen)} className="border px-4 py-2">
                  {children}
            </button>
      );
};
