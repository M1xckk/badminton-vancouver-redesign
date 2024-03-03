import { FC, ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

export const Table: FC<TableProps> = ({ children }) => {
  return <table className="min-w-full">{children}</table>;
};
