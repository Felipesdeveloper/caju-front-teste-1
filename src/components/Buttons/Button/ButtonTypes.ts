import { ButtonHTMLAttributes, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  $variant?: 'primary' | 'secondary';
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
