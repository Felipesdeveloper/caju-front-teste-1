import { Status } from '@/interface/registrations';

export interface CustomEventMap {
  cj_changeStatus: CustomEvent<{
    id: string;
    action: Status;
  }>;
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
