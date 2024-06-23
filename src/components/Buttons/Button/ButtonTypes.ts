import { HTMLAttributes, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
} & HTMLAttributes<HTMLButtonElement>;
