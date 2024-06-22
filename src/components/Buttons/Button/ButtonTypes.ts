import { HTMLAttributes, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
