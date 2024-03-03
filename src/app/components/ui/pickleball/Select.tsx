// components/ui/select/Select.tsx
import React, { FC, useState, cloneElement, ReactElement } from 'react';

interface SelectProps {
  children: ReactElement[];
}

export const Select: FC<SelectProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const childrenWithProps = React.Children.map(children, child =>
    cloneElement(child, { isOpen, setIsOpen })
  );

  return <div className="relative">{childrenWithProps}</div>;
};

