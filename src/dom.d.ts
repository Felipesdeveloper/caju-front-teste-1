import { Registration } from '@/interface/registrations';
import { ToastType } from '@/components/Toast/ToastTypes';

export interface cjChangeStatus {
  action: 'update' | 'delete';
  data: Registration;
}

export interface cjShowToast {
  message: string;
  type: ToastType;
}

export interface CustomEventMap {
  cj_changeStatus: CustomEvent<cjChangeStatus>;
  cj_showToast: CustomEvent<cjShowToast>;
}

declare global {
  interface Window {
    addEventListener<Type extends keyof CustomEventMap>(
      type: Type,
      listener: (this: Document, event: CustomEventMap[Type]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<Type extends keyof CustomEventMap>(
      type: Type,
      listener: (this: Document, event: CustomEventMap[Type]) => void,
    ): void;
    dispatchEvent<Type extends keyof CustomEventMap>(
      event: CustomEventMap[Type],
    ): void;
  }
}
