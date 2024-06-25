import { HTMLAttributes, ReactNode } from 'react';

export type PropsStyles = {
  $bgcolor?: string;
  $color?: string;
};

export type Props = {
  children: ReactNode;
} & PropsStyles &
  HTMLAttributes<HTMLButtonElement>;
