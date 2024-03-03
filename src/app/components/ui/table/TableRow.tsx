import { FC, ReactNode } from 'react';

interface TableRowProps {
      children: ReactNode;
      className?: string;
}

export const TableRow: FC<TableRowProps> = ({ children, className }) => (
      <tr className={`border-b dark:bg-gray-800 dark:border-gray-700 ${className || ''}`}>{children}</tr>
);
