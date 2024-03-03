import { FC, ReactNode } from 'react';

interface TableBodyProps {
  children: ReactNode;
}

export const TableBody: FC<TableBodyProps> = ({ children }) => (
  <tbody className="bg-white dark:bg-gray-800">{children}</tbody>
);
