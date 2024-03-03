import { FC, ReactNode } from 'react';

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export const TableCell: FC<TableCellProps> = ({ children, className }) => (
  <td className={`py-4 px-6 ${className || ''}`}>{children}</td>
);
