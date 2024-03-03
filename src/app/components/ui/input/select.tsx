import React, { useState } from 'react';

interface SelectProps {
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectTrigger: React.FC<SelectProps> = ({ children }) => {
  return <button>{children}</button>;
};

export const SelectContent: React.FC<SelectProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export const SelectItem: React.FC<SelectProps & { value: string }> = ({ children, value }) => {
  return <li data-value={value}>{children}</li>;
};

export const SelectValue: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};
