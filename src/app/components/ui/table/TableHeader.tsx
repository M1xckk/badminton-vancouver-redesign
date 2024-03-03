import { FC, ReactNode } from 'react';

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export const TableHeader: FC<TableHeaderProps> = ({ children, className }) => (
  <th className={`py-3 px-6 ${className || ''}`}>{children}</th>
);
