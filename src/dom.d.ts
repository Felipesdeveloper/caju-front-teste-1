import { Registration } from '@/interface/registrations';

export interface CustomEventMap {
  cj_changeStatus: CustomEvent<Registration>;
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
