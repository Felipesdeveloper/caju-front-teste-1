import { ReactNode } from 'react';
import { Props as PropsActions } from './Actions/ActionsTypes';

export type Props = {
  isShow: boolean;
  title: string;
  content: ReactNode;
  actions: PropsActions['actions'];
  onClose(): void;
};
